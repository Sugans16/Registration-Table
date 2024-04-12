import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import ProfilesView from "./profileview.jsx";
import Registration from "./registration.jsx";

const TotalControl = () => {
  const [dataCollection, setDataCollection] = useState([]);

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Registration setDataCollection={setDataCollection} />} /> {/* Use the "element" prop */}
        <Route path="/storedvalues" element={<ProfilesView dataCollection={dataCollection} />} /> {/* Use the "element" prop */}
      </Routes>
    </Router>
  );
};

export default TotalControl;
