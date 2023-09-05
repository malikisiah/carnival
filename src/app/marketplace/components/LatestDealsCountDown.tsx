import type { NextPage } from "next";
import { useEffect, useState } from "react";

const LatestDealsCountDown: NextPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/10/2023 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));

      setDays(d);
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
        <div className="flex border-2 border-solid border-gray-100 text-orange-500 text-[0.94rem] p-1">
            <div className="pr-1">{days}</div>
            <p>Days</p>
        </div>
        <span className="p-1">:</span>

        <div className="flex border-2 border-solid border-gray-100 text-orange-500 text-[0.94rem] p-1">
            <div className="pr-1">{hours}</div>
            <span>Hrs</span>
        </div>
        <span className="p-1">:</span>

        <div className="flex border-2 border-solid border-gray-100 text-orange-500 text-[0.94rem] p-1">
            <div className="pr-1">{minutes}</div>
            <span>Mins</span>
        </div>
        <span className="p-1">:</span>

        <div className="flex border-2 border-solid border-gray-100 text-orange-500 text-[0.94rem] p-1">
            <div className="pr-1">{seconds}</div>
            <span>Secs</span>
        </div>
    </div>
  );
};

export default LatestDealsCountDown;