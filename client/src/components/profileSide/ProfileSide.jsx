import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
import './ProfileSide.css';
import FollowersCard from '../followersCard/FollowersCard';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location= "homepage"/>
      <FollowersCard />
    </div>
  )
}

export default ProfileSide
