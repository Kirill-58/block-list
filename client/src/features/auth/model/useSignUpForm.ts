import { DefaultValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { authControllerSingUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

type FormValues = {
  email: string;
  password: string;
};

const defaultValues: DefaultValues<FormValues> = {
  email: "",
  password: "",
};

export const useSignUpForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({ defaultValues });
  const router = useRouter();
  const signUpMutation = useMutation({
    mutationFn: authControllerSingUp,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signUpMutation.error && "Sign up failed";

  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
  };
};
