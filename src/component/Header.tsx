"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdOutlineLogin, MdManageAccounts, MdOutlineLogout } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleProfile = () => setShow(!show);

  return (
    <div className="drop-shadow-xl sticky top-0 z-20">
      <div className="px-4 sm:px-20 md:px-32 flex justify-between items-center py-3 text-xl font-medium bg-white">

        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-7 md:gap-7 text-lg font-semibold">
          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-4xl cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            <LuMenu />
          </div>

          {/* Logo */}
          <img
            src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/01/tutorly_logo.png"
            alt="logo"
            className="object-cover w-20 md:w-32"
          />

          {/* NAVIGATION LINKS */}
          <div
            className={`
              ${menu ? "absolute top-16 left-0 w-full bg-white py-3 px-5 shadow-md" : "hidden"}
              md:flex md:static md:bg-transparent
            `}
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-7">

              <Link href="/home" className="text-black hover:text-orange-500">
                Home
              </Link>

              <Link href="/find-tutors" className="text-black hover:text-orange-500">
                Find Tutors
              </Link>

              <Link href="/add-tutors" className="text-black hover:text-orange-500">
                Add Tutorials
              </Link>

              <Link href="/my-booked-tutor" className="text-black hover:text-orange-500">
                My Booked Tutor
              </Link>

              <Link href="/my-tutorials" className="text-black hover:text-orange-500">
                My Tutorials
              </Link>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* LOADING */}
          {false ? (
            <div className="flex animate-spin h-5 w-5 text-orange-500">
              <ImSpinner2 />
            </div>
          ) : false ? (
            // --- USER LOGGED IN ---
            <div className="flex items-center gap-3">
              {/* <img
                onClick={handleProfile}
                src={user?.photoURL}
                alt="profile"
                className="w-12 h-12 rounded-full cursor-pointer"
              /> */}

              {/* <button className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-200 py-2 px-5 rounded-3xl font-semibold">
                SignOut <MdOutlineLogout />
              </button> */}
            </div>
          ) : (
            // --- NO USER (GUEST UI) ---
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/signup")}
                className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-green-400 to-teal-300 py-2 px-5 rounded-3xl font-semibold"
              >
                Register <MdManageAccounts />
              </button>

              <button
                onClick={() => router.push("/login")}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-300 py-2 px-5 rounded-3xl font-semibold"
              >
                <MdOutlineLogin /> Login
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
