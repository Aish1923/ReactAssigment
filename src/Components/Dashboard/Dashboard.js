import React, { useEffect, useState } from "react";
import "./style.css";
import { ProgressSpinner } from "primereact/progressspinner";
import axios from "axios";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import CardComponent from "../CardComponent";

function Dashboard() {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const [originalEmpList, setoriginalEmpList] = useState([]);
  const [showSpinner, setshowSpinner] = useState(false);
  const [first, setFirst] = useState(0);
  const [listView, setListView] = useState(false);
  const numberOfRecordsPerPage = 10;

  /*api call to get the list of employees to be shown on dashbord*/
  useEffect(() => {
    setshowSpinner(true);
    const apiKey = "";//api key to be added here
    const URL = "https://api.1337co.de/v3/employees";  //include the url a in constant file
    axios.get(URL, { headers: { Authorization: apiKey } })
      .then((response) => {
        console.log(response.data);
        setoriginalEmpList(response.data);
        setEmployeeInfo(response.data.slice(0, numberOfRecordsPerPage));
        setshowSpinner(false);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

  /*function to be called on each page number click on a paginator*/
  const onPageChange = (e) => {
    setEmployeeInfo(
      originalEmpList.slice(e.first, e.first + numberOfRecordsPerPage)
    );
    setFirst(e.first);
  };

  /*function to be called for sorting employees with name and office in descending order*/
  const sortEmployeeNames = () => {
    var sortedList = originalEmpList.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (b.name > a.name) return 1;

      if (a.office > b.office) return -1;
      if (b.office > a.office) return 1;

      return 0;
    });
    setEmployeeInfo(sortedList.slice(first, first + numberOfRecordsPerPage));
  };

  /*function to be called for sorting employees with name and office in ascending order*/
  const sortEmployeeNamesasc = () => {
    var sortedList = originalEmpList.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;

      if (a.office > b.office) return 1;
      if (b.office > a.office) return -1;

      return 0;
    });
    console.log("sorted,", sortedList);
    setEmployeeInfo(sortedList.slice(first, first + numberOfRecordsPerPage));
  };

  /*function to be called for setting list view on dashboard*/
  const showlistView = () => {
    setListView(true);
  };
  /*function to be called for setting grid view on dashboard*/
  const gridView = () => {
    setListView(false);
  };

  return (
    <React.Fragment>
      {showSpinner ? (
        <div className="progress-spinner">
          <ProgressSpinner></ProgressSpinner>
        </div>
      ) : (
        ""
      )}
      {console.log("employeeInfo", employeeInfo)}
      <div className="maincontainer">
        <div className="content">
          <div className="contentheading">The fellowship of tretton37</div>
          <div className="ToolBarRegion">
            {/* <img className="sorticons" src={upicon} alt="ascImg"></img>
             <img className="sorticons" src={down} alt="descImg"></img> */}
            <div className="Views">
              <div className="viewText">Sort</div>
              <div className="viewActionButtons">
                <Button
                  label="Asc"
                  className="p-button-secondary p-button-text Sortbuttons"
                  onClick={() => sortEmployeeNamesasc()}
                />
                <Button
                  label="Desc"
                  className="p-button-secondary p-button-text Sortbuttons"
                  onClick={() => sortEmployeeNames()}
                />
              </div>
            </div>
            <div className="Views">
              <div className="viewText">Views</div>
              <div className="viewActionButtons">
                <div>
                  <Button
                    label="List"
                    className="p-button-secondary p-button-text ViewButtons"
                    onClick={() => showlistView()}
                  />
                  <Button
                    label="Grid"
                    className="p-button-secondary p-button-text ViewButtons"
                    onClick={() => gridView()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={listView ? "listView" : "container"}>
            {employeeInfo.map((item) => {
              return <CardComponent cardDetail={item} />;
            })}
          </div>
        </div>
        <Paginator
          first={first}
          rows={numberOfRecordsPerPage}
          totalRecords={originalEmpList.length}
          onPageChange={(e) => onPageChange(e)}
        ></Paginator>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
