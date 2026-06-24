import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState("");
  

  return (
    <div className="Nav">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme);
          setNewTheme("");
        }}
      >
        <input
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter Theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
