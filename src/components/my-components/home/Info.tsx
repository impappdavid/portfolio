import { useState, useEffect } from "react";

export default function HungaryWidget() {
  const [hungaryTime, setHungaryTime] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("--°C");

  // Real-Time Clock for Budapest
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

  // Live Weather Fetch for Budapest
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.4979&longitude=19.0402&current=temperature_2m"
        );
        const data = await res.json();
        if (data?.current?.temperature_2m !== undefined) {
          setTemperature(`${data.current.temperature_2m}°C`);
        }
      } catch (error) {
        console.error("Failed to fetch live weather:", error);
      }
    };

    fetchWeather();
    // Refresh weather every 15 minutes
    const weatherInterval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(weatherInterval);
  }, []);

  return (
    <div className="min-w-16 h-full p-4 border-x border-zinc-800 text-[#f59e0b] flex flex-col justify-between items-center text-xs font-mono">
      <span>{temperature}</span>
      <span>{hungaryTime}</span>
    </div>
  );
}