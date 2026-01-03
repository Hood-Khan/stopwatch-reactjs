import React, { useEffect, useState } from "react";
import { Pause, Play, RotateCw } from "lucide-react";

function App() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, millisec: 0 });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => {
          let { minutes, seconds, millisec } = prev;
          millisec++;
          if (millisec === 100) {
            millisec = 0;
            seconds++;
          }
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          return { minutes, seconds, millisec };
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="border-4 border-gray-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl bg-white w-full max-w-md sm:max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 text-center mb-6 drop-shadow-lg uppercase">
          Stop Watch
        </h2>

        <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-10 mb-6">
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {format(time.minutes)}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">Minutes</span>
          </div>

          <span className="text-3xl sm:text-4xl md:text-5xl font-bold">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {format(time.seconds)}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">Seconds</span>
          </div>

          <span className="text-3xl sm:text-4xl md:text-5xl font-bold">:</span>

          {/* Milliseconds */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {format(time.millisec)}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">MilliSec</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow disabled:bg-green-300 disabled:cursor-not-allowed"
            onClick={() => setRunning(true)}
            disabled={running}
          >
            <Play size={18} /> Start
          </button>

          <button
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 shadow disabled:bg-red-300 disabled:cursor-not-allowed"
            onClick={() => setRunning(false)}
            disabled={!running}
          >
            <Pause size={18} /> Stop
          </button>

          <button
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow"
            onClick={() => {
              setRunning(false);
              setTime({ minutes: 0, seconds: 0, millisec: 0 });
            }}
          >
            <RotateCw size={18} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
