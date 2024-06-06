import { DefaultValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import {
  authControllerSignIn,
  authControllerSingUp,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

type FormValues = {
  email: string;
  password: string;
};

const defaultValues: DefaultValues<FormValues> = {
  email: "",
  password: "",
};

export const useSignInForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({ defaultValues });
  const router = useRouter();
  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error && "Sign in failed";

  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isLoading: signInMutation.isPending,
  };
};
