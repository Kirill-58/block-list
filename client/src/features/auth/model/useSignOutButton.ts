import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authControllerSignOut } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";
import { queryKeys } from "@/shared/api/queries";

export const useSignOutButton = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [queryKeys.GET_SESSION] });
      router.push(ROUTES.SIGN_IN);
    },
  });

  return {
    signOut: signOutMutation.mutate,
    isLoading: signOutMutation.isPending,
  };
};
