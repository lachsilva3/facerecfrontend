import React from "react";
import {useState,useEffect} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "./attendance_log.css";

const Attendance=()=>{

  const[result,setResult]= useState([]);
 
  const getData = ()=>
  {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setResult( res));
  }
  
  useEffect(() => {
      getData();
  },)


    return(
        <>

  <div className="container3">
                <div className="row mt-3">
                <center><h1>Attendance Log</h1></center>
                {/*Table with generated data  */}
                   <table className="table" id="table-to-xls">
                    <thead className="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Student Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                         {result.map((res)=>
                            <tr>
                            <td>{res.name}</td>
                            <td>{res.username}</td>
                            <td>{res.email}</td>
                            </tr>
                          )}   
                       
                    </tbody>   
                </table>
{/* Button to download csv file */}
                <center><ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn3 btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Downlaod CSV File"/></center>
             </div>
            </div>





        
        
        
        
        
        </>
    )
}
export default Attendance