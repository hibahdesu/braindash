import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCards = () => {
    router.push('/cards');
    setIsMenuOpen(false);
  };

  const handlePayment = () => {
    router.push('/payment');
    setIsMenuOpen(false);
  };

  const handleStart = () => {
    router.push('/start');
    setIsMenuOpen(false);
  };

  const handleSignUp = () => {
    router.push('/sign-up');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header
      className="bg-quaternary text-primary border-2 border-primary py-6 px-4 sm:px-6 lg:px-12 mt-12 mb-12 mx-4 sm:mx-8 lg:mx-32 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="h-10 sm:h-12 lg:h-16 cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
        <nav className="relative">
          {/* Rest of the code remains the same */}
        </nav>
      </div>
      <div className="mt-12">
        {/* Add your main page content here */}
        <h1>Welcome to the Main Page</h1>
        <p>This is the content of the main page.</p>
      </div>
    </header>
  );
};

export default NavBar;
