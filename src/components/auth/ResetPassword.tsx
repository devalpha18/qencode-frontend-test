import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";
import Input from "../Input";
import qencodeIcon from "../../assets/img/main_logo.svg";

const ResetPassword: FC = () => {
  const [formState, setFormState] = useState<{
    password: string;
    passwordConfirm: string;
  }>({ password: "", passwordConfirm: "" });

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
            Create new Password?
          </h2>
          <div className="w-full flex flex-col gap-6 mb-8">
            <div className="w-full flex flex-col justify-between items-start gap-2">
              <span className="font-basis text-base font-medium leading-5 text-basicDark">
                Password
              </span>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={(value: string) =>
                  handleChangeInput("password", value)
                }
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-2">
              <span className="font-basis text-base font-medium leading-5 text-basicDark">
                Confirm Password
              </span>
              <Input
                type="password"
                name="passwordConfirm"
                placeholder="Password"
                value={formState.passwordConfirm}
                onChange={(value: string) =>
                  handleChangeInput("passwordConfirm", value)
                }
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Button
              width="w-full"
              height="h-12"
              bgColor="bg-qencodeBlue"
              radius="rounded-lg"
              fontStyle="font-basis text-base font-medium"
              textColor="text-white"
              label="Reset Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
