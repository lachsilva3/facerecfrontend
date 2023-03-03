import React, { useState } from 'react';
import "./card_one.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Card_one = () => {
  const [value, onChange] = useState(new Date());

  return (
   <>   
{/* test */}
    <div className="container1">

       <div class="box2">
        <br></br>
        <h1>Time Table</h1>
        <br></br>
<Table>
      <Thead>
        <Tr>
        <Th>Time</Th>
          <Th>Monday</Th>
          <Th>Tuesday</Th>
          <Th>Wednesday</Th>
          <Th>Thrusday</Th>
          <Th>Friday</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>9:15-10:15</Td>
          <Td>MSA</Td>
          <Td>PORJECT</Td>
          <Td>MSA</Td>
          <Td>PROJECT</Td>
          <Td>PROJECT</Td>
          
        </Tr>
        <Tr>
            <Td>10:15-11:15</Td>
            <Td>CTNS</Td>
            <Td>PROJECT</Td>
            <Td>NPTEL</Td>
            <Td>PROJECT</Td>
            <Td>PROJECT</Td>
        </Tr>
        <Tr>
            <Td>11:15-12:15</Td>
            <Td>NPTEL</Td>
            <Td>PROJECT</Td>
            <Td>CTNS</Td>
            <Td>PROJECT</Td>
            <Td>PROJECT</Td>
        </Tr>
        <Tr>
            <Td>12:15 - 1:00</Td>
            <Td>MSA</Td>
            <Td>PROJECT</Td>
            <Td>MSA</Td>
            <Td>PROJECT</Td>
            <Td>PROJECT</Td>
        </Tr>
        <Tr>
            <Td>2:00-3:00</Td>
            <Td>CTNS</Td>
            <Td>PROJECT</Td>
            <Td>NPTEL</Td>
            <Td>PROJECT</Td>
            <Td>PROJECT</Td>
        </Tr>
      </Tbody>
    </Table>



    <br></br><br></br> 
    <center>
   <button  type="submit" className="btn2 " >
    Take Attendance
    </button>
    </center>


       </div>
    </div>
    </> 
  );
};

export default Card_one;

