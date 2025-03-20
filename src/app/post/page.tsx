"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div
              key={post.id}
              onClick={() => router.push(`/post/${post.id}`)}
              className="bg-white shadow-lg rounded-lg p-6 relative flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-900 uppercase">
                {post.title}
              </h2>
              <p className="text-gray-700 mt-2">{post.body}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading posts...</p>
        )}
      </div>
    </div>
  );
}
