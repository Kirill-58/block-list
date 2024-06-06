import { PropsWithChildren, ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { PageSpin } from "@/shared/ui";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";
import { queryKeys } from "@/shared/api/queries";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useQuery({
      queryKey: [queryKeys.GET_SESSION],
      queryFn: authControllerGetSessionInfo,
      retry: 0,
      staleTime: 5 * 60 * 1000,
    });

    if (isLoading) {
      return <PageSpin />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
