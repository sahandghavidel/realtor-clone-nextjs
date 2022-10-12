import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const router = useRouter();
  const auth = getAuth()
  const [pageState, setPageState] = useState("Sign in")

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      }else{
        setPageState("Sign in")
      }
    })
  },[auth])

  function pathMatchRoute(route) {
    if (route === router.pathname) {
      return true;
    }
  }
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              <Link href={"/offers"}>Offers</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"
              }`}
            >
              <Link href={"/profile"}>{pageState}</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
