import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit color
        </button>
      </form>
    </section>
  );
};

export default Form;
