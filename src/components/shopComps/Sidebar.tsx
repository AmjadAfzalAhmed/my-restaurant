"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import prince from "/public/images/prince.png";
import review from "/public/images/review.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import recentData from "@/data/recent.json";
import filterData from "@/data/filter.json";
import tagsData from "@/data/popular.json";
import photosData from "@/data/gallery.json";

// Define TypeScript interfaces
interface Post {
  id: number;
  image: string;
  date: string;
  excerpt: string;
}

interface Filter {
  id: number;
  image: string;
  title: string;
  quant: number;
}

interface Tag {
  id: number;
  tag: string;
}

interface Photo {
  id: number;
  image: string;
}

const Sidebar: React.FC = () => {
  // State for search input
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State for recent posts, filters, tags, and photos
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Fetch initial data on component mount
  useEffect(() => {
    try {
      setRecentPosts(recentData);
      setFilters(filterData);
      setTags(tagsData);
      setPhotos(photosData);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredPosts = recentData.filter((post: Post) =>
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecentPosts(filteredPosts);
  };

  // Handle tag click (filter posts by tag)
  const handleTagClick = (tag: string) => {
    const filteredPosts = recentData.filter((post: Post) =>
      post.excerpt.toLowerCase().includes(tag.toLowerCase())
    );
    setRecentPosts(filteredPosts);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <Input
          type="text"
          placeholder="Search Your Keyword"
          className="w-full pr-16 rounded-none -z-10"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full w-16 flex items-center justify-center bg-amber-500"
          aria-label="Search"
        >
          <Search className="text-white" />
        </button>
      </form>

      {/* Author Profile */}
      <div className="bg-white p-6 border border-neutral-200 text-center">
        <Image
          src={prince}
          alt="Profile picture of Prince Miyako"
          width={115}
          height={115}
          className="mx-auto rounded-full"
        />
        <h2 className="mt-4 text-xl font-bold">Prince Miyako</h2>
        <p className="mt-2 text-neutral-600">Blogger/Photographer</p>
        <div className="flex items-center pl-[100px]">
          <Image src={review} alt="stars" width={100} height={20} />
          <span>(review)</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          itaque sit delectus saepe eos totam alias dolorum enim cupiditate hic.
        </p>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
        {recentPosts.map((post) => (
          <div key={post.id} className="flex gap-2 mb-4">
            <Image
              src={post.image}
              alt={`Post ${post.id}`}
              width={92}
              height={92}
              className="hover:scale-105 transition-all cursor-pointer"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-sm">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter By Menu */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Filter By Menu</h2>
        {filters.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center justify-between gap-4 font-bold text-zinc-800 mb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={filter.image}
                alt={filter.title}
                width={67}
                height={62}
                className="hover:scale-105 transition-all"
              />
              <span>{filter.title}</span>
            </div>
            <span className="text-center">{filter.quant}</span>
          </div>
        ))}
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className="px-5 py-2 border border-solid border-neutral-600 text-neutral-600 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => handleTagClick(tag.tag)}
            >
              {tag.tag}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {photos.map((photo) => (
            <Image
              key={photo.id}
              src={photo.image}
              alt={`Gallery Image ${photo.id}`}
              width={100}
              height={92}
              className="object-cover hover:scale-90 transition-all"
            />
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="bg-white p-6 border border-neutral-200">
        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
        <div className="flex gap-2 pl-4">
          <a
            href="#"
            className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Follow us on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Follow us on Pinterest"
          >
            <FaPinterest />
          </a>
          <a
            href="#"
            className="p-2 bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Follow us on YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
