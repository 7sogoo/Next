"use client";

import { useEffect, useState } from "react";
import { SvgHouse } from "..";
import axios from "axios";

const timeConvertor = (time) => {
  const pastDate = new Date(time);
  const currentTime = Date.now();
  const pastTime = pastDate.getTime();
  
  const difference = (currentTime - pastTime) / 1000;
  let differenceMin, differenceHour, differenceSec;
  
  if (difference > 60) {
    differenceSec = Math.floor(difference % 60);
    differenceMin = Math.floor(difference / 60);
  }
  if (differenceMin > 60) {
    differenceHour = (differenceMin % 60) / 24;
  } else differenceHour = 0;
  return [`${differenceHour} ago, ${differenceMin}ago, ${differenceSec} ${difference}`]
};

export const DashboardRecords = () => {
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/record/getDesc");
      setChartData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#F3F4F6] pb-5 mt-6">
      <div className="max-w-[1200px] m-auto bg-white rounded-xl">
        <p className="text-[#0F172A] font-semibold px-6 py-4">Last Records</p>
        {chartData.map((el, i) => (
          <div key={el + i} className="flex justify-between py-5 border-t mx-6">
            <div className="flex gap-[10px] items-center">
              <div className="bg-[#0166FF] size-10 rounded-full flex items-center justify-center">
                <SvgHouse />
              </div>
              <div>
                <p>{el.desc}</p>
                <p className="text-[#6B7280] text-sm">{el.month}</p>
              </div>
            </div>
            <p className="text-[#84CC16]">{el.total.toLocaleString() + "₮"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
