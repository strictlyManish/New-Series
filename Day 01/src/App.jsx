import React, { useState } from "react";

function App() {
  const users = [
    {
      name: "Raj Sharma",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      age: 25,
      city: "Mumbai",
    },
    {
      name: "Manish Kumar",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      age: 30,
      city: "Delhi",
    },
    {
      name: "Priya Singh",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      age: 18,
      city: "Bengaluru",
    },
    {
      name: "Amit Verma",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      age: 28,
      city: "Kolkata",
    },
    {
      name: "Neha Kapoor",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      age: 26,
      city: "Chennai",
    },
  ];

  const render = users.map((user, idx) => {
    const { name, img, age, city } = user;
    return (
      <div key={idx} className="bg-gray-800 px-10 py-3 flex flex-col items-start gap-2 hover:scale-[1.05] transition-all hover:bg-amber-900">
        <img src={img} alt={name + img} className="rounded-[50%] w-full hover:scale-[1.06] transition-all"/>
        <h2>{name}</h2>
        <p>Age : {age}</p>
        <h3>{city}</h3>
        <p>Status : {age <= 18 ? 'Sinlge':'not to be Sure'}</p>
      </div>
    );
  });

  return (
    <div className="bg-gray-800 text-white h-screen w-screen flex justify-center items-center flex-col">
      <div className="bg-gray-600 p-5 text-center rounded">
        <h2>Employ Dashbord</h2>
        <div className="flex gap-10 mt-5">{render}</div>
      </div>
    </div>
  );
}

export default App;
