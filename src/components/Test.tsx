import React from "react";
import type { Props } from "../../tina/__generated__/types";

export default function Test({ data }: { data: Props }) {
  console.log(data);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
