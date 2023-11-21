"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase/config";
import Link from "next/link";

export default function Navigation() {
  const [signedIn] = useAuthState(firebaseAuth);

  const handleSignOut = () => {
    firebaseAuth.signOut();
  };

  return (
    <>
      <div className="flex font-light items-center align-middle justify-center h-8 text-sm ">
        <p> Welcome to Carnival Guide | Call Us: +09 957774334</p>
        <div className="ml-96">
          <div className="dropdown dropdown-hover z-50">
            {signedIn ? (
              <>
                <div className="inline-flex hover:text-sky-500 px-3">
                  <span>My Account</span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white box w-52"
                >
                  <li>
                    <a>Wishlist</a>
                  </li>
                  <li>
                    <Link href="/myaccount">My Account</Link>
                  </li>
                  <li>
                    <a>Compare</a>
                  </li>
                  <li>
                    <Link href="/Cart">Checkout</Link>
                  </li>
                </ul>
              </>
            ) : (
              <label tabIndex={0} className="hover:text-sky-500 pr-3 ">
                <Link href="/signup">Login/Register</Link>
              </label>
            )}
          </div>
          |
          <div className="inline-flex hover:text-sky-500 px-3">
            <Link href="/">Buyer Protection</Link>
          </div>
          |
          <div className="inline-flex hover:text-sky-500 px-3">
            <Link href="/">Services</Link>
          </div>
          |
          <div className="inline-flex hover:text-sky-500 px-3">
            <Link href="/">Support</Link>
          </div>
          |
          <div className="inline-flex hover:text-sky-500 px-3">
            <Link href="/admin">Admin</Link>
          </div>
          {signedIn && (
            <div
              onClick={handleSignOut}
              className="inline-flex hover:text-sky-500 px-3 cursor-pointer"
            >
              | Sign Out
            </div>
          )}
        </div>
      </div>
    </>
  );
}
