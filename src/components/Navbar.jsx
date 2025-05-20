'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
} from 'lucide-react';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full border-b text-sm text-gray-600 bg-white"
    >
      {/* Middle Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 md:px-6 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl font-bold text-gray-800">
            <span className="text-[#3BB77E]">N</span>orivo
          </span>
        </div>

        {/* Search Box */}
        <div className="flex-grow max-w-xl w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Baby Girl Clothing..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* Account Area */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center text-xs hover:text-[#3BB77E] transition">
            <User className="w-5 h-5" />
            <span className="hidden md:block">Account</span>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-[#3BB77E] transition">
            <Heart className="w-5 h-5" />
            <span className="hidden md:block">Wishlist</span>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-[#3BB77E] transition">
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden md:block">Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap items-center justify-start gap-4 px-4 md:px-6 py-3 border-t border-gray-100 bg-white overflow-x-auto whitespace-nowrap"
      >
        <Link href="#" className="hover:text-[#3BB77E] transition">Home</Link>
        <Link href="#" className="hover:text-[#3BB77E] transition">Categories</Link>
        <Link href="#" className="hover:text-[#3BB77E] transition">Products</Link>
        <Link href="#" className="hover:text-[#3BB77E] transition">Blog</Link>
        <Link href="#" className="hover:text-[#3BB77E] transition">Pages</Link>
        <Link href="#" className="hover:text-[#3BB77E] transition">Offers</Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
