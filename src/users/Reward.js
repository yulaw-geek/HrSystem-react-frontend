import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


export default function Reward() {

    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        loadReward();
      }, []);

      const loadReward=async()=>{
        const result = await axios.get("http://localhost:8081/rewardreact")
        setRewards(result.data);
        console.log(result.data)
      }


  return (
    <div className='container'>
    <div className='py-4'>
    <table className="table border">
<thead>
<tr>
  <th scope="col">序号</th>
  <th scope="col">部门</th>
  <th scope="col">分发比例</th>
  <th scope="col">技术奖金</th>
  <th scope="col">总奖金包</th>
</tr>
</thead>
<tbody>
{
  rewards.map((reward, index)=>(
    <tr>
    <th scope="row" key={index}>{index+1}</th>
    <td>{reward.department}</td>
    <td>{reward.ratio}</td>
    <td>{reward.tech_reward}</td>
    <td>{reward.total_reward}</td>
  </tr>
  ))
}

</tbody>
</table>
    </div>
</div>
  )
}
