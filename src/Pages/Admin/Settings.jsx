import React from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/settings');
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your account settings here.</p>
      <ul>
        <li>Profile Settings</li>
        <li>Notification Preferences</li>
        <li>Privacy Settings</li>
        <li>Account Security</li>
      </ul>
      
    </div>
  )
}

export default Settings
