import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { useRef } from 'react';
import TopicCard from '@/components/TopicCard';
import { motion } from "motion/react";
import SNSButton from '@/components/SNSButton';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Telusko Docs' },
  ];
}


export default function Home() {


  //topics
  const topics = [
    {
      id : 1,
      title: 'Java',
      description : '“Learn Java, the language that powers millions of applications — from Android apps to enterprise systems. This section covers the essentials: syntax, object-oriented programming, and hands-on examples to get you building real projects quickly',
      path : 'docs/Java/01Getting-Started-with-Java',
      icon : '/java.svg'
    },
    {
      id : 2,
      title: 'Python',
      description: 'Learn Python, one of the most beginner-friendly and versatile languages. This section covers the essentials: syntax, data types, functions, and hands-on examples to help you start building projects right away.',
      path: 'docs/Python/01Getting-Started-with-Python',
      icon : '/python.svg'
    },
    {
      id: 4,
      title: 'Spring Boot',
      description: 'Learn Spring Boot, the framework that simplifies Java backend development. This section covers project setup, REST APIs, database integration, and practical examples to help you build production-ready applications with ease.',
      path: 'docs/Springboot/01Getting-Started-with-Springboot',
      icon : '/springboot.svg'
    },
  ];

  //animation - hero-text
  const letter = {
    hidden : {
      opacity : 0,
      y : 20
    },
    visible : {
      opacity : 1,
      y : 0,
      transition :{
        duration : 0.3,
        ease : "easeIn"
      }
      
    }
  }
  const HeroTitle = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      transition :{
        staggerChildren  : 0.02
      }
    }
  }
  //animation - hero-text


  //animation - card
  const card = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      transition :{
        staggerChildren  : .05
      }
    }
  }


  const title = "Welcome to Telusko Docs";

  
  return (
    <HomeLayout {
      ...baseOptions()
      }>
        <div className='relative' >      
  
  {/* Gradient background */}
  <div 
  className="absolute inset-0
  bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),rgba(236,72,153,0.15),transparent)]
  dark:bg-[radial-gradient(circle_at_top,rgba(126,34,206,0.6),rgba(17,24,39,0.9),transparent)]">
</div>

  
  {/* hero-section */}
  <div className="p-4 mt-20 relative z-10 flex flex-col items-center justify-center min-h-[60vh] gap-8">
     <motion.h1 
            variants={HeroTitle}
            initial={'hidden'}
            animate={'visible'}
            className='dark:text-white  text-center text-6xl font-[900]'
            >
              {
                title.split('').map((text)=>{
                  return <motion.span
                  variants={letter}
                  >
                    {text}
                  </motion.span>
                })
              }
          

            </motion.h1>
            <motion.p

            initial={{
              opacity : 0,
              y : 20
            }}
            animate={{
              opacity : 1,
              y : 0
            }}
        

            className='max-w-[120ch] text-center self-center'
            >
              Welcome Aliens, You’ve just landed at your one-stop hub for 
              coding and tech. From beginner-friendly tutorials to advanced concepts, 
              these docs are built to be simple, practical, and fun. Whether you’re 
              exploring your first “Hello World” or diving deep into frameworks, 
              you’ll find clear steps, useful tips, and plenty of experiments to try.
               Learn at your own pace, enjoy the process, 
              and let’s build something out of this world together!
            </motion.p>
            <div className='flex justify-center gap-4'>
              <button className='hero-btn bg-[#7F4BEA] hover:bg-[#6939c6]  text-white'>
                <Link to="/docs">Get Started</Link>
              </button>
            </div>
          </div>

          {/* icons */}
          <div className='my-10 relative z-49 flex justify-center items-center gap-4'>
            <SNSButton
            path='https://www.youtube.com/@Telusko' 
            
            title="Youtube" 
            icon="/youtube.svg"/>

            <p>|</p>

            <SNSButton 
            path='https://github.com/navinreddy20' 
            title="Github" 
            icon="/github1.svg"/>
          </div>

        
          {/* bottom section */}
          <div className="relative z-50 mt-20 flex flex-col items-center gap-2">
            <motion.h2 
            initial={{
              opacity : 0,
              y : 30
            }}
            whileInView={{
              opacity : 1,
              y : 0,
            }}
            transition={{
              duration : .3,
              delay : .3
            }}
            className="text-center text-3xl sm:text-4xl font-semibold text-[#7F4BEA]">
              Quick Section to Get Started
            </motion.h2>
            <motion.p
            initial={{
              opacity : 0,
            }}
            whileInView={{
              opacity : 1,
            }}
            transition={{
              duration : .3,
              delay : .6
            }} 
            className="text-center max-w-[70ch]">
              Your quick path to setup, learning, and exploration begins here—guiding you step by step so you can unlock the full potential of these docs with ease.
            </motion.p>



            {/* topic card div */}
            <motion.div 
            variants={card}
            initial={'hidden'}
            whileInView={'visible'}
            className='mt-10 mb-10 relative z-19 p-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8'>
              {
              topics.map((topic)=>{
                return <TopicCard 
                key={topic.id}
                title={topic.title} 
                description={topic.description}
                path={topic.path}
                icon={topic.icon}
                 />
                })
              }

            </motion.div>  
          </div>
        </div>
    </HomeLayout>
  );
}
