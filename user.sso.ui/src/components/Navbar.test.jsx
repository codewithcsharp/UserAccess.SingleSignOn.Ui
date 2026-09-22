import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('../apicomponents/RegistrationRequest', () => () => <button type="button">Register</button>);
jest.mock('../apicomponents/LoginRequest', () => ({ children, onSuccess }) => (
  <div>{children({ handleLogin: () => onSuccess({ username: 'signed-in-user', photoUrl: '/profile.jpg' }), loading: false })}</div>
));

describe('Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
    window.FileReader = class MockFileReader {
      readAsDataURL() {
        this.result = 'data:image/png;base64,preview';
        this.onload();
      }
    };
  });

  it('calls the dashboard callback and closes the mobile menu after selection', () => {
    const onDashboardClick = jest.fn();
    render(<Navbar onDashboardClick={onDashboardClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }));

    expect(onDashboardClick).toHaveBeenCalledTimes(1);
  });

  it('persists the logged-in profile and displays the username', async () => {
    render(<Navbar onDashboardClick={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: 'Open login form' }));
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => expect(screen.getByText('signed-in-user')).toBeInTheDocument());
    expect(JSON.parse(localStorage.getItem('userProfile'))).toEqual({
      username: 'signed-in-user',
      photoUrl: '/profile.jpg',
    });
  });

  it('previews a selected profile photo during registration', () => {
    render(<Navbar onDashboardClick={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: 'Open login form' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    const file = new File(['profile'], 'profile.png', { type: 'image/png' });
    fireEvent.change(screen.getByLabelText('Profile photo'), {
      target: { files: [file] },
    });

    expect(screen.getByRole('img', { name: 'Selected profile preview' })).toHaveAttribute(
      'src',
      'data:image/png;base64,preview',
    );
  });
});
