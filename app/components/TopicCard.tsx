import React from 'react'
import { Link } from 'react-router'
import { ArrowRight } from "lucide-react";
import { motion } from 'motion/react';

type Topic = {
    title : string,
    description : string,
    path : string,
    icon : string,
}


//card animation
const card = {
    hidden : {
        opacity : 0,
        y : 20
    },
    visible :{
        opacity : 1,
        y : 0,
        transition : {
            duration : .3
        }
    },
    
}


function TopicCard({ title , description , path, icon}:Topic) {
  return (
    <motion.div 
    
    variants={card}
    className="flex flex-col gap-4 h-full p-6 border rounded-md shadow-md hover:shadow-2xl">
        <h1 
        className="text-2xl font-bold flex gap-2 items-center "
        >{title}
        <img 
        className='h-[26px] w-[26px]'
        src={icon} />
        </h1>

        <p className="flex-grow">{description}</p>

        <motion.div
        whileHover={'hover'}  
        className="mt-auto px-6 py-2 bg-[#7F4BEA] text-white font-medium rounded-md  hover:bg-[#6939c6] ">
        <Link
        className='flex items-center justify-between'
            to={path}
        >
            <span>Get Started with {title}</span>
            <motion.span
            variants={{
                hover : {
                    x: [12,0,12,0]
                }
            }}
            
            
            ><ArrowRight />
            </motion.span>
        </Link></motion.div>
        </motion.div>

  )
}

export default TopicCard