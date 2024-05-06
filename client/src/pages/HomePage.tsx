import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/api/queries";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Header } from "@/shared/ui";

export function HomePage() {
  const { data: session } = useQuery({
    queryKey: [queryKeys.GET_SESSION],
    queryFn: authControllerGetSessionInfo,
  });
  return (
    <main className={`min-h-screen`}>
      <Header right={session?.email} />
    </main>
  );
}
