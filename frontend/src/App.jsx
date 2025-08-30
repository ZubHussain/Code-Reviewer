import PromptSection from "./Sections/PromptSection";
import ResponseSection from "./Sections/ResponseSection";

export default function App() {
  return (
    <div className="h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto h-screen flex flex-col">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Code Review Assistant
        </h1>
        <div className="flex gap-6 flex-1">
          <PromptSection />
          <ResponseSection />
        </div>
      </div>
    </div>
  );
}
