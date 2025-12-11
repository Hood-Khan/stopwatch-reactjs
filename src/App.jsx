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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="border-4 border-gray-300 p-8 rounded-2xl shadow-xl bg-white">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-6 drop-shadow-lg uppercase">
          Stop Watch
        </h2>

        <div className="flex items-center justify-center space-x-10 mb-6">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{format(time.minutes)}</span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>

          {/* Colon */}
          <span className="text-5xl font-bold leading-none">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{format(time.seconds)}</span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>

          {/* Colon */}
          <span className="text-5xl font-bold leading-none">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{format(time.millisec)}</span>
            <span className="text-sm text-gray-500">MilliSec</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {/* Start Button */}
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow disabled:bg-green-300 disabled:cursor-not-allowed disabled:text-gray-200"
            onClick={() => setRunning(true)}
            disabled={running}
          >
            <Play size={20} /> Start
          </button>

          {/* Stop Button */}
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 shadow disabled:bg-red-300 disabled:cursor-not-allowed disabled:text-gray-200"
            onClick={() => setRunning(false)}
            disabled={!running}
          >
            <Pause size={20} /> Stop
          </button>

          {/* Reset Button */}
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow disabled:bg-blue-300 disabled:cursor-not-allowed disabled:text-gray-200"
            onClick={() => {
              setRunning(false);
              setTime({ minutes: 0, seconds: 0, millisec: 0 });
            }}
          >
            <RotateCw size={20} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
