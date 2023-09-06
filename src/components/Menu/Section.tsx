import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  data?: any | undefined;
}

export default function Section({ data }: Props) {
  const tabs: string[] = ["Dinner", "Brunch", "Four Course"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const Tabs = () => {
    return (
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center max-w-[605px] m-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={twMerge(
              "text-xl font-semibold cursor-pointer",
              activeTab === tabs[index] && "underline"
            )}
            onClick={() => setActiveTab(tabs[index])}
          >
            <span>{tab}</span>
          </div>
        ))}
      </div>
    );
  };

  function description(item: Props["data"]) {
    let body = item.slug.body.children[0].children[0].text;
    return body;
  }

  const itemType = data.map((item: Props["data"]) => item.slug.type);

  // console.log(data);
  //   console.log(
  //     data.map((item: any) => item.slug.body.children[0].children[0].text)
  //   );

  const MenuType = (menu: string) => {
    return data.filter(
      (item: any) => item.slug.menu.toLowerCase() === menu.toLowerCase()
    );
  };

  type CardProps = {
    item: Props["data"];
    index?: number;
  };

  const Card = ({ item, index }: CardProps) => {
    return (
      <div
        key={index}
        className="h-full w-full flex gap-2 justify-center items-end"
      >
        <div className="">
          <h1 className="font-bold text-xl leading-none max-w-[28ch]">
            {item.slug.title}
          </h1>
          <p className="font-light text-sm">{description(item)}</p>
        </div>

        <div className="flex-1 flex gap-1 justify-center items-end">
          <div className="h-1 mb-1 w-full border-b-2 border-dotted border-dark"></div>
          <p>${item.slug.price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-20 px-2 sm:px-0">
      <Tabs />
      <div className="max-w-6xl m-auto space-y-12">
        <h2 className="text-5xl font-bold">Appetizers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full sm:px-8 lg:place-items-center">
          {MenuType(activeTab)
            .filter(
              (item: Props["data"]) =>
                item.slug.type.toLowerCase() === "appetizer"
            )
            .map((item: Props["data"], index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
      <div className="max-w-6xl m-auto space-y-12">
        <h2 className="text-5xl font-bold">Entrees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full sm:px-8 lg:place-items-center">
          {MenuType(activeTab)
            .filter(
              (item: Props["data"]) => item.slug.type.toLowerCase() === "entree"
            )
            .map((item: Props["data"], index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
