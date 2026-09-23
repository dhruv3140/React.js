import React from 'react'
import {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
  return (
    <>
    <div className='bg-gray-500 p-10 m-10 text-white text-center text-3xl'>Github: Followers:{data.followers}</div>
    <img src={data.avatar_url} alt="" width={300}/>
    </>
  )
}

export default Github

export const githubInfoLoader = () => {
    return fetch('https://api.github.com/users/dhruv3140').then(response => response.json())
}