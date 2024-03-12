import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { Input } from "../Input";
import qencodeIcon from "../../assets/img/main_logo.svg";
import validate from "../../utils/validate";

const ForgotPassword: FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<{ email: string }>({ email: "" });
  const [errors, setErrors] = useState<{ value: string; error: boolean }>({
    value: "",
    error: false,
  });

  const handleChangeInput = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setErrors(validate(formState.email, "email"));
  };

  const cancelSubmit = () => {
    navigate("/");
  };

  return (
    <div className="max-w-full h-[100vh] flex justify-center items-center">
      <div className="w-[400px] h-auto flex flex-col justify-between items-center gap-20">
        <Link to="/">
          <img src={qencodeIcon} alt="main_logo" />
        </Link>
        <div className="w-[400px] h-auto flex flex-col justify-between items-center">
          <h2 className="font-basis font-bold text-3xl leading-10 text-gray-900 mb-10">
            Forgot Password?
          </h2>
          <div className="w-full mb-6">
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formState.email}
              errors={errors}
              onChange={(value: string) => handleChangeInput("email", value)}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <Button
              width="w-full"
              height="h-12"
              bgColor="bg-qencodeBlue"
              radius="rounded-lg"
              fontStyle="font-basis text-base font-medium"
              textColor="text-white"
              label="Send"
              onClick={handleSubmit}
            />
            <Button
              width="w-full"
              height="h-12"
              radius="rounded-lg"
              border="border-2 border-solid border-darkGray"
              fontStyle="font-basis text-base font-medium"
              textColor="text-basicDark"
              label="Cancel"
              onClick={cancelSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
