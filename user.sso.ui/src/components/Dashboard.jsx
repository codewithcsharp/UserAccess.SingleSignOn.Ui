import React from 'react';
import {
  BarChart3,
  Bell,
  ChevronDown,
  CircleHelp,
  Download,
  LayoutDashboard,
  MoreHorizontal,
  Package,
  Search,
  Settings,
  Users,
} from 'lucide-react';
import '../css/Dashboard.css';

const metrics = [
  { label: 'Actual Revenue', value: '$1.62M', change: '8.5%', tone: 'teal' },
  { label: 'Gross Profit', value: '$1.39M', change: '8.7%', tone: 'blue' },
  { label: 'Total Customers', value: '723.16K', change: '11.0%', tone: 'green' },
  { label: 'Total Sales', value: '$16.68M', change: '7.0%', tone: 'amber' },
  { label: 'Total COGS', value: '$788.52K', change: '9.1%', tone: 'coral' },
  { label: 'Total Expenses', value: '$1.48M', change: '14.0%', tone: 'violet' },
];

const products = [
  ['Smartphone X', '$2.15M', '13.1%'],
  ['Laptop Pro 15', '$1.79M', '10.9%'],
  ['Wireless Earbuds', '$1.41M', '8.6%'],
  ['4K Smart TV', '$1.34M', '8.2%'],
  ['Gaming Console', '$1.27M', '7.7%'],
];

const monthlySales = [
  { month: 'Jan', value: 1.05 },
  { month: 'Feb', value: 1.28 },
  { month: 'Mar', value: 1.11 },
  { month: 'Apr', value: 1.23 },
  { month: 'May', value: 1.43 },
  { month: 'Jun', value: 1.26 },
  { month: 'Jul', value: 1.36 },
  { month: 'Aug', value: 1.62 },
  { month: 'Sep', value: 1.56 },
  { month: 'Oct', value: 1.42 },
  { month: 'Nov', value: 1.72 },
  { month: 'Dec', value: 2.12 },
];

const barData = [
  { label: 'Jan', sales: 1.45, target: 1.55 },
  { label: 'Feb', sales: 1.12, target: 1.43 },
  { label: 'Mar', sales: 1.36, target: 1.48 },
  { label: 'Apr', sales: 1.42, target: 1.54 },
  { label: 'May', sales: 1.5, target: 1.56 },
  { label: 'Jun', sales: 1.37, target: 1.5 },
  { label: 'Jul', sales: 1.47, target: 1.54 },
  { label: 'Aug', sales: 1.61, target: 1.65 },
  { label: 'Sep', sales: 1.5, target: 1.58 },
  { label: 'Oct', sales: 1.28, target: 1.45 },
  { label: 'Nov', sales: 1.45, target: 1.61 },
  { label: 'Dec', sales: 1.7, target: 1.7 },
];

const chartPoints = monthlySales.map((item, index) => `${(index / (monthlySales.length - 1)) * 100},${100 - ((item.value - 0.8) / 1.4) * 100}`).join(' ');

