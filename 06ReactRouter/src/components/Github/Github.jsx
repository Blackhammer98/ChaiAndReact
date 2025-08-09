import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Blackhammer98')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-gray-300 text-center text-3xl'>Github Name : {data.name }
    <img src={data.avatar_url} alt="avatar" width={300}/>
    
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
  
const response = await fetch('https://api.github.com/users/Blackhammer98')

return response.json()

}