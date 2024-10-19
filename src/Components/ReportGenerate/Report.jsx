import React, { useState } from 'react';
import '../ReportCSS/Report.css';

const Report = () => {
  const [reportType, setReportType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [department, setDepartment] = useState('');
  const [format, setFormat] = useState('');

  const handleGenerateReport = (e) => {
    e.preventDefault();
    const reportData = { reportType, fromDate, toDate, department, format };
    console.log(reportData)
    fetch('/api/savePersonalInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body:JSON.stringify(reportData),
    })
    .then(response => response.json())
   
      
      
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="report-wrapper">
      <h2 className="report-title">Generate Reports</h2>
      <div className="report-container">
        <form onSubmit={handleGenerateReport} className="report-form">
          <div className="form-group">
            <label>Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="input-field"
              required
            >
              <option value="">Choose</option>
              <option value="Sales">Sales</option>
              <option value="Inventory">Inventory</option>
              <option value="HR">HR</option>
            </select>
          </div>

          <div className="date-group">
            <div className="form-group half-width">
              <label>From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div className="form-group half-width">
              <label>To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="input-field"
              required
            >
              <option value="">Department</option>
              <option value="Finance">Finance</option>
              <option value="HR">HR</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="form-group format-group">
            <label>Format</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  value="PDF"
                  checked={format === 'PDF'}
                  onChange={(e) => setFormat(e.target.value)}
                /> PDF
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="CSV"
                  checked={format === 'CSV'}
                  onChange={(e) => setFormat(e.target.value)}
                /> CSV
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="Excel"
                  checked={format === 'Excel'}
                  onChange={(e) => setFormat(e.target.value)}
                /> Excel
              </label>
            </div>
          </div>

          <button type="submit" className="generate-button">Generate Report</button>
        </form>
      </div>
    </div>
  );
};

export default Report;
