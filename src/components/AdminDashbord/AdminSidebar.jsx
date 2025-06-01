import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/blogs" className="hover:underline">All Blogs</Link>
        <Link to="/admin/add-blog" className="hover:underline">Add Blogs</Link>
      </nav>
    </div>
  );
}
