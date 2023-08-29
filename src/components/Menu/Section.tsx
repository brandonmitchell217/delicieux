import React from "react";

interface Props {
  data?: any | undefined;
}

// test

export default function Section({ data }: Props) {
  function description(item: any) {
    let body = item.slug.body.children[0].children[0].text;
    return body;
  }
  //   console.log(
  //     data.map((item: any) => item.slug.body.children[0].children[0].text)
  //   );
  return (
    <div className="flex justify-evenly items-center w-full">
      {data.map((item: any, index: number) => (
        <div key={index}>
          <h1>{item.slug.title}</h1>
          <p>{description(item)}</p>
          <p>{item.slug.price}</p>
        </div>
      ))}
    </div>
  );
}
