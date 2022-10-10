import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export default function Profile() {
  const auth = getAuth();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setFormData({
          name: user.displayName,
          email: user.email,
        });
      } else {
        router.push("/sign-in");
      }
    });
    setLoading(false);
  }, [auth]);
  const { name, email } = formData;
  if (loggedIn && !loading) {
    return (
      <Layout>
        <section className="max-w-6xl flex justify-center items-center flex-col mx-auto">
          <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
          <div className="w-full md:w-[50%] px-3 mt-6">
            <form>
              <input
                type="text"
                id="name"
                value={name}
                disabled
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                placeholder="Full name"
              />
              <input
                type="email"
                id="email"
                value={email}
                disabled
                className="mt-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                placeholder="Email"
              />
            </form>
            <div className="flex justify-between text-sm sm:text-lg mt-6 whitespace-nowrap">
              <p>
                Do you want to change your name?
                <span className="text-red-600 cursor-pointer hover:text-red-700 transition ease-in-out ml-1">
                  Edit
                </span>
              </p>
              <p onClick={()=>auth.signOut()} className="text-blue-600 cursor-pointer hover:text-blue-800 transition ease-in-out ml-1">
                Sign out
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }
}
