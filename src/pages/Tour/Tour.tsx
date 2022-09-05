import { useQuery } from "@apollo/client";
import { useState } from "react";
import QueryResult from "../../components/QueryResult";
import { TOURS } from "../../queries";
import "./Tour.scss";
import TourItem from "./TourItem";

interface ITour {
  id: string;
  name: string;
  decs: string;
  image: string;
  quantity: number;
  active: string;
}

export default function Tour() {
  const { loading, error, data } = useQuery(TOURS);
  const [isActive, setIsActive] = useState<number>(0);
  const valueCircle = (index: number) => {
    if (index < 0) {
      return data?.tours.length - 1;
    }
    if (index >= data?.tours.length) {
      return 0;
    }
    return index;
  };
  console.log(data);
  return (
    <div className="Tour">
      <QueryResult data={data} loading={loading} error={error}>
        <button className="btn btn-prev" onClick={() => setIsActive(valueCircle(isActive - 1))}>
          Prev
        </button>
        <div className="content">
          {data?.tours.map((e: ITour, index: number) => {
            const active = index === isActive ? true : false;
            return (
              <div key={index}>
                <TourItem data={e} active={active} />
              </div>
            );
          })}
        </div>
        <button className="btn btn-next" onClick={() => setIsActive(valueCircle(isActive + 1))}>
          Next
        </button>
      </QueryResult>
    </div>
  );
}
