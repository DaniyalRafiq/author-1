import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ text, link = "#", className, onClick }) => {
  return (
    <div>
      <Link to={link} className={className} onClick={onClick}>
        {text}
      </Link>
    </div>
  );
};

export default Btn;