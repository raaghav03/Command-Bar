import React, { useEffect, useState } from "react";
import { Kbd } from "@radix-ui/themes";
import "./App.css";

import CommandBar from "./components/CommandBar.tsx"

const App: React.FC = () => {
  const [isCommandBarVisible, setCommandBarVisible] = useState(true);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      setCommandBarVisible((prev) => !prev);
      console.log("command bar launched")
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="mx-80 relative border border-gray-200 p-12 flex-grow">
        <h1 className=" text-xl mb-12">
          Press <Kbd>⌘K</Kbd> to launch command bar
        </h1>
        {isCommandBarVisible && <CommandBar />}
      </div>
    </div>
  );
};


export default App;
