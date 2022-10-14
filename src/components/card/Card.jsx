import { useState } from "react";
import "./card.css";
const Card = (languages) => {
  const [toggle, setToggle] = useState(true);
  const handleClick = (e) => {
    setToggle(!toggle);
  };
  const { name, img, options } = languages.languages;
  console.log(options);
  return (
    <div className="card" onClick={handleClick}>
      {toggle ? (
        <>
          <div className="image">
            <img src={img} alt="img" />
          </div>
          <div className="language">
            <h4>{name}</h4>
          </div>
        </>
      ) : (
        <>
          <ul>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Card;
