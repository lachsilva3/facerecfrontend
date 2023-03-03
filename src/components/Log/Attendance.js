import React from "react";
import "./attendance_log.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link, NavLink } from "react-router-dom";

const Attendance=()=>{
    return(
        <>
          <div className="container3">

<div class="box3">
 <br></br>
 <center><h1>Attendance Log</h1></center>
  <br></br>
  <Table>
      <Thead>
        <Tr>
        <Th>Date</Th>
          <Th>Student Name</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        
        <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </Tr>
        
        <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </Tr>
        
        <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </Tr>
        
        <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </Tr>
        
        <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        </Tr>
        
      </Tbody>
    </Table>








</div>
</div>
        
        
        
        
        
        </>
    )
}
export default Attendance