import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegistrationRequest from './RegistrationRequest';

describe('RegistrationRequest', () => {
  const formData = { username: 'alex', email: 'alex@example.com', profilePhoto: 'data:image/png;base64,image' };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('posts registration data and calls OnSuccess', async () => {
    const responseData = { created: true };
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => responseData });
    const onSuccess = jest.fn();

    render(<RegistrationRequest FormData={formData} OnSuccess={onSuccess} />);
    fireEvent.click(screen.getByRole('button', { name: 'Register' }));

    await waitFor(() => expect(onSuccess).toHaveBeenCalledWith(responseData));
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:44398/api/Users/userinfo/registranstion',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(formData),
      }),
    );
  });

  it('shows an error and calls OnError when registration fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    const onError = jest.fn();

    render(<RegistrationRequest FormData={formData} OnError={onError} />);
    fireEvent.click(screen.getByRole('button', { name: 'Register' }));

    expect(await screen.findByText('Something went wrong... Registration failed')).toBeInTheDocument();
    expect(onError).toHaveBeenCalledWith('Registration failed');
  });
});
