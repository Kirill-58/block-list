import React from "react";
import { FormPageLayout, Header } from "@/shared/ui";
import { SignInForm, SignUpForm } from "@/features/auth";

export const SignInPage: React.FC = () => {
  return (
    <FormPageLayout title="Sign In" header={<Header />} form={<SignInForm />} />
  );
};
