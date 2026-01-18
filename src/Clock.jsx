import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  
  return (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl px-16 py-12 shadow-2xl scale-125">

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
        Digital Clock
      </h1>

      {/* Time */}
      <div className="flex space-x-6 items-center">
        <TimeBox value={hours} label="Hours" />
        <span className="text-white text-5xl md:text-6xl font-bold">:</span>
        <TimeBox value={minutes} label="Minutes" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center px-6">
      <span className="text-white text-5xl md:text-6xl font-bold">{value}</span>
      <span className="text-gray-200 text-base md:text-lg mt-1">{label}</span>
    </div>
  );
}

export default Clock;
