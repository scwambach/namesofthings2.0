"use client";
import { Button, Menu } from "nes-ui-react";
import { useAuth } from "./AuthProvider";
import { createClient } from "@utils/supabase/client";
import { Avatar } from "@components/Avatar";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const LogIn = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const signInWithGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
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

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploadingAvatar(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/uploadAvatar", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.status === 200) {
        const supabase = createClient();
        await supabase.auth.updateUser({
          data: { custom_avatar_url: data.body.url },
        });
      }
    } finally {
      setUploadingAvatar(false);
    }
  };

  const avatarSrc =
    user?.user_metadata?.custom_avatar_url ||
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture;
  const avatarName = user?.user_metadata?.full_name || user?.user_metadata?.name;

  return (
    <div className="flex items-center gap-4">
      <Link href="/search">
        <MagnifyingGlass size={22} weight="bold" />
      </Link>

      {user ? (
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <Avatar src={avatarSrc} name={avatarName} size={64} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
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
              color="warning"
              disabled={uploadingAvatar}
              onClick={() => {
                fileInputRef.current?.click();
              }}
            >
              {uploadingAvatar ? "Uploading..." : "Change Avatar"}
            </Button>
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
            <Button color="primary" onClick={signInWithGoogle}>
              Login with Google
            </Button>
            <Button
              color="error"
              onClick={() => {
                router.push("/login");
                setLoginOpen(false);
              }}
            >
              Login
            </Button>
          </Menu>
        </div>
      )}
    </div>
  );
};
