import React, { ReactNode } from "react";
import { ClassNameType } from "@/shared/ui/types";
import clsx from "clsx";
import { Logo } from "@/shared/ui/Logo";

export const Header: React.FC<ClassNameType & { right?: ReactNode }> = ({
  className,
  right,
}) => {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <div className={"flex items-center gap-2"}>
        <Logo />
        Easy Block
      </div>
      {right}
    </header>
  );
};
