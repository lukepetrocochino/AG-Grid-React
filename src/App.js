import React, { useState, useEffect, useRef } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "./App.scss";

const App = () => {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:1234/subscribers")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // style={{ height: 345, width: 600 }}

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          rowSelection="multiple"
          suppressHorizontalScroll={false}
        >
          <AgGridColumn
            field="name"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
          <AgGridColumn
            field="subscribedToChannel"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="subscribeData"
            sortable={true}
            filter={true}
            flex={1}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
};

export default App;
