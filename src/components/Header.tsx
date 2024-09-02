"use client";
import { List } from "@phosphor-icons/react";
import { Button, Menu, Text } from "nes-ui-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleClick = (typeOfName: string) => {
    setOpen(false);
    router.push(`/list?typeOfName=${typeOfName}`);
  };

  return (
    <header className="flex justify-between px-8 py-4">
      <div className="flex relative gap-8 items-center">
        <Button borderInverted fontColor="black" onClick={() => setOpen(!open)}>
          <List size={22} weight="bold" />
        </Button>

        <Menu
          open={open}
          modal
          className="top-full bg-black"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Button
            onClick={() => {
              handleClick("band");
              setOpen(false);
            }}
            color="primary"
          >
            Band Names
          </Button>
          <Button
            onClick={() => {
              handleClick("album");
              setOpen(false);
            }}
            color="success"
          >
            Album Names
          </Button>
          <Button
            onClick={() => {
              handleClick("song");
              setOpen(false);
            }}
            color="warning"
          >
            Song Names
          </Button>
          <Button
            onClick={() => {
              handleClick("podcast");
              setOpen(false);
            }}
            color="error"
          >
            Podcast Names
          </Button>
          <Button
            onClick={() => {
              handleClick("horse");
              setOpen(false);
            }}
            color="white"
          >
            Horse Names
          </Button>
          <Button
            onClick={() => {
              handleClick("other");
              setOpen(false);
            }}
            color="primary"
          >
            Other Names
          </Button>
        </Menu>
        <Link href="/" className="logo">
          <Text size="xlarge">N.O.T.</Text>
        </Link>
      </div>
      <div>
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
              className="top-full right-0"
              onClose={() => {
                setProfileOpen(false);
              }}
            >
              <Button>My Things</Button>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </Menu>
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
