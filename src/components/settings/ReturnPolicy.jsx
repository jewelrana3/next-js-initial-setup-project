"use client";

import { useEffect, useState } from "react";
import IconCard from "../iconSection/IconCard";

export default function ReturnPolicy() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await fetch("/data/returnPolicy.json");
        const result = await responsive.json();
        setData(result);
      } catch (err) {
        console.err(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="mt-14 w-[66%] mx-auto">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-[#000000] font-bold">{item.title}</h1>
              <p className="leading-8 my-4">{item.content}</p>
            </div>
          );
        })}
      </div>
      <hr className="mt-12" />
      <div className="">
        <IconCard />
      </div>
    </>
  );
}
