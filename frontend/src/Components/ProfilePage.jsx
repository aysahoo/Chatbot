import React, { useState } from 'react'
import { background, profile } from '../assets/assets'
import { Camera } from 'lucide-react';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [location, setLocation] = useState('Bangalore, India');
  const [tempUsername, setTempUsername] = useState(username);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempEmail, setTempEmail] = useState(email);
  const [profilePhoto, setProfilePhoto] = useState(profile);

  const handleEdit = () => {
    setTempUsername(username);
    setTempLocation(location);
    setTempEmail(email);
    setEditMode(true);
  };

  const handleSave = () => {
    setUsername(tempUsername);
    setLocation(tempLocation);
    setEmail(tempEmail);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full h-svh overflow-hidden">
    {/* Background Image */}
    <img
      src={background}
      alt="background"
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />
      {/* Content */}
  <div className="relative z-10 p-10 flex flex-col gap-8 h-full text-white">
    <div className="text-5xl">
      Account <span className="text-5xl">settings</span>
    </div>

    <div className="items-center flex gap-4">
      <div className="relative inline-block">
        <img
          src={profilePhoto}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        {editMode && (
          <label htmlFor="profile-photo-upload" className="absolute bottom-0 right-0 bg-white/80 rounded-full p-1 cursor-pointer hover:bg-white flex items-center justify-center">
            <Camera size={20} className="text-black" />
            <input
              id="profile-photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        )}
      </div>
      <div className="flex flex-col gap-2 ml-4">
        <h2 className="text-2xl">{username}</h2>
      </div>
    </div>
    <div className="mt-4 space-y-4 max-w-md">
      <div>
        <label className="block text-sm text-white/70">Username</label>
        {editMode ? (
          <input
            type="text"
            value={tempUsername}
            onChange={e => setTempUsername(e.target.value)}
            className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          />
        ) : (
          <div className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white">{username}</div>
        )}
      </div>
      <div>
        <label className="block text-sm text-white/70">Email</label>
        {editMode ? (
          <input
            type="text"
            value={tempEmail}
            onChange={e => setTempEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          />
        ) : (
          <div className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white">{email}</div>
        )}
      </div>
      <div>
        <label className="block text-sm text-white/70">Location</label>
        {editMode ? (
          <input
            type="text"
            value={tempLocation}
            onChange={e => setTempLocation(e.target.value)}
            className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
          />
        ) : (
          <div className="w-full px-4 py-2 mt-1 rounded-lg bg-white/10 text-white">{location}</div>
        )}
      </div>
      <div className="flex gap-2 pt-2">
        {editMode ? (
          <>
            <button onClick={handleSave} className="px-4 py-2 rounded bg-white/20 hover:bg-white/30 text-white">Save</button>
            <button onClick={handleCancel} className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white">Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit} className="px-4 py-2 rounded bg-white/20 hover:bg-white/30 text-white">Edit</button>
        )}
      </div>
    </div>
  </div>
</div>
  )
}

export default ProfilePage
