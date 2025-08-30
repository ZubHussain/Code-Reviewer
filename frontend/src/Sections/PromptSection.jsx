import React from "react";
import { useUserStore } from "../Context/CreateState";
import axios from 'axios'

const PromptSection = () => {
  const { code, setCode, setResponse, isLoading, setLoading } = useUserStore();

  const handleAsk = async () => {
    try {
        setLoading(true)
        const result = await axios.post('http://localhost:3000/ai/get-review', { code });
        setResponse(result.data);
    } catch (error) {
        console.error(error);
        setResponse("Error: Could not fetch review.");
      } finally {
        setLoading(false); 
      }
  
  };

  const handleClear = () => {
    setCode("");
    setResponse("");
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Your Code</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here for review..."
        className="flex-1 p-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-100 placeholder-gray-400"
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
        >
          Clear
        </button>
        <button
          onClick={handleAsk}
          disabled={isLoading || !code.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Reviewing...
            </>
          ) : (
            'Get Review'
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptSection;
