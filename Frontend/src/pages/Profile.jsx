import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    photo: "",
    offeredSkills: [],
    wantedSkills: [],
    availability: "",
    isPublic: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSkillsChange = (e, type) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setProfile((prev) => ({ ...prev, [type]: skills }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <div className="m-20">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold mr-4">User Profile</h1>
          <div className="flex gap-4 items-center">
            <Link to="/Accept" className="text-blue-600">
              Swap Request
            </Link>
            <Link to="/" className="text-blue-600">
              Home
            </Link>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-400">
              <img
                src={profile.photo || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Skills Offered
              </label>
              <input
                type="text"
                value={profile.offeredSkills.join(", ")}
                onChange={(e) => handleSkillsChange(e, "offeredSkills")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.offeredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Skills Wanted</label>
              <input
                type="text"
                value={profile.wantedSkills.join(", ")}
                onChange={(e) => handleSkillsChange(e, "wantedSkills")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.wantedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Availability</label>
              <input
                name="availability"
                value={profile.availability}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Profile</label>
              <select
                name="isPublic"
                value={profile.isPublic ? "Public" : "Private"}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Profile Photo URL
              </label>
              <input
                name="photo"
                value={profile.photo}
                onChange={handleChange}
                placeholder="Add/Edit Photo URL"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
            <div className="flex justify-around mt-4">
              <button className="text-white font-semibold p-4 border rounded-md bg-violet-600 px-6 py-3 border-gray-300">Save</button>
              <button className="text-white font-semibold p-4 border rounded-md bg-violet-600 px-6 py-3 border-gray-300">Discard</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
