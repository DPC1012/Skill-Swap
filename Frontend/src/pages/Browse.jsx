import React from "react";
import { Link } from "react-router-dom";

const Browse = () => {
  const mockData = [
    {
      name: "John Doe",
      offered: "Photoshop, java, python",
      wants: "Excel",
      photo: "./images/3.jpg",
      ratings: "4.7",
    },
    {
      name: "Jane Smith",
      offered: "Excel",
      wants: "Photoshop",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Sam Wilson",
      offered: "Public Speaking",
      wants: "Coding",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Alice Johnson",
      offered: "Illustration",
      wants: "UX Design",
      photo: "./images/1.jpg",
      ratings: "4.7",
    },
    {
      name: "John Doe",
      offered: "Photoshop, java, python",
      ratings: "4.7",
      wants: "Excel",
      photo: "./images/3.jpg",
      ratings: "4.7",
    },
    {
      name: "Jane Smith",
      offered: "Excel",
      wants: "Photoshop",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Sam Wilson",
      offered: "Public Speaking",
      wants: "Coding",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Alice Johnson",
      offered: "Illustration",
      wants: "UX Design",
      photo: "./images/1.jpg",
      ratings: "4.7",
    },
    {
      name: "John Doe",
      offered: "Photoshop, java, python",
      wants: "Excel",
      photo: "./images/3.jpg",
      ratings: "4.7",
    },
    {
      name: "Jane Smith",
      offered: "Excel",
      wants: "Photoshop",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Sam Wilson",
      offered: "Public Speaking",
      wants: "Coding",
      photo: "./images/2.jpg",
      ratings: "4.7",
    },
    {
      name: "Alice Johnson",
      offered: "Illustration",
      wants: "UX Design",
      photo: "./images/1.jpg",
      ratings: "4.7",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Browse Skills</h2>
      <input
        placeholder="Search skills (e.g., Photoshop)"
        className="w-md p-2 mb-6 border rounded"
      />
      <select
        className="ml-4 border-1 rounded p-2"
        name="Available"
        id="Drodown"
      >
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-12">
        {mockData.map((user, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-xl shadow hover:shadow-md transition text-center"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <div className="justify-center">
              <p className="font-bold text-md flex">Offered:&nbsp;</p>
              <p className="flex">{user.offered}</p>

              <p className="font-bold text-md flex">Wants:&nbsp;</p>
              <p className="flex">{user.wants}</p>
            </div>
            <div className="flex item-center justify-between">
              {/* <Link to="/Requestswap">
                <button className="bg-blue-500 text-white px-6 py-2 mt-4  rounded flex">
                  Request
                </button>
              </Link> */}
              <Link to="/Requestswap" className="bg-violet-700 text-white px-4 py-2 rounded">Request</Link>

              <div class="flex font-bold mt-5">
                    <p>Ratings: {user.ratings}/5.0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
