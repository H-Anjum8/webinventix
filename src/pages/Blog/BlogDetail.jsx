import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
console.log('idd',id)
//   const blog = blogs.find((b) => b.id === parseInt(id)
  if (!id) {
    return <div className="text-center text-red-500 text-xl py-12">Blog not found</div>;
  }
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
        
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post {id}</h1>
      <p className="text-gray-700">
        This is the detailed blog post content for blog ID: {id}. Add more
        dynamic content here.
      </p>
      <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetail;