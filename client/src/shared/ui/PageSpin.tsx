import React from "react";
import { Spin } from ".";
import clsx from "clsx";
import { ClassNameType } from "./types";

export const PageSpin: React.FC<ClassNameType> = ({ className }) => {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-200",
        className,
      )}
    >
      <Spin className="text-teal-600 h-20 w-20" />
    </div>
  );
};
