import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    query: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingData = JSON.parse(sessionStorage.getItem('registrationData'));
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
    const newData = [...existingData, formData];
    sessionStorage.setItem('registrationData', JSON.stringify(newData));
    setFormData({
      message: '',
      name: '',
      query: '',
      type: ''
    });
  };
  
   
  return (
    <div style={{display:"flex", backgroundColor:"yellowgreen", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", height:"100vh", fontSize:"18px"}}>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit} style={{display:"flex", alignItems:"baseline", justifyContent:"flex-start", flexDirection:"column", marginTop:"5%"}}>
        <div style={{display:"flex", flexDirection:"column", margin:"10%", alignItems:"center"}}>
        <div>
          <label>Message:</label>
          <input type="text" name="message" value={formData.message} onChange={handleChange} style={{width:"100%", padding:"5px"}} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{width:"100%", padding:"5px"}}/>
        </div>
        <div>
          <label>Query:</label>
          <input type="text" name="query" value={formData.query} onChange={handleChange} style={{width:"100%", padding:"5px"}}/>
        </div>
        <div>
          <label>Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} style={{width:"100%", padding:"5px"}}/>
        </div>
        <button type="submit" style={{width:"60%", alignItems:"center", justifyContent:"center", margin:"10px"}}>Submit</button>
        </div>
      </form>
      <button style={{backgroundColor:"green", padding:"10px"}}>
      <Link to="/storedvalues" style={{textDecoration:"none", fontSize:"16px", color:"#fff"}}>Go to Profile View</Link>
      </button>
    </div>
  );
};

export default Registration;
