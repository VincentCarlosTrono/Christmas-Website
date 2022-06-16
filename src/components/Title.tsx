import React from "react";
import { TitleProps } from "src/types";

const Title = (props: TitleProps) => {
  const { title } = props;
  return (
    <div className="  flex justify-center text-center p-10">
      <h2 className="max-w-sm font-bold text-lg md:text-3xl dark:text-white ">
        {title}
      </h2>
    </div>
  );
};

export default Title;
