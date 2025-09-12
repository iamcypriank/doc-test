import React from 'react'
import { Link } from 'react-router'

type SNS = {
    title : string,
    icon : string ,
    path : string
}

function SNSButton({ title , icon , path }:SNS) {
  return (

        <button className='hover:scale-105 hover:rotate-10 shadow-2xl'>
            <a 
            href={path} 
            target="_blank"
            className=' border-1 rounded-md flex gap-2 dark:bg-[#141923] bg-[#3C3C43]  py-2 px-6 justify-center items-center'>
            <img
            className='h-[28px]'
             src={icon} />
            <p className='text-white text-medium'>{title}</p>
        </a>
        </button>
  )

}

export default SNSButton