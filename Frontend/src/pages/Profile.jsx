import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    photo: '',
    offeredSkills: '',
    wantedSkills: '',
    availability: '',
    isPublic: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} className="w-full p-2 mb-2 border" />
      <input name="location" placeholder="Location (optional)" value={profile.location} onChange={handleChange} className="w-full p-2 mb-2 border" />
      <input name="photo" placeholder="Photo URL (optional)" value={profile.photo} onChange={handleChange} className="w-full p-2 mb-2 border" />
      <textarea name="offeredSkills" placeholder="Skills Offered" value={profile.offeredSkills} onChange={handleChange} className="w-full p-2 mb-2 border"></textarea>
      <textarea name="wantedSkills" placeholder="Skills Wanted" value={profile.wantedSkills} onChange={handleChange} className="w-full p-2 mb-2 border"></textarea>
      <input name="availability" placeholder="Availability (e.g., weekends)" value={profile.availability} onChange={handleChange} className="w-full p-2 mb-2 border" />
      <label className="flex items-center mb-4">
        <input type="checkbox" name="isPublic" checked={profile.isPublic} onChange={handleChange} className="mr-2" />
        Make profile public
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Profile</button>
    </form>
  );
};

export default Profile;