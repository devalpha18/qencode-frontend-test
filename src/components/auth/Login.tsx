import { useState, type FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";
import Input from "../Input";
import qencodeIcon from "../../assets/img/main_logo.svg";
import googleIcon from "../../assets/img/google_logo.svg";
import githubIcon from "../../assets/img/github_logo.svg";

const Login: FC = () => {
  const [formState, setFormState] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChangeInput = (name: string, value: string) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="max-w-full h-[100vh] flex justify-center items-center">
      <div className="w-[400px] h-auto flex flex-col justify-between items-center gap-20">
        <Link to="#">
          <img src={qencodeIcon} alt="main_logo" />
        </Link>
        <div className="w-[400px] h-auto flex flex-col justify-between items-center">
          <h2 className="font-basis font-bold text-3xl leading-10 text-gray-900 mb-10">
            Log in to your account
          </h2>
          <div className="w-full h-auto flex flex-row justify-between items-center gap-4 mb-7">
            <Button
              width="w-48"
              height="h-12"
              textColor="text-basicDark"
              border="border-2 border-solid border-darkGray"
              radius="rounded-md"
              fontStyle="font-basis text-sm font-medium"
              icon={googleIcon}
              label="Google"
            />
            <Button
              width="w-48"
              height="h-12"
              textColor="text-basicDark"
              border="border-2 border-solid border-darkGray"
              radius="rounded-md"
              fontStyle="font-basis text-sm font-medium"
              icon={githubIcon}
              label="Github"
            />
          </div>
          <div className="w-full flex flex-row justify-between items-center mb-7">
            <div className="w-[186px] border-solid border-[1px] border-lightGray"></div>
            <span className="font-basis text-xs font-medium text-[#BEC5CC]">
              OR
            </span>
            <div className="w-[186px] border-solid border-[1px] border-lightGray"></div>
          </div>
          <div className="w-full flex flex-col gap-6 mb-3.5">
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formState.email}
              onChange={(value: string) => handleChangeInput("email", value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formState.password}
              onChange={(value: string) => handleChangeInput("password", value)}
            />
          </div>
          <div className="w-full flex flex-row justify-end items-center mb-7">
            <Link to="/forgot-password">
              <span className="font-basis font-medium text-sm mt-[5px] text-qencodeBlue">
                Forgot your password?
              </span>
            </Link>
          </div>
          <Button
            width="w-full"
            height="h-12"
            bgColor="bg-qencodeBlue"
            radius="rounded-lg"
            fontStyle="font-basis text-base font-medium"
            textColor="text-white"
            label="Log in to Qencode"
          />
          <div className="flex justify-center items-center mt-5">
            <span className="font-basis text-sm font-medium text-gray-900">
              Is your company new to Qencode?
            </span>
            &nbsp;
            <Link to="#">
              <span className="font-basis text-sm font-medium text-qencodeBlue">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
