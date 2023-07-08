import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEmployee() {

    const [employee,setEmployee] = useState(
        {
            name:"",
            gender:"",
            age:"",
            education:"",
            place:"",
            state:"",
            department:"",
            grade:""
        })
    const {id} = useParams();

    useEffect(()=>{
        loadUser()},[]);

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8081/employee/${id}`);
        setEmployee(result.data);
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>员工信息</h2>
            <div className='card'>
                <div className='card-header'>
                    员工编号:{employee.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>姓名:</b>
                            {employee.name}
                        </li>
                        <li className='list-group-item'>
                            <b>性别:</b>
                            {employee.gender}
                        </li>
                        <li className='list-group-item'>
                            <b>年龄:</b>
                            {employee.age}
                        </li>
                        <li className='list-group-item'>
                            <b>学历:</b>
                            {employee.gender}
                        </li>
                        <li className='list-group-item'>
                            <b>地址:</b>
                            {employee.place}
                        </li>
                        <li className='list-group-item'>
                            <b>状态:</b>
                            {employee.state}
                        </li>
                        <li className='list-group-item'>
                            <b>部门:</b>
                            {employee.department}
                        </li>
                        <li className='list-group-item'>
                            <b>职级:</b>
                            {employee.grade}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>返回</Link>
        </div>
    </div>
    </div>
  )
}
