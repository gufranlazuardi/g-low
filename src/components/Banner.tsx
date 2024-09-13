import React from 'react'

const Banner = () => {
  return (
    <div className='py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]'>
        <div className='container'>
            <p className='font-medium'>
                <span className='hidden sm:inline'>
                    This page is included in a free SaaS Website Kit.{" "}
                </span>
                <a href="#" className='underline underline-offset-4 font-medium'>
                Explore the page
                </a>
            </p>
            
        </div>
    </div>
  )
}

export default Banner