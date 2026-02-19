"use client";
import React, { useState, useEffect } from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

interface Article {
   title: string;
   description: string;
   image: string;
   date: string;
   link: string;
}

const NewsArchive = () => {
   const [articles, setArticles] = useState<Article[]>([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // In a real application, you would fetch articles from an API
      // For now, we'll display a message that articles should be linked from the blog posts
      setLoading(false);
   }, []);

   const filteredArticles = articles.filter(
      (article) =>
         article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         article.description.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <>
         <title>AICU | News & Blog</title>
         <HeaderPage
            text="News & Blog"
            image="/new/n-1.jpg"
         />
         
         <div className="max-w-7xl mx-auto py-16 px-4">
            <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
               Stay updated with the latest news, articles, and stories from the AICU community.
            </p>

            {/* Search Bar */}
            <div className="mb-12">
               <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4169E1]"
               />
            </div>

            {loading ? (
               <div className="text-center py-12">
                  <p className="text-gray-600">Loading articles...</p>
               </div>
            ) : articles.length === 0 ? (
               <div className="text-center py-12">
                  <p className="text-gray-600 mb-6">
                     Articles are published regularly. Check back soon for the latest news and updates from AICU.
                  </p>
                  <a
                     href="/"
                     className="inline-block bg-[#4169E1] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                     Back to Home
                  </a>
               </div>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article, index) => (
                     <article
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                     >
                        <img
                           src={article.image}
                           alt={article.title}
                           className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                           <p className="text-[#4169E1] font-semibold text-sm mb-2">{article.date}</p>
                           <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                           <p className="text-gray-600 mb-4">{article.description}</p>
                           <a
                              href={article.link}
                              className="inline-block text-[#4169E1] font-semibold hover:underline"
                           >
                              Read More →
                           </a>
                        </div>
                     </article>
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default NewsArchive;
