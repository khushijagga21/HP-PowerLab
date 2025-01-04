// Import necessary libraries
import React, { useState } from "react";

const FarmerCommunity = () => {
  const [farmers, setFarmers] = useState([
    { id: 1, name: "Ram Singh", village: "Village A", expertise: "Wheat Farming" },
    { id: 2, name: "Shyam Yadav", village: "Village B", expertise: "Rice Farming" },
    { id: 3, name: "Geeta Devi", village: "Village C", expertise: "Organic Vegetables" },
    { id: 4, name: "Anil Sharma", village: "Village D", expertise: "Sugarcane Farming" },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, farmer: "Ram Singh", village: "Village A", content: "Looking for high-quality seeds for wheat." },
    { id: 2, farmer: "Geeta Devi", village: "Village C", content: "Tips for pest control in organic farming?" },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim().length < 10) {
      alert("Post content must be at least 10 characters.");
      return;
    }
    setPosts([
      { id: posts.length + 1, farmer: "You", village: "Your Village", content: newPost.trim() },
      ...posts,
    ]);
    setNewPost("");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 via-blue-50 to-teal-100 min-h-screen font-sans">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-500 via-blue-600 to-teal-600 text-white p-8 rounded-lg shadow-lg mb-6 text-center">
        <h1 className="text-5xl font-extrabold mb-3">Farmer Community Platform</h1>
        <p className="text-xl">Connect with farmers from neighboring villages and share knowledge.</p>
      </div>

      {/* Farmer Directory */}
      <div className="bg-white p-8 rounded-lg shadow-2xl mb-6">
        <h2 className="text-4xl font-bold text-green-600 mb-6 border-b-4 border-green-300 pb-3">Farmers Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="p-6 bg-gradient-to-br from-green-100 via-blue-50 to-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{farmer.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Village:</strong> {farmer.village}</p>
              <p className="text-gray-700"><strong>Expertise:</strong> {farmer.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Posts */}
      <div className="bg-white p-8 rounded-lg shadow-2xl mb-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 border-b-4 border-blue-300 pb-3">Community Posts</h2>

        {/* Add New Post */}
        <div className="mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share something with the community..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={addPost}
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Post
          </button>
        </div>

        {/* Display Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-600 mb-2">{post.farmer} ({post.village})</h4>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for Map */}
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-teal-600 mb-6 border-b-4 border-teal-300 pb-3">Nearby Villages</h2>
        <p className="text-gray-700 text-center">Map feature is currently unavailable.</p>
      </div>
    </div>
  );
};

export default FarmerCommunity;
