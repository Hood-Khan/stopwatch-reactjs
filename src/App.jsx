import React from "react";
import { Pause, Play, RotateCw } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="border-4 border-gray-300 p-8 rounded-2xl shadow-xl bg-white">
        <div className="flex items-center justify-center space-x-10 mb-6">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">00</span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>

          {/* Colon */}
          <span className="text-5xl font-bold leading-none">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">00</span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>

          {/* Colon */}
          <span className="text-5xl font-bold leading-none">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">00</span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow">
            <Play size={20} /> Start
          </button>

          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 shadow">
            <Pause size={20} /> Stop
          </button>

          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow">
            <RotateCw size={20} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
