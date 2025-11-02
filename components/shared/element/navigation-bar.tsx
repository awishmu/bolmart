"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

export function NavigationBar () { 
  
	const categories = ['Fruits', 'Vegetable', 'Vegan Meat', 'Seafood', 'Recipe', 'Bakery', 'Promo', 'About us'];
	
	// State to track which component is open
	const [openComponent, setOpenComponent] = useState(null);
	// Function to toggle components
	const handleToggle = () => {
		setOpenComponent((prev) => (prev === component ? ))
	}

	return (
	<>
					<nav className="flex items-center justify-between">
						<ul className="flex items-center gap-6 py-4">
							{categories.map((category) => (
								<li key={category}>
								<a 
									href="#" 
									className="text-gray-700 hover:text-green-500 transition font-medium flex items-center gap-1"
								>
									{category}
									
								</a>
									{['Vegan Meat', 'Bakery'].includes(category) && 
									
									<ChevronDown className="w-4 h-4" />
									
									}
								</li>
							))}
						</ul>
						<div className="flex items-center gap-4">
							<a href="#" className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition font-medium">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" 
								/>
								</svg>
								Promotions
							</a>
							<a href="#" className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition font-medium">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" 
								/>
								</svg>
								Weekly Discounts
							</a>
						</div>
					</nav> 
	</>
	)
	
}
