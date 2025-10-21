"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { ElPopover } from "@/components/shared/el-popover";
import { ElDialog } from "@/components/shared/el-dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MobileMenu } from './mobile-menu';

export function MainHeader () { 
	const [cartCount, setCartCount] = useState(3);
  	const [wishlistCount, setWishlistCount] = useState(0);
	const categories = ['Fruits', 'Vegetable', 'Vegan Meat', 'Seafood', 'Dairy', 'Bakery', 'Beverages', 'Beer & Liquor'];

	return (
	<>
		{/* Logo */}
					<div className="flex items-center gap-2">
						{/* Mebile Menu Toggle */}
							<div className='inline md:hidden w-auto'>
								<div>
									<Dialog>
										<DialogTrigger>
											<Button variant="outline"><Menu/></Button>
										</DialogTrigger>
										<DialogContent className="bg-night/60 border-0">
											<DialogHeader>
											<DialogTitle>Are you absolutely sure?</DialogTitle>
											<DialogDescription>
												<MobileMenu />
											</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
									
								</div>
							</div>
						<div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-lg">W</span>
						</div>
						<span className="text-2xl font-bold text-gray-800">olmart</span>
					</div>
				{/* Search Bar */}
					<div className="hidden lg:flex flex-1 max-w-2xl">
						<div className="relative flex items-center">
							<select className="absolute left-0 bg-gray-50 border-r px-4 py-3 text-sm text-gray-700 focus:outline-none rounded-l-md cursor-pointer">
								<option>All Categories</option>
								{categories.map(cat => <option key={cat}>{cat}</option>)}
							</select>
							<Input 
								type="text" 
								placeholder="Search in..."
								className="pl-40 pr-12 py-6 rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
							/>
							<Button className="absolute right-1 bg-green-500 hover:bg-green-600 text-white rounded-md">
								<Search className="w-5 h-5" />
							</Button>
						</div>
					</div>
				{/* Right Section */}
					<div className="hidden lg:flex items-center gap-6">
						{/* Phone */}
						<div className="flex items-center gap-2">
							<Phone className="w-5 h-5 text-gray-600" />
							<div>
								<p className="text-xs text-gray-500">Call Us Now:</p>
								<p className="text-sm font-semibold text-gray-800">0(800)123-456</p>
							</div>
						</div>
					</div>

				{/* Icons */}
					<div className="flex items-center gap-4">
						<Button className="relative hover:text-green-500 transition">
							<Heart className="w-6 h-6 text-gray-700" />
								{wishlistCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
								{wishlistCount}
							</span>
							)}
						</Button>
						<Button className="hidden md:flex relative hover:text-green-500 transition">
							<Scale className="w-6 h-6 text-gray-700" />
						</Button>
						<Button className="relative hover:text-green-500 transition">
							<ShoppingCart className="w-6 h-6 text-gray-700" />
							{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
								{cartCount}
							</span>
							)}
						</Button>
					</div>
	</>
	)
	
}