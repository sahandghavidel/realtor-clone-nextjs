import Layout from "../components/Layout";
import Image from "next/image";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const router = useRouter();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        router.push("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }
  return (
    <Layout>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
        <div className="flex flex-wrap px-6 py-12 max-w-6xl mx-auto justify-center items-start">
          <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
            <Image
              src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              width={640}
              height={480}
              alt="key"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={onSubmit}>
              <input
                className="transition ease-in-out w-full border-gray-300 rounded text-xl text-gray-700 px-4 py-2 mb-6"
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
              />
              <div className="relative">
                <input
                  className="transition ease-in-out w-full border-gray-300 rounded text-xl text-gray-700 px-4 py-2 mb-6"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p>
                  Don't have an account?
                  <Link href="/sign-up">
                    <a className="text-red-600 hover:text-red-700 transition ease-in-out ml-1">
                      Register
                    </a>
                  </Link>
                </p>
                <Link href="/forgot-password">
                  <a className="text-blue-600 hover:text-blue-800 transition ease-in-out ml-1">
                    Forgot password?
                  </a>
                </Link>
              </div>
              <button
                className="mb-6 mt-6 w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded hover:bg-blue-700 shadow-md hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="submit"
              >
                Sign in
              </button>
              <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
