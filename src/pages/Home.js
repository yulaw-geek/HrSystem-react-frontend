import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';




export default function Home() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
      }, []);

      const loadEmployees=async()=>{
        const result = await axios.get("http://localhost:8081/employees")
        setEmployees(result.data);
        console.log(result.data)
      }

      const deleteEmployee=async(id)=>{
        await axios.delete(`http://localhost:8081/employee/${id}`)
        loadEmployees()
      }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border">
  <thead>
    <tr>
      <th scope="col">编号</th>
      <th scope="col">姓名</th>
      <th scope="col">性别</th>
      <th scope="col">年龄</th>
      <th scope="col">学历</th>
      <th scope="col">地址</th>
      <th scope="col">状态</th>
      <th scope="col">部门</th>
      <th scope="col">职级</th>
      <th scope='col'>操作</th>
    </tr>
  </thead>
  <tbody>
    {
      employees.map((employee, index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{employee.name}</td>
        <td>{employee.gender}</td>
        <td>{employee.age}</td>
        <td>{employee.education}</td>
        <td>{employee.place}</td>
        <td>{employee.state}</td>
        <td>{employee.department}</td>
        <td>{employee.grade}</td>
        <td>
          <Link className='btn btn-primary mx-2' to={`/viewemployee/${employee.id}`}>查看</Link>
          <Link className='btn btn-outline-primary mx-2'
          to={`/editemployee/${employee.id}`}
          >编辑</Link>
          <button className='btn btn-danger mx-2' onClick={()=>deleteEmployee(employee.id)}>
            删除</button>
        </td>
      </tr>
      ))
    }

  </tbody>
</table>
        </div>
    </div>
  )
}
