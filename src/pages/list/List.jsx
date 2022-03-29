import React from "react";
import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/dataTable/DataTable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
