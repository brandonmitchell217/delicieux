import React from "react";

export default function TestComponent({ data }: any) {
  //   console.log(data);

  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={index}>
          <h2>{item.node.title}</h2>
          <p>{item.node.price}</p>
        </div>
      ))}
    </div>
  );
}
