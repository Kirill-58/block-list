import React, { PropsWithRef, SelectHTMLAttributes, useId } from "react";
import clsx from "clsx";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: SelectOption[];
};

export const SelectField: React.FC<SelectFieldProps> = ({
  className,
  label,
  error,
  selectProps,
  options,
}) => {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map(({ label, value }, i) => (
          <option key={i} label={label} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
};
