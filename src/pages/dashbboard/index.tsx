import React from "react";
import Nav from "../../components/dashboard/nav";
import Layout from "../../components/layout";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Nav />
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
