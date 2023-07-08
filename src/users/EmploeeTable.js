import React, { useState, useEffect } from 'react'
import axios from 'axios'




export default function EmploeeTable() {

    const [employeetables, setEmployeeTables] = useState([]);

    useEffect(() => {
        loadEmployeeTable();
      }, []);

      const loadEmployeeTable=async()=>{
        const result = await axios.get("http://localhost:8081/employeetablereact")
        setEmployeeTables(result.data);
        console.log(result.data)
      }


  return (
    <div className='container'>
    <div className='py-4'>
    <table className="table border">
<thead>
<tr>
  <th scope="col">编号</th>
  <th scope="col">姓名</th>
  <th scope="col">平日加班费</th>
  <th scope="col">周末加班费</th>
  <th scope="col">节假日加班费</th>
  <th scope="col">周报</th>
  <th scope="col">周报等级</th>
</tr>
</thead>
<tbody>
{
  employeetables.map((employeetable, index)=>(
    <tr>
    <th scope="row" key={index}>{index+1}</th>
    <td>{employeetable.name}</td>
    <td>{employeetable.overtimepay1}</td>
    <td>{employeetable.overtimepay2}</td>
    <td>{employeetable.overtimepay3}</td>
    <td>{employeetable.degree}</td>
    <td>{employeetable.degree_coefficient}</td>
  </tr>
  ))
}

</tbody>
</table>
    </div>
</div>
  )
}
