import { useState } from "react";
import type { JSX } from "react";

type TabViewProps = {
  tabs: Array<string>;
  tabsContents: Array<JSX.Element>;
};

const TabView = ({ tabs, tabsContents }: TabViewProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabChangeHandler = (index: number) => setActiveTab(index);
  return (
    <>
      <div className="w-full h-12 grid grid-cols-5 justify-items-center border border-b-0 rounded-t-sm grid-rows-1">
        {tabs.map((label, id) => {
          return (
            <button
              key={id}
              className={`w-full transition-all first:rounded-tl-sm last:rounded-tr-sm duration-150 p-2 ${activeTab === id ? "bg-blue-500" : "bg-transparent"}`}
              onClick={() => tabChangeHandler(id)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="grow flex flex-col border rounded-b-sm">
        {tabsContents[activeTab]}
      </div>
    </>
  );
};

export default TabView;
