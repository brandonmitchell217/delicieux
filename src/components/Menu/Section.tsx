import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type {
  Menu,
  MenuConnectionEdges,
  MenuConnectionQueryVariables,
  MenuFilter,
  PageInfo,
} from "../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface SectionProps {
  resp: {
    data: {
      menuConnection: {
        pageInfo: PageInfo;
        totalCount: number;
        edges?: MenuConnectionEdges[] | any;
      };
    };
    query: string;
    variables: MenuConnectionQueryVariables;
  };
}

export default function Section({ resp }: SectionProps) {
  const tabs: string[] = ["Dinner", "Brunch", "Four Course"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const items = resp.data.menuConnection.edges?.map(
    (item: MenuConnectionEdges) => {
      return item.node;
    }
  );

  // console.log(items);

  const { data } = useTina({
    query: resp.query,
    data: resp.data,
    variables: resp.variables,
  });

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

  const MenuType = (menu: string) => {
    return items.filter(
      (item: MenuFilter | any) =>
        item.menu?.toLowerCase() === menu.toLowerCase()
    );
  };

  type CardProps = {
    item: Menu;
    index?: number;
  };

  const Card = ({ item, index }: CardProps) => {
    return (
      <div
        key={index}
        className="h-full w-full flex gap-2 justify-center items-end"
      >
        <div>
          <h1 className="font-bold text-xl leading-none max-w-[28ch]">
            {item.title}
          </h1>
          <TinaMarkdown content={item.body} />
        </div>

        <div className="flex-1 flex gap-1 justify-center items-end">
          <div className="h-1 mb-1 w-full border-b-2 border-dotted border-dark"></div>
          <p>${item.price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-20 px-2 sm:px-0">
      <Tabs />
      <div className="max-w-6xl m-auto space-y-12">
        {activeTab != tabs[2] ? (
          <h2 className="text-5xl font-bold">Appetizers</h2>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full sm:px-8 lg:place-items-center">
          {MenuType(activeTab)
            .filter(
              (item: MenuFilter | any) =>
                item.type.toLowerCase() === "appetizer"
            )
            .map((item: Menu, index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
      <div className="max-w-6xl m-auto space-y-12">
        {activeTab != tabs[2] ? (
          <h2 className="text-5xl font-bold">Entrees</h2>
        ) : (
          <h2 className="text-5xl font-bold">Four Course Dinner</h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 w-full sm:px-8 lg:place-items-center">
          {MenuType(activeTab)
            .filter(
              (item: MenuFilter | any) => item.type.toLowerCase() === "entree"
            )
            .map((item: Menu, index: number) => (
              <Card item={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
