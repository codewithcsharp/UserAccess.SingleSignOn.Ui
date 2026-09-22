import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Navbar', () => ({ onDashboardClick }) => (
  <button type="button" onClick={onDashboardClick}>Dashboard</button>
));
jest.mock('./components/ImageSlider', () => () => <div>Landing slider</div>);
jest.mock('./components/DestinationSection', () => () => <div>Destinations</div>);
jest.mock('./components/TestimonialSection', () => () => <div>Testimonials</div>);
jest.mock('./components/Footer', () => () => <div>Footer</div>);
jest.mock('./components/Dashboard', () => () => <main>Company Dashboard</main>);

describe('App', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('shows the landing page by default', () => {
    render(<App />);

    expect(screen.getByText('Landing slider')).toBeInTheDocument();
    expect(screen.queryByText('Company Dashboard')).not.toBeInTheDocument();
  });

  it('toggles the dashboard and scrolls to the top', () => {
    render(<App />);
    const dashboardButton = screen.getByRole('button', { name: 'Dashboard' });

    fireEvent.click(dashboardButton);
    expect(screen.getByText('Company Dashboard')).toBeInTheDocument();
    expect(screen.queryByText('Landing slider')).not.toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    fireEvent.click(dashboardButton);
    expect(screen.getByText('Landing slider')).toBeInTheDocument();
    expect(screen.queryByText('Company Dashboard')).not.toBeInTheDocument();
  });
});
