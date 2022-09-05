import { useState } from "react";
import Create from "./Create";
import Delete from "./Delete";
import "./TourItem.scss";

interface ITour {
  id: string;
  name: string;
  decs: string;
  image: string;
  quantity: number;
  active: string;
}
export default function TourItem({ data, active }: { data: ITour; active: Boolean }) {
  const [activeOrder, setActiveOrder] = useState<boolean>(data.active !== null);
  return (
    <div className={active ? "TourItem Active" : "TourItem"}>
      <img src={data.image} className="image" alt="tour" />
      <div className="info">
        <h4 className="name">{data.name}</h4>
        <p className="decs"> {data.decs}</p>
        <div className="quantity">Quantity: {data.quantity}</div>
        <button className="btn-registration">
          {activeOrder ? (
            <Delete setActiveOrder={setActiveOrder} id={data.active} />
          ) : (
            <Create setActiveOrder={setActiveOrder} id={data.id} />
          )}
        </button>
      </div>
    </div>
  );
}
