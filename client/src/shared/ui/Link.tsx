import React from "react";
import clsx from "clsx";
import NextLink from "next/link";

type LinkProps = Parameters<typeof NextLink>[0];
export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  return (
    <NextLink
      {...props}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
      )}
    />
  );
};
