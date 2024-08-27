"use client";
import { Button, Text } from "nes-ui-react";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between px-8 py-4">
      <Text size="xlarge">Names of Things</Text>
      <div>
        {session ? (
          <div className="flex justify-between gap-4 items-center">
            {session.user?.email}
            <Button color="warning" onClick={() => signOut()}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button color="primary" onClick={() => signIn()}>
            Log In
          </Button>
        )}
      </div>
    </header>
  );
};
