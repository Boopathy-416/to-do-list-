import React from 'react';

function FilterButtons({ setFilter }) {
  return (
    <div className="btn-group my-3">
      <button onClick={() => setFilter('all')} className="btn mx-1 btn-outline-secondary">
        All
      </button>
      <button onClick={() => setFilter('completed')} className="btn mx-1 btn-outline-success">
        Completed
      </button>
      <button onClick={() => setFilter('incomplete')} className="btn mx-1 btn-outline-warning">
        Incomplete
      </button>
    </div>
  );
}

export default FilterButtons;