const Dashboard = () => (
  <main className="dashboard-shell">
    <aside className="dashboard-rail" aria-label="Dashboard navigation">
      <button className="rail-button rail-button-active" type="button" aria-label="Dashboard">
        <LayoutDashboard size={19} />
        <span>Home</span>
      </button>
      <button className="rail-button" type="button" aria-label="Reports">
        <BarChart3 size={19} />
        <span>Reports</span>
      </button>
      <button className="rail-button" type="button" aria-label="Customers">
        <Users size={19} />
        <span>Customers</span>
      </button>
      <button className="rail-button" type="button" aria-label="Products">
        <Package size={19} />
        <span>Products</span>
      </button>
      <div className="rail-spacer" />
      <button className="rail-button" type="button" aria-label="Settings">
        <Settings size={19} />
        <span>Settings</span>
      </button>
      <button className="rail-button" type="button" aria-label="Help">
        <CircleHelp size={19} />
        <span>Help</span>
      </button>
    </aside>

    <section className="dashboard-content">
      <header className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">Performance overview</p>
          <h1>DASHBOARD</h1>
        </div>
        <div className="dashboard-actions">
          <label className="dashboard-search">
            <Search size={16} aria-hidden="true" />
            <input type="search" placeholder="Search reports" aria-label="Search reports" />
          </label>
          <button className="dashboard-icon-button" type="button" aria-label="Notifications"><Bell size={17} /></button>
          <button className="dashboard-icon-button" type="button" aria-label="Download report"><Download size={17} /></button>
          <button className="date-filter" type="button">2024 <ChevronDown size={15} /></button>
        </div>
      </header>

      <div className="dashboard-toolbar">
        <div className="dashboard-tabs" role="tablist" aria-label="Dashboard views">
          <button className="dashboard-tab dashboard-tab-active" type="button" role="tab" aria-selected="true">Overview</button>
          <button className="dashboard-tab" type="button" role="tab" aria-selected="false">Sales</button>
          <button className="dashboard-tab" type="button" role="tab" aria-selected="false">Customers</button>
        </div>
        <button className="more-button" type="button" aria-label="More dashboard actions"><MoreHorizontal size={19} /></button>
      </div>

      <section className="metric-grid" aria-label="Key performance indicators">
        {metrics.map((metric) => (
          <article className={`metric-card metric-${metric.tone}`} key={metric.label}>
            <div className="metric-card-topline"><span>{metric.label}</span><span className="metric-dot" /></div>
            <strong>{metric.value}</strong>
            <p><span className="positive-arrow">▲</span> {metric.change} <span>vs. target</span></p>
          </article>
        ))}
      </section>

      <section className="dashboard-grid dashboard-grid-primary">
        <article className="panel sales-panel">
          <div className="panel-heading">
            <div><h2>Sales vs. target</h2><p>Monthly performance across all channels</p></div>
            <div className="chart-legend"><span><i className="legend-swatch legend-sales" />Sales</span><span><i className="legend-swatch legend-target" />Target</span></div>
          </div>
          <div className="bar-chart" aria-label="Sales compared with target by month">
            <div className="chart-y-labels"><span>$2M</span><span>$1M</span><span>$0</span></div>
            <div className="bar-chart-area">
              <div className="chart-grid-line chart-grid-top" /><div className="chart-grid-line chart-grid-middle" /><div className="chart-grid-line chart-grid-bottom" />
              <div className="bars">
                {barData.map((item) => <div className="bar-group" key={item.label}><div className="bar-target" style={{ height: `${(item.target / 2) * 100}%` }} /><div className="bar-sales" style={{ height: `${(item.sales / 2) * 100}%` }} /><span>{item.label}</span></div>)}
              </div>
            </div>
          </div>
        </article>

        <article className="panel category-panel">
          <div className="panel-heading"><div><h2>Gross profit by category</h2><p>Top performing product groups</p></div><MoreHorizontal size={18} /></div>
          <div className="horizontal-bars">
            {[['Electronics', 72], ['Home Appliances', 94], ['Furniture', 49], ['Accessories', 37]].map(([label, width]) => <div className="horizontal-bar-row" key={label}><span>{label}</span><div className="horizontal-bar-track"><div style={{ width: `${width}%` }} /></div><b>${Math.round(width * 0.11)}K</b></div>)}
          </div>
        </article>

        <article className="panel map-panel">
          <div className="panel-heading"><div><h2>Total customers by country</h2><p>Active customer distribution</p></div><MoreHorizontal size={18} /></div>
          <div className="customer-map" aria-label="Customer distribution map visualization">
            <div className="map-grid" /><span className="map-land map-land-one" /><span className="map-land map-land-two" /><span className="map-land map-land-three" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" /><span className="map-pin pin-four" /><span className="map-pin pin-five" />
            <span className="map-label map-label-one">NORTH<br />AMERICA</span><span className="map-label map-label-two">EUROPE</span><span className="map-label map-label-three">ASIA</span><span className="map-label map-label-four">AUSTRALIA</span>
          </div>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid-secondary">
        <article className="panel products-panel">
          <div className="panel-heading"><div><h2>Top products by revenue</h2><p>Best-selling products this year</p></div><button className="text-button" type="button">View all</button></div>
          <table><thead><tr><th>Product</th><th>Actual revenue</th><th>% of total</th></tr></thead><tbody>{products.map(([product, revenue, share]) => <tr key={product}><td>{product}</td><td>{revenue}</td><td>{share}</td></tr>)}<tr className="table-total"><td>Total</td><td>$16.68M</td><td>100.0%</td></tr></tbody></table>
        </article>

        <article className="panel channel-panel">
          <div className="panel-heading"><div><h2>Total sales by channel</h2><p>Revenue mix</p></div><MoreHorizontal size={18} /></div>
          <div className="donut-layout"><div className="donut-chart"><span>Sales<br /><strong>$16.68M</strong></span></div><div className="donut-legend"><span><i className="channel-online" />Online <b>15.7%</b></span><span><i className="channel-retail" />Retail <b>25.8%</b></span><span><i className="channel-distributor" />Distributor <b>58.5%</b></span></div></div>
        </article>

        <article className="panel trend-panel">
          <div className="panel-heading"><div><h2>Total sales by month</h2><p>Revenue trend in millions</p></div><MoreHorizontal size={18} /></div>
          <div className="line-chart"><div className="line-y-labels"><span>$2M</span><span>$1M</span><span>$0</span></div><div className="line-chart-area"><div className="chart-grid-line chart-grid-top" /><div className="chart-grid-line chart-grid-middle" /><div className="chart-grid-line chart-grid-bottom" /><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={chartPoints} /></svg>{monthlySales.map((item, index) => <span className="line-point" key={item.month} style={{ left: `${(index / (monthlySales.length - 1)) * 100}%`, bottom: `${((item.value - 0.8) / 1.4) * 100}%` }} />)}<div className="line-months">{monthlySales.filter((_, index) => index % 2 === 0).map((item) => <span key={item.month}>{item.month}</span>)}</div></div></div>
        </article>
      </section>
    </section>
  </main>
);

export default Dashboard;
