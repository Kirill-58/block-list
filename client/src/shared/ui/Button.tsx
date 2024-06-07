import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary" | "outline";
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30 ",
          secondary:
            "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30 ",
          outline:
            "border border-slate-300 hover:border-slate-300 disabled:opacity-50",
        }[variant],
      )}
    />
  );
};
