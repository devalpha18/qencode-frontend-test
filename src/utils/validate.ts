import isEmail from "./isEmail";
import isEmpty from "./isEmpty";

export default function validate(
  formfield: string,
  formtype: string,
  prevformfield?: string
) {
  // Define your state schema
  const stateSchema: Record<
    "empty" | "email" | "password" | "confirm_password" | "success",
    { value: string; error: boolean }
  > = {
    empty: { value: "This field is required. *", error: true },
    email: { value: "The email should be a valid email format.", error: true },
    password: {
      value: "The password fields should be at least 8 characters long.",
      error: true,
    },
    confirm_password: {
      value: "This confirm password is not matched into the password",
      error: true,
    },
    success: {
      value: "success",
      error: false,
    },
  };

  return formtype === "email"
    ? !isEmpty(formfield)
      ? isEmail(formfield)
        ? stateSchema.success
        : stateSchema.email
      : stateSchema.empty
    : !isEmpty(formfield)
    ? formfield.length >= 8
      ? formtype === "confirm"
        ? formfield === prevformfield
          ? stateSchema.success
          : stateSchema.confirm_password
        : stateSchema.success
      : stateSchema.password
    : stateSchema.empty;
}
