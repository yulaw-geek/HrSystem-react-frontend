import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function PerformanceResult() {

    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        loadPerformance();
      }, []);

      const loadPerformance=async()=>{
        const result = await axios.get("http://localhost:8081/performance")
        setPerformances(result.data);
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
  <th scope="col">绩效奖金</th>
</tr>
</thead>
<tbody>
{
  performances.map((performance, index)=>(
    <tr>
    <th scope="row" key={index}>{index+1}</th>
    <td>{performance.name}</td>
    <td>{performance.performancereward}</td>
  </tr>
  ))
}
</tbody>
</table>
    </div>
</div>
  )
}
