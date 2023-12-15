import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/saikat21')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img className='flex text-center' src={data.avatar_url} alt="git_picture"  width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
   const response= await fetch('https://api.github.com/users/saloni-hub')
    return response.json()
}