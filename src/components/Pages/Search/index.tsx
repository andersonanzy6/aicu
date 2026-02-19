"use client";
import React, { useState } from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

interface SearchResult {
   title: string;
   description: string;
   link: string;
   category: string;
}

const SearchPage = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [results, setResults] = useState<SearchResult[]>([]);
   const [hasSearched, setHasSearched] = useState(false);

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setHasSearched(true);
      
      // Mock search results - in production, this would query your database
      const mockResults: SearchResult[] = [
         {
            title: "Academic Programs",
            description: "Explore our undergraduate and graduate degree programs",
            link: "/academics/masters-degrees",
            category: "Academics",
         },
         {
            title: "Admissions Process",
            description: "Learn about how to apply to AICU",
            link: "/admissions/how-to-apply",
            category: "Admissions",
         },
         {
            title: "Financial Aid",
            description: "Information about scholarships and financial assistance",
            link: "/admissions/financial-aid",
            category: "Admissions",
         },
         {
            title: "Faculty Directory",
            description: "Meet our distinguished faculty members",
            link: "/faculty",
            category: "About",
         },
      ];

      // Filter results based on search query
      if (searchQuery.trim()) {
         const filtered = mockResults.filter(
            (result) =>
               result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               result.description.toLowerCase().includes(searchQuery.toLowerCase())
         );
         setResults(filtered);
      } else {
         setResults([]);
      }
   };

   return (
      <>
         <title>AICU | Search</title>
         <HeaderPage
            text="Search"
            image="/new/n-1.jpg"
         />
         
         <div className="max-w-4xl mx-auto py-16 px-4">
            <form onSubmit={handleSearch} className="mb-12">
               <div className="flex gap-2">
                  <input
                     type="text"
                     placeholder="Search AICU..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4169E1] text-lg"
                  />
                  <button
                     type="submit"
                     className="bg-[#4169E1] text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                     Search
                  </button>
               </div>
            </form>

            {hasSearched && searchQuery.trim() === "" && (
               <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">Please enter a search term to get started.</p>
               </div>
            )}

            {hasSearched && searchQuery.trim() !== "" && results.length === 0 && (
               <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-6">
                     No results found for "{searchQuery}". Try different keywords or browse our main sections:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <a href="/about" className="text-[#4169E1] hover:underline font-semibold">
                        → About AICU
                     </a>
                     <a href="/academics" className="text-[#4169E1] hover:underline font-semibold">
                        → Academics
                     </a>
                     <a href="/admissions" className="text-[#4169E1] hover:underline font-semibold">
                        → Admissions
                     </a>
                     <a href="/faculty" className="text-[#4169E1] hover:underline font-semibold">
                        → Faculty
                     </a>
                  </div>
               </div>
            )}

            {results.length > 0 && (
               <div>
                  <h2 className="text-2xl font-bold mb-8">
                     Found {results.length} result{results.length !== 1 ? "s" : ""}
                  </h2>
                  <div className="space-y-6">
                     {results.map((result, index) => (
                        <div
                           key={index}
                           className="border-l-4 border-[#4169E1] pl-6 py-4 hover:bg-gray-50 transition-colors duration-300 rounded"
                        >
                           <div className="flex items-start justify-between">
                              <div>
                                 <a
                                    href={result.link}
                                    className="text-xl font-bold text-[#4169E1] hover:underline"
                                 >
                                    {result.title}
                                 </a>
                                 <p className="text-gray-600 mt-2">{result.description}</p>
                                 <span className="inline-block mt-3 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                                    {result.category}
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default SearchPage;
