import React from 'react'
import './SpendTime.css'

const SpendTime = ({ totalReadTime }) => {
  return (
    <div className="spendTime">
      <h5>Spent Time on Reading: {totalReadTime} min</h5>
    </div>
  );
};

export default SpendTime