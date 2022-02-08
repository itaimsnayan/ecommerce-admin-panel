import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Dashboard(props) {
  const { sidebar, navbar } = props;
  return (
    <>  
      {sidebar && <Sidebar />}
      {navbar && <Navbar />}
    </>
  );
}

export default Dashboard;
