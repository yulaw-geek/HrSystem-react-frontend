
import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="navbar-brand" to={"/"}>员工绩效系统</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="btn-group">
    <Link className='btn btn-outline-light me-2' to={"/addemployee"}>新增员工</Link>
    <Link className='btn btn-outline-light me-2' to={"/rewardreact"}>奖金概况</Link>
    <Link className='btn btn-outline-light me-2' to={"/employeetablereact"}>加班统计</Link>
    <Link className='btn btn-outline-light me-2' to={"/performance"}>绩效计算</Link>
    </div>
  </div>
</nav> 
    </div>
  )
}
