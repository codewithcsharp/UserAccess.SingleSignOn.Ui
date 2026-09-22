import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginRequest from './LoginRequest';

describe('LoginRequest', () => {
  const loginData = { username: 'alex', password: 'secret' };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('posts credentials and calls onSuccess with the response', async () => {
    const responseData = { username: 'alex', photoUrl: '/alex.jpg' };
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => responseData });
    const onSuccess = jest.fn();

    render(
      <LoginRequest LoginFormData={loginData} onSuccess={onSuccess}>
        {({ handleLogin, loading }) => (
          <button type="button" onClick={handleLogin} disabled={loading}>Login</button>
        )}
      </LoginRequest>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => expect(onSuccess).toHaveBeenCalledWith(responseData));
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:44398/api/Users/loginrequest',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(loginData),
      }),
    );
  });

  it('shows an error and calls onError when login fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    const onError = jest.fn();

    render(
      <LoginRequest LoginFormData={loginData} onError={onError}>
        {({ handleLogin }) => <button type="button" onClick={handleLogin}>Login</button>}
      </LoginRequest>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Something went wrong... Login failed')).toBeInTheDocument();
    expect(onError).toHaveBeenCalledWith('Login failed');
  });
});
