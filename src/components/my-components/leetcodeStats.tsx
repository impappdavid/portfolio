"use client"
import React, { useEffect, useState } from 'react';

  




const LeetCodeStats = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    totalQuestions: 3405, // Total problems on LeetCode
    easySolved: 0,
    totalEasy: 846,
    mediumSolved: 0,
    totalMedium: 1775,
    hardSolved: 0,
    totalHard: 784,
  });

  const fetchLeetCodeStats = async (username: string) => {
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats((prev) => ({
        ...prev,
        totalSolved: data.totalSolved,
        easySolved: data.easySolved,
        mediumSolved: data.mediumSolved,
        hardSolved: data.hardSolved,
      }));
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
    }
  };

  useEffect(() => {
    const username = 'impappdavid'; 
    fetchLeetCodeStats(username);
  }, []);

 




  return (
    <div className="flex flex-col items-center  text-white px-2 rounded-lg w-72 ">
      <div className=" w-full grid gap-2 grid-cols-3">
        <div className="text-xs text-cyan-500 p-2 bg-zinc-100 dark:bg-zinc-900/70 backdrop-blur-xl border rounded-md flex flex-col text-center">Easy <span className='text-zinc-400'>{stats.easySolved}/{stats.totalEasy}</span></div>
        <div className="text-xs text-orange-500 p-2 bg-zinc-100 dark:bg-zinc-900/70 backdrop-blur-xl border rounded-md flex flex-col text-center">Med. <span className='text-zinc-400'>{stats.mediumSolved}/{stats.totalMedium}</span></div>
        <div className="text-xs text-red-500 p-2 bg-zinc-100 dark:bg-zinc-900/70 backdrop-blur-xl border rounded-md flex flex-col text-center">Hard <span className='text-zinc-400'>{stats.hardSolved}/{stats.totalHard}</span></div>
      </div>
    </div>
  );
};

export default LeetCodeStats;
