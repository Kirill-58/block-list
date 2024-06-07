import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/api/queries";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Header } from "@/shared/ui";
import { SignOutButton } from "@/features/auth";

export function HomePage() {
  const { data: session } = useQuery({
    queryKey: [queryKeys.GET_SESSION],
    queryFn: authControllerGetSessionInfo,
    staleTime: 5 * 60 * 1000,
  });
  return (
    <main className={`min-h-screen`}>
      <Header
        right={
          <div>
            {session?.email} <SignOutButton />
          </div>
        }
      />
    </main>
  );
}
