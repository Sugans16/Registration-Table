import React from 'react';
import { Link } from 'react-router-dom';

const ProfileView = () => {
  const registrationData = JSON.parse(sessionStorage.getItem('registrationData'));

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", flexDirection:"column", backgroundColor:"burlywood", height:"100vh"}}>
      <h1>Profile View Page</h1>
      <table style={{ border: '2px solid black', borderCollapse: 'collapse', margin:"50px", backgroundColor:"#fff" }}>
        <tbody>
          {registrationData.map((data, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{`${index + 1}`}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}><b>Message:</b></td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.message}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}><b>Name:</b></td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}><b>Query:</b></td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.query}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}><b>Type:</b></td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{backgroundColor:"yellowgreen", padding:"10px"}}>
      <Link to="/" style={{textDecoration:"none", fontSize:"16px", color:"#333"}}>Back to Registration</Link>
      </button>
    </div>
  );
};

export default ProfileView;
