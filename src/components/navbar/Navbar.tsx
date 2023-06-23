import { useState, useEffect } from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import UserMenu from "./UserMenu";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

import { signIn, useSession } from "next-auth/react";
import { type Session } from "next-auth";

interface LayoutProps {
  session: Session | null;
  userName: string;
}

const Navbar = () => {

  const { data: session } = useSession();
  const userName = session?.user?.name?.split(" ")[0] ?? "Guest";
  console.log(session);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as per your requirement
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed w-full z-10">
      <div className="py-4">
        <Container>
          {isLargeScreen ? (
            <LargeScreenLayout session={session} userName={userName} />
          ) : (
            <SmallScreenLayout session={session} userName={userName} />
          )}
        </Container>
      </div>
    </div>
  );
};

const LargeScreenLayout = ({ session, userName }: LayoutProps) => {
  return (
    <div className="flex flex-row items-center px-24 py-6 justify-start gap-4 relative">
      <Logo />
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NavLinks />
      </div>
      <div className="ml-auto">
        <UserMenu session={session} userName={userName} />
      </div>
    </div>
  );
};

const SmallScreenLayout = ({ session, userName }: LayoutProps) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="mx-10 my-3 flex flex-row items-center justify-between">
        <div className = "gap-4 flex items-center">
            <MenuButton onClick={()=>{
                setOpen(true);
            }}/>
            <Logo />
        </div>
        <UserMenu session={session} userName={userName}/>
        {open ? (<MobileMenu close={() => setOpen(false)}/>) : (<></>)}
      </div>
    );
  };
  

export default Navbar;
