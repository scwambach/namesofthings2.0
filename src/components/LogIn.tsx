"use client";
import { useAuth } from "./AuthProvider";
import { createClient } from "@utils/supabase/client";
import { Avatar } from "@components/Avatar";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const LogIn = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  const avatarName =
    user?.user_metadata?.full_name || user?.user_metadata?.name;

  const menuItemClass =
    "block w-full text-left px-5 py-3 text-[13px] tracking-wider uppercase font-semibold hover:bg-black hover:text-white transition-colors";

  return (
    <div className="pl-4" ref={menuRef}>
      {user ? (
        <div className="relative inline-block">
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <Avatar src={avatarSrc} name={avatarName} size={34} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-black z-10 normal-case">
              <button
                className={menuItemClass}
                disabled={uploadingAvatar}
                onClick={() => {
                  fileInputRef.current?.click();
                }}
              >
                {uploadingAvatar ? "Uploading..." : "Change Avatar"}
              </button>
              <button
                className={`${menuItemClass} border-t border-[#D9D9D9]`}
                onClick={() => {
                  router.push("/my-things");
                  setProfileOpen(false);
                }}
              >
                My Things
              </button>
              <button
                className={`${menuItemClass} border-t border-[#D9D9D9]`}
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="relative inline-block">
          <button
            className="px-4 py-1.5 border border-black"
            onClick={() => setLoginOpen(!loginOpen)}
          >
            Log In
          </button>
          {loginOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-black z-10 normal-case">
              <button className={menuItemClass} onClick={signInWithGoogle}>
                Login with Google
              </button>
              <button
                className={`${menuItemClass} border-t border-[#D9D9D9]`}
                onClick={() => {
                  router.push("/login");
                  setLoginOpen(false);
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
