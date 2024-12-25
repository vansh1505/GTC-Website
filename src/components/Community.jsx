import React from 'react'

const clubs = [
    { name: 'AI-ML CLUB', description: 'Focuses on artificial intelligence and machine learning.', img: '/Club Logos/AIML.png' },
    { name: 'WEB DEVELOPMENT CLUB', description: 'Dedicated to web development technologies.', img: '/Club Logos/WEBDEVELOPMENT.png' },
    { name: 'CYBER SECURITY CLUB', description: 'Promotes cybersecurity awareness and skills.', img: '/Club Logos/CYBSEC.png' },
    { name: 'SOFTWARE DEVELOPMENT CLUB', description: 'Explores software development practices.', img: '/Club Logos/SFDV.png' },
    { name: 'iOS DEVELOPMENT CLUB', description: 'Focuses on iOS app development.', img: '/Club Logos/ios.png' },
    { name: 'MICROSOFT TECHNOLOGY CLUB', description: 'Dedicated to Microsoft technologies.', img: '/Club Logos/MICSFT.png' },
    { name: 'GOOGLE DEVELOPERS CLUB', description: 'Explores Google technologies and tools.', img: '/Club Logos/Google.png' },
    { name: 'GAME DEVELOPMENT CLUB', description: 'Focuses on game development skills.', img: '/Club Logos/Game.png' },
    { name: 'ROBOTICS & AUTOMATION CLUB', description: 'Promotes robotics and automation.', img: '/Club Logos/Robotics.png' },
    { name: 'CLOUD COMPUTING CLUB', description: 'Explores cloud computing technologies.', img: '/Club Logos/cloud.png' },
    { name: 'AR & VR CLUB', description: 'Focuses on augmented and virtual reality.', img: '/Club Logos/ARVR.png' },
    { name: 'MOBILE DEVELOPMENT CLUB', description: 'Dedicated to mobile app development.', img: '/Club Logos/MBDV.png' },
    { name: 'DATA SCIENCE CLUB', description: 'Explores data science and analytics.', img: '/Club Logos/DSCL.png' },
    { name: 'NETWORKING CLUB', description: 'Promotes networking technologies and skills.', img: '/Club Logos/Networking.png' },
    { name: 'GTC PROMOTION CLUB', description: 'Focuses on promoting GTC activities.', img: '/Club Logos/promotion.png' },
    { name: 'GTC MANAGEMENT CLUB', description: 'Dedicated to managing GTC events.', img: '/Club Logos/management.jpg' }
];

const Community = () => {
  return (
    <>
    <div className='mt-8'>
    <h1 className='text-4xl font-bold text-center'>Explore Our Council</h1>
    <div className='flex justify-center flex-wrap '>
    {clubs.map((item, index) => {
      return (
        <div key={index} className='bg-gray-200 p-4 rounded-lg m-4 w-1/4'>
        <img src={item.img} className='w-full h-48 object-cover' />
        <h2 className='text-xl font-bold mt-2'>{item.name}</h2>
        <p>{item.description}</p>
        </div>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default Community