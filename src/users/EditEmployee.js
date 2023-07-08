import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditEmployee() {

    let navigate = useNavigate();

    const {id} = useParams();

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
    const {name, gender, age, education, place, state, department, grade} = employee

        useEffect(()=>{
            loadUser();
        },[])


    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]: e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/employee/${id}`, employee)
        navigate("/");
    }

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:8081/employee/${id}`)
        setEmployee(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>编辑信息</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        姓名
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your name' name='name' value={name}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='gender' className='form-label'>
                        性别
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your gender'  name='gender' value={gender}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='age' className='form-label'>
                        年龄
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your age'  name='age' value={age}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='education' className='form-label'>
                        学历
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your education'  name='education' value={education}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='place' className='form-label'>
                        地址
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your place'  name='place' value={place}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='state' className='form-label'>
                        状态
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your state'  name='state' value={state}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='department' className='form-label'>
                        部门
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your department'  name='department' value={department}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='grade' className='form-label'>
                        职级
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your grade'  name='grade' value={grade}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <button type='submit' className='btn btn-outline-primary'>提交</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"}>取消</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
