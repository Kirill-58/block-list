import React from "react";
import { Button } from "@/shared/ui";
import { useSignOutButton } from "@/features/auth/model/useSignOutButton";

export const SignOutButton: React.FC = () => {
  const { signOut, isLoading } = useSignOutButton();
  return (
    <Button variant="outline" disabled={isLoading} onClick={() => signOut({})}>
      Sign Out
    </Button>
  );
};
