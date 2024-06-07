import { FC } from "react";
import { Button, Link, TextField } from "@/shared/ui";
import { ROUTES } from "@/shared/constants/routes";
import { useSignInForm } from "@/features/auth/model/useSignInForm";

export const SignInForm: FC = () => {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();
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
        Sign In
      </Button>
      <Link className={"text-center"} href={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
      {errorMessage && (
        <div className="text-rose-500 text-center">{errorMessage}</div>
      )}
    </form>
  );
};
