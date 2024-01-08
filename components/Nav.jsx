"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const isuserLoggedin = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const getProvider = async () => {
      const response = await getProviders();
    };
    getProvider();
  }, []);
  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="promptcraft logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptcraft</p>
      </Link>
      <div className="hidden sm:flex">
        {isuserLoggedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign out
            </button>
            <Link href="/profile">
              <Image
                width={37}
                height={37}
                alt="profile"
                src="/assets/images/logo.svg"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.key}
                  onClick={() => signIn(provider.id)}
                  type="button"
                  className="black_btn"
                ></button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
