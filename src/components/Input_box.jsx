import React from "react";

const Input_box = ({ type, placeholder, onChange, name, value }) => {
  return (
    <input
      className="border-2 border-gray-300 p-[0.5rem_1rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default Input_box;
