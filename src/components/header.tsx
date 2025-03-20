import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-900 shadow-lg ">
      <div className="group">
        <Link
          href="/"
          className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300 transform group-hover:scale-110 group-hover:rotate-3 inline-block"
        >
          Home Page
        </Link>
      </div>
      <div className="group">
        <Link
          href="/post"
          className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300 transform group-hover:scale-110 group-hover:rotate-3 inline-block"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}
