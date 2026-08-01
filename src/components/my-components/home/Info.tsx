import { useState, useEffect } from "react";

export default function HungaryWidget() {
  const [hungaryTime, setHungaryTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Budapest",
        hour: "2-digit",
        minute: "2-digit",
      });
      setHungaryTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-16 h-full p-4 border-x border-zinc-800 text-[#f59e0b] flex flex-col justify-between items-center text-xs font-mono">
      <span>37°C</span>
      <span>{hungaryTime}</span>
    </div>
  );
}