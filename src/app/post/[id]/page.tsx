import { notFound } from "next/navigation";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  console.log(res);

  if (!res.ok) return notFound(); // Shows 404 if post is missing   

  const post = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold uppercase">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
    </div>
  );
}
