import Link from "next/link";
import { LogIn } from "./LogIn";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <NavMenu />

      <LogIn />
    </header>
  );
};
