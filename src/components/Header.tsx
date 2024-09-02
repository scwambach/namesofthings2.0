"use client";
import { List } from "@phosphor-icons/react";
import { Button, Menu, Text } from "nes-ui-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="flex justify-between px-8 py-4">
      <div className="flex relative gap-4 items-center">
        <Button borderInverted fontColor="black" onClick={() => setOpen(!open)}>
          <List size={22} weight="bold" />
        </Button>

        <Menu
          open={open}
          modal
          className="top-full "
          onClose={() => {
            setOpen(false);
          }}
        >
          <div>test 1</div>
          <div>test 2</div>
          <div>test 3</div>
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
