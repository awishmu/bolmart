"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

import { TopBar } from './element/top-bar';
import { MainHeader } from './element/main-header';
import { HeaderMenu } from './element/header-menu';

export function HeaderSection () {
 	

	return (
	<>
		<header className="sticky top-0 z-50 shadow-sm">
			{/* Top Bar */}
			<div className="border-b">
				<div className="container mx-auto px-4 py-2">
					<TopBar />
				</div>
			</div>
			{/* Main Header */}
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between gap-8">
					<MainHeader />
				</div>
 			</div>
			{/* Navigation */}
			<div className="bg-beige border-t hidden lg:flex">
				<div className="container mx-auto px-4">
					<HeaderMenu />
				</div>
			</div>
		</header>
	</>
	)
	
}
