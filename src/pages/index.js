import React from 'react';

export default function Index() {
  return (
    <div className="min-vh-100 d-flex align-items-center p-3 bg-light">
      <div className="card rounded-lg mx-auto border" style={{ maxWidth: '28rem' }}>
        <div className="card-header bg-white py-3">
          <h4 className="mb-0">Brisk AIO</h4>
        </div>
        <div className="card-body">
        <p>
          It seems that there is no available stock right now. Follow our Twitter @BriskAIO to be notified on our next 
          planned restock.
        </p>
        <div className="bg-light rounded my-1 px-2 py-1 text-monospace"></div>
        </div>
      </div>
    </div>
  );
}
