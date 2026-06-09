import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const deleteCard = (index) => {
    const updatedUsers = user.filter((_, i) => i !== index);
    setUser(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, formData]);

    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[863px] w-full colors">
      <form className="bg_color rounded-2xl p-6 h-fit w-fit" onSubmit={handleSubmit}>
        
        <div className="flex flex-col">
          <label htmlFor="username" className="pb-0.5 pl-4">Name</label>
          <input
            id="username"
            className="border rounded p-1 w-[300px] pl-3"
            type="text"
            name="name"
            placeholder="Firstname Lastname"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="flex flex-col">
          <label htmlFor="Phone_number" className="pb-0.5 pl-4">Phone Number</label>
          <input
            id="Phone_number"
            className="border rounded p-1 w-[300px] pl-3"
            type="text"
            name="phone"
            placeholder="eg. 9876543210"
            value={formData.phone}
            required
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="flex flex-col">
          <label htmlFor="Email_id" className="pb-0.5 pl-4">Email Id</label>
          <input
            id="Email_id"
            className="border rounded p-2 w-[300px] pl-3"
            type="email"
            name="email"
            placeholder="eg. xyz@gmail.com"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit" className="active:scale-95 ml-24 p-2 text-black colors rounded active:border-2">Create Card</button>
      </form>

      {user && (
        <div className="flex flex-col gap-4 mt-10">
          {user.map((user, index) => (
            <div
              key={index}
              className="w-150 bg_color rounded-2xl p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full colors text_color flex items-center justify-center font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{user.name}</h3>
                  <p><i class="ri-phone-fill"></i> {user.phone}</p>
                  <p><i class="ri-mail-send-fill"></i> {user.email}</p>
                </div>
              </div>

              <button
                onClick={() => deleteCard(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;