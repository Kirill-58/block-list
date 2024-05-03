import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/api/queries";
import { queryClient } from "@/shared/api/queryClient";
import { authControllerGetSessionInfo } from "@/shared/api/generated";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  const { data: session } = useQuery({
    queryKey: [queryKeys.GET_SESSION],
    queryFn: authControllerGetSessionInfo,
  });
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {session?.email}
    </main>
  );
}
