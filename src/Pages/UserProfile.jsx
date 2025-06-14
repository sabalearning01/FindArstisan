import React from 'react'
import bg from '../assets/bg.png'
import profilepic from '../assets/profilepic.png'

const UserProfile = () => {
  return (
    <div>
        <img className='w-[100%] h-[200px]' src={bg} alt="Background" />

      <img className='rounded-full w-[150px] h-[150px]' src={profilepic} alt="Profile"  />

    </div>
  )
}

export default UserProfile
