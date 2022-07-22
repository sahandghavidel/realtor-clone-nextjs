import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button className="mt-6 flex items-center justify-center w-full bg-red-700 text-white py-3 px-7 uppercase text-sm font-medium rounded shadow-md hover:bg-red-800 hover:shadow-lg active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out">
      <FcGoogle className="text-2xl bg-white border rounded-full mr-2" /> Continue with Google
    </button>
  );
}
