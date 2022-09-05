import "./Destinations.scss";
import data from "../../data.json";
import { useState } from "react";
interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
function Destinations() {
  const options = data.destinations.map((destination) => destination.name);
  const [selected, setSelected] = useState<Destination | undefined>(
    data.destinations[0]
  );
  const changeDestination = (option: string) => {
    const newDestination = data.destinations.find(
      (destination) => destination.name === option
    );
    setSelected(newDestination);
  };
  return (
    <div className="Destinations">
      <h4 className="pick">01 Pick your destination</h4>
      <div className="info">
        <img src={selected?.images.png} alt="destination" className="image" />
        <div className="options">
          <ul className="nav">
            {options.map((option) => (
              <li
                onClick={() => changeDestination(option)}
                className={
                  selected?.name === option
                    ? "is-active nav__item"
                    : "nav__item"
                }
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
          <h2>{selected?.name}</h2>
          <div className="detail">
            <p className="decs">{selected?.description}</p>
            <div className="other">
              <div className="avg">
                Avg. distance
                <div className="parameter">{selected?.distance}</div>
              </div>
              <div className="est">
                Est. travel time
                <div className="parameter">{selected?.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
