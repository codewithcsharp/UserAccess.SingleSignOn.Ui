import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the dashboard workspace and KPI metrics', () => {
    render(<Dashboard />);

    expect(screen.getByRole('heading', { name: 'DASHBOARD' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Key performance indicators' })).toBeInTheDocument();
    expect(screen.getByText('$1.62M')).toBeInTheDocument();
    expect(screen.getAllByText('$16.68M').length).toBeGreaterThan(0);
    expect(screen.getByText('Smartphone X')).toBeInTheDocument();
    expect(screen.getByText('Total sales by channel')).toBeInTheDocument();
  });

  it('renders the dashboard navigation controls', () => {
    render(<Dashboard />);

    expect(screen.getByRole('button', { name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reports' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Customers' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Products' })).toBeInTheDocument();
  });
});
