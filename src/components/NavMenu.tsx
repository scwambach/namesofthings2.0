"use client";
import { List } from "@phosphor-icons/react";
import { Button, Menu, Text } from "nes-ui-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NavMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = (typeOfName: string) => {
    setOpen(false);
    router.push(`/list?typeOfName=${typeOfName}`);
  };

  return (
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
            handleClick("Band");
            setOpen(false);
          }}
          color="error"
        >
          Band Names
        </Button>
        <Button
          onClick={() => {
            handleClick("Album");
            setOpen(false);
          }}
          color="success"
        >
          Album Names
        </Button>
        <Button
          onClick={() => {
            handleClick("Song");
            setOpen(false);
          }}
          color="primary"
        >
          Song Names
        </Button>
        <Button
          onClick={() => {
            handleClick("Podcast");
            setOpen(false);
          }}
          color="error"
        >
          Podcast Names
        </Button>
        <Button
          onClick={() => {
            handleClick("Horse");
            setOpen(false);
          }}
          color="success"
        >
          Horse Names
        </Button>
        <Button
          onClick={() => {
            handleClick("Other");
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
  );
};
