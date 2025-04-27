import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  className?: string;
}

function CountdownTimer({ className = "" }: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours: 3,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className={`flex ${className} gap-2 text-center mb-4`}>
      <div className="flex flex-col">
        <div className="bg-[#f8c304] text-black px-3 py-2 rounded-md text-2xl font-bold">
          {formatNumber(time.hours)}
        </div>
        <span className="text-xs mt-1 text-white/70">Horas</span>
      </div>
      <div className="text-white text-2xl font-bold flex items-start pt-2">:</div>
      <div className="flex flex-col">
        <div className="bg-[#f8c304] text-black px-3 py-2 rounded-md text-2xl font-bold">
          {formatNumber(time.minutes)}
        </div>
        <span className="text-xs mt-1 text-white/70">Minutos</span>
      </div>
      <div className="text-white text-2xl font-bold flex items-start pt-2">:</div>
      <div className="flex flex-col">
        <div className="bg-[#f8c304] text-black px-3 py-2 rounded-md text-2xl font-bold">
          {formatNumber(time.seconds)}
        </div>
        <span className="text-xs mt-1 text-white/70">Segundos</span>
      </div>
    </div>
  );
}

export default CountdownTimer; 