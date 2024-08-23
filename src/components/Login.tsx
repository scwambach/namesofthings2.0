"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="user image"
              width={50}
              className="rounded-full"
              height={50}
            />
          )}

          <button
            onClick={() => signOut()}
            type="button"
            className="bg-purple-400 py-2 px-4 rounded-lg text-white hover:text-black"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          type="button"
          className="bg-purple-400 py-2 px-4 rounded-lg text-white hover:text-black"
        >
          Sign In
        </button>
      )}
    </>
  );
};
