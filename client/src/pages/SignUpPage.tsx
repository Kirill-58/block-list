import React from "react";
import { FormPageLayout, Header } from "@/shared/ui";
import { SignUpForm } from "@/features/auth";

export const SignUpPage: React.FC = () => {
  return (
    <FormPageLayout title="Sign Up" header={<Header />} form={<SignUpForm />} />
  );
};
