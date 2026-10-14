"use client";
import { Button, Menu } from "nes-ui-react";
import { useAuth } from "./AuthProvider";
import { createClient } from "@utils/supabase/client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const LogIn = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const signInWith = async (provider: "google" | "github") => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex items-center gap-4">
      <Link href="/search">
        <MagnifyingGlass size={22} weight="bold" />
      </Link>
      {user ? (
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <div className="overflow-hidden rounded-full w-16">
              <Image
                src={
                  (user.user_metadata?.avatar_url ||
                    user.user_metadata?.picture) as string
                }
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
            <Button color="error" onClick={signOut}>
              Sign Out
            </Button>
          </Menu>
        </div>
      ) : (
        <div className="relative">
          <Button color="primary" onClick={() => setLoginOpen(!loginOpen)}>
            Log In
          </Button>
          <Menu
            open={loginOpen}
            modal
            className="top-full right-0 bg-black"
            onClose={() => {
              setLoginOpen(false);
            }}
          >
            <Button color="primary" onClick={() => signInWith("google")}>
              Sign in with Google
            </Button>
            <Button color="error" onClick={() => signInWith("github")}>
              Sign in with GitHub
            </Button>
          </Menu>
        </div>
      )}
    </div>
  );
};
