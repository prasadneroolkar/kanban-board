import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const Input = ({
  Inputname,
  InputIcon,
  register,
  rules,
  placeholder,
  errors,
  errorMsg,
}) => {
  return (
    <div className=" my-2.5 h-auto w-full">
      <div className="flex border-b-2 border-gray-300 hover:border-b-theme duration-[0.1s] ease-in">
        {InputIcon && <InputIcon className="  text-theme" />}
        <input
          className="pl-[5px] placeholder:text-gray-500 z-[1] focus-visible:outline-0 "
          {...register(Inputname, { required: errorMsg, ...rules })}
          aria-invalid={errors[Inputname] ? "true" : "false"}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={Inputname}
        render={({ messages }) => {
          console.log(Object.entries(messages).length);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p
                  className="text-xs text-red-600  leading-[12px] mb-0.5"
                  key={type}
                >
                  {message}
                </p>
              ))
            : null;
        }}
      />
    </div>
  );
};

export default Input;
