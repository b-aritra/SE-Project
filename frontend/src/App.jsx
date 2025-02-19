import { useState, useEffect } from "react";

function App() {
  const targetDate = new Date("2025-06-01T00:00:00").getTime(); // Set your launch date
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold animate-pulse">Coming Soon</h1>
        <p className="text-lg mt-4 opacity-80">We're launching soon! Stay tuned.</p>

        {/* Countdown Timer */}
        <div className="mt-6 text-2xl font-semibold">
          <span>{timeLeft.days}d </span>
          <span>{timeLeft.hours}h </span>
          <span>{timeLeft.minutes}m </span>
          <span>{timeLeft.seconds}s</span>
        </div>

      </div>
    </div>
  );
}

export default App;
