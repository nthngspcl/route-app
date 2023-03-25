import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const ItemDetails = () => {
    const navigate = useNavigate()
  const { id } = useParams();
    console.log(id)
  return (
    <div>
      <h2>Item {id} Details</h2>
      <p>Item ID: {id}</p>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};

export default ItemDetails;