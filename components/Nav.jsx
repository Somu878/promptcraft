"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDrop, setToggleDrop] = useState(false);
  useEffect(() => {
    const getProvider = async () => {
      const response = await getProviders();
      setProviders(response);
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
        {session?.user ? (
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
                className="rounded-full"
                src={session?.user.image}
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
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              width={37}
              height={37}
              alt="profile"
              className="rounded-full"
              src={session?.user.image}
              onClick={() => setToggleDrop(!toggleDrop)}
            />
            {toggleDrop && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDrop(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDrop(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDrop(false);
                    signOut();
                  }}
                  className="w-full mt-2 black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
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
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
