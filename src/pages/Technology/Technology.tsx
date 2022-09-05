import "./Technology.scss";
import { useState } from "react";
import data from "../../data.json";

interface TechnologyProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
function Technology() {
  const options = data?.technology.map((e) => e.name);
  const [selected, setSelected] = useState<TechnologyProps | undefined>(
    data?.technology[0]
  );
  const changeTechnology = (option: string) => {
    setSelected(data.technology.find((e) => e.name === option));
  };
  return (
    <div className="Technology">
      <div className="content">
        <h4 className="title">03 Space launch 101</h4>
        <div className="terminology">
          <ul className="options">
            {options?.map((e, index) => (
              <li
                onClick={() => changeTechnology(e)}
                className={
                  selected?.name === e
                    ? "options__item is-active"
                    : "options__item"
                }
                key={e}
              >
                {index}
              </li>
            ))}
          </ul>
          <div className="info">
            <span className="the-terminology">The terminology...</span>
            <h3>{selected?.name}</h3>
            <p className="decs">{selected?.description}</p>
          </div>
        </div>
      </div>
      <img
        src={selected?.images?.portrait}
        alt="terminology"
        className="image"
      />
    </div>
  );
}

export default Technology;
