import React from "react";
import { useUserStore } from "../Context/CreateState";
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const ResponseSection = () => {
  const { response, isLoading } = useUserStore();

  return (
    <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Review Results</h2>
      <div className="flex-1 overflow-y-auto p-3 bg-white rounded-lg">
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-2">Reviewing your code...</span>
          </div>
        ) : response ? (
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {response?.response}
          </Markdown>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Submit your code to see the review results
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseSection;
