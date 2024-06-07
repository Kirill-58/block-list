import { FC } from "react";
import { Button, Link, TextField } from "@/shared/ui";
import { ROUTES } from "@/shared/constants/routes";
import { useSignUpForm } from "@/features/auth/model/useSignUpForm";

export const SignUpForm: FC = () => {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();
  return (
    <form className={"flex flex-col gap-2"} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <TextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <Button disabled={isLoading} variant="primary">
        Sign Up
      </Button>
      <Link className={"text-center"} href={ROUTES.SIGN_IN}>
        Sign In
      </Link>
      {errorMessage && (
        <div className="text-rose-500 text-center">{errorMessage}</div>
      )}
    </form>
  );
};
