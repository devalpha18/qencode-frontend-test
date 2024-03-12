import React, { ErrorInfo, useState } from "react";

import eyeIcon from "../assets/img/eye.svg";
import clsx from "clsx";

export function Input({
  name,
  placeholder,
  value,
  type = "text",
  errors = { value: "", error: false },
  onChange = (value: string) => {},
}: {
  name: string;
  placeholder: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  errors?: { value: string; error: boolean };
  onChange?: (value: string) => void;
}) {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const showPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className="w-full h-auto relative">
      <input
        name={name}
        className={
          errors.error && value !== ""
            ? clsx(
                `w-full h-12 flex flex-row justify-start items-center rounded-md border-2 border-rose-600 border-solid focus:ring focus:ring-red-200 focus:outline-none px-3 font-basis text-sm font-medium text-basicDark bg-white`
              )
            : clsx(
                `w-full h-12 flex flex-row justify-start items-center rounded-md border-2 border-darkGray border-solid focus:ring focus:border-blue-500 focus:outline-none px-3 font-basis text-sm font-medium text-basicDark bg-white`
              )
        }
        type={visiblePassword ? "text" : clsx(type)}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span
        className={
          errors.error
            ? clsx(`font-basis text-xs text-rose-600 visible`)
            : clsx(`font-basis text-xs text-rose-600 hidden`)
        }
      >
        {errors.value}
      </span>
      {type === "password" && (
        <img
          onClick={showPassword}
          className={
            errors.error
              ? clsx(`w-5 h-5 absolute right-3 top-4 cursor-pointer`)
              : clsx(`w-5 h-5 absolute right-3 top-1/3 cursor-pointer`)
          }
          src={eyeIcon}
          alt="eye logo"
        />
      )}
    </div>
  );
}
