import React, { useState } from "react";

import eyeIcon from "../assets/img/eye.svg";

export default function Input({
  name,
  placeholder,
  value,
  type = "text",
  onChange = (value: string) => {},
}: {
  name: string;
  placeholder: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
}) {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const showPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className="w-full h-auto relative">
      {visiblePassword ? (
        <input
          name={name}
          className="w-full h-12 flex flex-row justify-start items-center rounded-md border-2 border-darkGray border-solid px-3 font-basis text-sm font-medium text-basicDark bg-white"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <input
          name={name}
          className="w-full h-12 flex flex-row justify-start items-center rounded-md border-2 border-darkGray border-solid px-3 font-basis text-sm font-medium text-basicDark bg-white"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}

      {type === "password" && (
        <img
          onClick={showPassword}
          className="w-5 h-5 absolute right-3 top-1/3 cursor-pointer"
          src={eyeIcon}
          alt="eye logo"
        />
      )}
    </div>
  );
}
