import React from 'react'
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ProfileContent from '../components/contents/ProfileContent'

export default function ProfilePage() {
  return (
    <div className="wrapper">
      <Navigation />
      <Sidebar />
      <ProfileContent />
      <Footer />
    </div>
  )
}
