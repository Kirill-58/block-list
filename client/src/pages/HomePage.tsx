import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/api/queries";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Button, TextField } from "@/shared/ui";

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
      <Button variant={"primary"}>Click me</Button>
      <Button variant={"secondary"}>Click me</Button>
      <Button variant={"outline"}>Click me</Button>
      <Button variant={"primary"} disabled>
        Click me
      </Button>

      <TextField
        label={"Text Field"}
        inputProps={{ placeholder: "enter email..." }}
      />
    </main>
  );
}
