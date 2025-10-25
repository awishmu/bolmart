import { Search, X} from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
    return (
	<>

		 <Dialog>
			<DialogTrigger asChild>
			  <Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent className="fixed bg-night/60 max-w-[425px] overflow-scroll h-full">
		
				<DialogHeader>
					<DialogTitle></DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
					{/* <!-- Search Form --> */}
                                <div className="block bg-lime-100">
                                    <form action="https://d-themes.com/wordpress/wolmart/demo-29/" method="get" className="input-wrapper flex justify-center border-b-2 pb-2">
                                        <input type="hidden" name="post_type" value="product" />
                                        <input type="search" className="form-control" name="s" placeholder="Search" autoComplete="off" />

                                        <div className="live-search-list">
                                            <div id="autocomplete-suggestions" className="absolute hidden h-[300px] z-99;">
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-search" type="submit" aria-label="Search">
                                            <Search />
                                        </button>
                                    </form>
                                </div>
						{/* <!-- End Search Form --> */}
					
					<nav id="navigation-menu" className="lg-hiddenx flex flex-grow w-full justify-center">	
						<ul id="menu-list" className="flex flex-col lg:gap-3 justify-center w-full m-auto">
							<li id="menu-item" className="w-full bg-zinc-100 m-2 p-2 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Meat</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Fruits</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-green-100 m-2 p-2 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Vegetables</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-zinc-100 m-2 p-2 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Minuman</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-zinc-100 m-2 p-2 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Jamu</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Racikan</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Seafood</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Recipe</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Bakery & Snack</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Panggang</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Kukus</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Gorengan</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">Promo</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full bg-sky-100 m-2 p-2 border-b-2">
								<div id="menu_content" className="text-center m-0">
									<Link href="#" className="">About</Link>
								</div>
							</li>
						</ul>
					</nav>
					
			</DialogContent>
		</Dialog>

    </>
	)
}
