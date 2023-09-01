import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Brunch", "Dinner", "Four Course"];
  return (
    <div className="flex justify-between items-center max-w-[605px] m-auto">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={twMerge(
            "text-xl font-semibold cursor-pointer",
            activeTab === index && "underline"
          )}
          onClick={() => setActiveTab(index)}
        >
          <span>{tab}</span>
        </div>
      ))}
    </div>
  );
}
