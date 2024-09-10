"use client";
import { Button, Menu } from "nes-ui-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const LogIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Link href="/search">
        <MagnifyingGlass size={22} weight="bold" />
      </Link>
      {session ? (
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <div className="overflow-hidden rounded-full w-16">
              <Image
                src={session.user?.image as string}
                alt="user avatar"
                width={100}
                height={100}
              />
            </div>
          </button>
          <Menu
            open={profileOpen}
            modal
            className="top-full right-0 bg-black "
            onClose={() => {
              setProfileOpen(false);
            }}
          >
            <Button
              className="min-w-[150px]"
              color="primary"
              onClick={() => {
                router.push("/my-things");
                setProfileOpen(false);
              }}
            >
              My Things
            </Button>
            <Button color="error" onClick={() => signOut()}>
              Sign Out
            </Button>
          </Menu>
        </div>
      ) : (
        <Button color="primary" onClick={() => signIn()}>
          Log In
        </Button>
      )}
    </div>
  );
};
