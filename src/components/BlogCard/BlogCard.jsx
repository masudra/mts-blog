import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blogs");
        console.log("Fetched blogs:", res.data);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  console.log("Current sort option:", sortOption);

  const sortedBlogs = [...blogs].sort((a, b) => {
    switch (sortOption) {
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "az":
        return a.title.localeCompare(b.title);
      case "popular":
        return (b.popularity || 0) - (a.popularity || 0);
      case "latest":
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 Latest Blogs</h1>

      <div className="mb-6 flex justify-end">
        <label htmlFor="sort" className="mr-2 font-medium text-gray-700">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="az">A to Z</option>
          <option value="popular">Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={blog.imageUrl || "https://source.unsplash.com/600x400/?blog"}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                <span className="font-medium">{blog.category}</span> ·{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">{blog.summary}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">👤 {blog.author}</span>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
