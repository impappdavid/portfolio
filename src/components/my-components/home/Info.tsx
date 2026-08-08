"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          setTemperature(`${Math.round(data.current.temperature_2m)}°C`);
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
    /* Static Box Container - Horizontal below `lg`, Vertical on `lg`+ */
    <div className="w-full lg:w-auto min-w-16 lg:h-full p-4 border-y lg:border-y-0 lg:border-x border-zinc-800 text-[#22C55E] flex flex-row lg:flex-col justify-between items-center text-xs font-mono relative overflow-hidden select-none">
      {/* Live Temperature Text Animation */}
      <motion.span
        key={temperature}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-semibold tracking-wider"
      >
        {temperature}
      </motion.span>

      {/* Live Budapest Time Text Animation */}
      <AnimatePresence mode="wait">
        {hungaryTime ? (
          <motion.span
            key={hungaryTime}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[#22C55E] font-medium"
          >
            {hungaryTime}
          </motion.span>
        ) : (
          <span className="text-zinc-700 animate-pulse">--:--</span>
        )}
      </AnimatePresence>
    </div>
  );
}