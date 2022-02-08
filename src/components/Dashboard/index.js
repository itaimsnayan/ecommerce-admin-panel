import { Layout } from "antd";
import React from "react";
import Sidebar from "../Sidebar";

function Dashboard(props) {
  const { sidebar } = props;
  return (
    <>
      <h1>Dashboard</h1>
      {sidebar && <Sidebar />}
    </>
  );
}

export default Dashboard;
