import "./Crew.scss";
import { useState } from "react";
import data from "../../data.json";

interface CrewSelected {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
function Crew() {
  const [selected, setSelected] = useState<CrewSelected | undefined>(
    data.crew[0]
  );
  const options = data.crew.map((item) => item.name);
  const changeCrew = (option: string) => {
    const newCrew = data.crew.find((crew) => crew.name === option);
    setSelected(newCrew);
  };
  return (
    <div className="Crew">
      <div className="content">
        <h4 className="title">02 Meet your crew</h4>
        <h4 className="role">{selected?.role}</h4>
        <h3 className="name">{selected?.name}</h3>
        <p className="decs">{selected?.bio}</p>
        <ul className="options">
          {options.map((item) => (
            <li
              key={item}
              onClick={() => changeCrew(item)}
              className={
                selected?.name === item
                  ? "is-active options__item"
                  : "options__item"
              }
            ></li>
          ))}
        </ul>
      </div>
      <img src={selected?.images.png} alt="crew" className="image" />
    </div>
  );
}
export default Crew;
