"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LocationStats() {
  const [temperature, setTemperature] = useState<number | string>("--");
  const [time, setTime] = useState<string>("");

  // 1. Live Clock for Hungary (Europe/Budapest timezone)
  useEffect(() => {
    const updateTime = () => {
      const hungaryTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Budapest",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(hungaryTime.toLowerCase()); // e.g., "12:41 pm"
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch Live Weather for Hungary (Budapest coordinates: 47.4979, 19.0402)
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.4979&longitude=19.0402&current_weather=true"
        );
        const data = await response.json();
        if (data?.current_weather?.temperature !== undefined) {
          setTemperature(Math.round(data.current_weather.temperature));
        }
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    }

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 600000); // refresh every 10 min
    return () => clearInterval(weatherTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full grid grid-cols-2 text-sm text-zinc-500 dark:text-zinc-400"
    >
      <div className="flex items-center">
        {temperature !== "--" ? `${temperature}°C` : "Loading..."} (Hungary)
      </div>
      <div className="flex items-center justify-end">
        {time || "Loading..."}
      </div>
    </motion.div>
  );
}