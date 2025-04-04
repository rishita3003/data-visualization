import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import DataTable from './DataTable';
//import CountryMap from './CountryMap';
import AgeDemographic from './AgeDemographic';
import Navbar from './Navbar';
import '../styles/Dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Mock data - replace with API call later
    const fetchData = () => {
      const mockData = [
        { id: 1, label: 'Jan', value: 100 },
        { id: 2, label: 'Feb', value: 200 },
        { id: 3, label: 'Mar', value: 150 },
        { id: 4, label: 'Apr', value: 300 },
        { id: 5, label: 'May', value: 250 },
      ];
      
      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="main-content">
        <header className="content-header">
          <h1>Tourism Dashboard</h1>
          <div className="dashboard-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'countries' ? 'active' : ''}`}
              onClick={() => setActiveTab('countries')}
            >
              Countries Map
            </button>
            <button 
              className={`tab-button ${activeTab === 'demographics' ? 'active' : ''}`}
              onClick={() => setActiveTab('demographics')}
            >
              Age Demographics
            </button>
          </div>
        </header>
        
        {activeTab === 'overview' && (
          <div className="dashboard-grid">
            <Chart data={data} />
            <DataTable data={data} />
          </div>
        )}
        
        {/* {activeTab === 'countries' && (
          <div className="dashboard-section">
            <h2>Global Tourism Destinations</h2>
            <CountryMap />
          </div>
        )} */}
        
        {activeTab === 'demographics' && (
          <div className="dashboard-section">
            <AgeDemographic />
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;