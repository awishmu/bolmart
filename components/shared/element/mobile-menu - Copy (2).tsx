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

import { Search, X} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MobileMenu-copy2() {
    return (
        <Menubar className="flex flex-col h-screen bg-night border-0">
			<MenubarMenu>
				<MenubarItem className="w-full mb-4"><Link href="#">Fruits</Link></MenubarItem>
					<MenubarItem className="w-full mb-4"><Link href="#">Meat</Link></MenubarItem>
			</MenubarMenu>
				<MenubarMenu>
					<MenubarContent>		  
					<MenubarItem className="w-full mb-4"><Link href="#">Fruits</Link></MenubarItem>
					<MenubarItem className="w-full mb-4"><Link href="#">Meat</Link></MenubarItem>
				<MenubarItem className="w-full mb-4"><Link href="#">Vegetables</Link></MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		  <MenubarMenu> 			
			<MenubarTrigger className="w-full border-b-2 mb-4">Meat</MenubarTrigger>
			<MenubarContent className="relative left-[35%]">
			  <MenubarItem>
				New Tab <MenubarShortcut>⌘T</MenubarShortcut>
			  </MenubarItem>
			  <MenubarItem>
				New Window <MenubarShortcut>⌘N</MenubarShortcut>
			  </MenubarItem>
			  <MenubarItem disabled>New Incognito Window</MenubarItem>
			  <MenubarSeparator />
			  <MenubarSub>
				<MenubarSubTrigger>Share</MenubarSubTrigger>
				<MenubarSubContent>
				  <MenubarItem>Email link</MenubarItem>
				  <MenubarItem>Messages</MenubarItem>
				  <MenubarItem>Notes</MenubarItem>
				</MenubarSubContent>
			  </MenubarSub>
			  <MenubarSeparator />
			  <MenubarItem>
				Print... <MenubarShortcut>⌘P</MenubarShortcut>
			  </MenubarItem>
			</MenubarContent>
		  </MenubarMenu>
		  <MenubarMenu>
			<MenubarTrigger className="w-full border-b-2 mb-4">Edit</MenubarTrigger>
			<MenubarContent className="relative left-[35%]">
			  <MenubarItem>
				Undo <MenubarShortcut>⌘Z</MenubarShortcut>
			  </MenubarItem>
			  <MenubarItem>
				Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
			  </MenubarItem>
			  <MenubarSeparator />
			  <MenubarSub>
				<MenubarSubTrigger>Find</MenubarSubTrigger>
				<MenubarSubContent>
				  <MenubarItem>Search the web</MenubarItem>
				  <MenubarSeparator />
				  <MenubarItem>Find...</MenubarItem>
				  <MenubarItem>Find Next</MenubarItem>
				  <MenubarItem>Find Previous</MenubarItem>
				</MenubarSubContent>
			  </MenubarSub>
			  <MenubarSeparator />
			  <MenubarItem>Cut</MenubarItem>
			  <MenubarItem>Copy</MenubarItem>
			  <MenubarItem>Paste</MenubarItem>
			</MenubarContent>
		  </MenubarMenu>
		  <MenubarMenu>
			<MenubarTrigger className="w-full border-b-2 mb-4">View</MenubarTrigger>
			<MenubarContent className="relative left-[35%]">
			  <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
			  <MenubarCheckboxItem checked>
				Always Show Full URLs
			  </MenubarCheckboxItem>
			  <MenubarSeparator />
			  <MenubarItem inset>
				Reload <MenubarShortcut>⌘R</MenubarShortcut>
			  </MenubarItem>
			  <MenubarItem disabled inset>
				Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
			  </MenubarItem>
			  <MenubarSeparator />
			  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
			  <MenubarSeparator />
			  <MenubarItem inset>Hide Sidebar</MenubarItem>
			</MenubarContent>
		  </MenubarMenu>
		  <MenubarMenu>
			<MenubarTrigger className="w-full border-b-2 mb-4">Profiles</MenubarTrigger>
			<MenubarContent className="relative left-[35%]">
			  <MenubarRadioGroup value="benoit">
				<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
				<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
				<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
			  </MenubarRadioGroup>
			  <MenubarSeparator />
			  <MenubarItem inset>Edit...</MenubarItem>
			  <MenubarSeparator />
			  <MenubarItem inset>Add Profile...</MenubarItem>
			</MenubarContent>
		  </MenubarMenu>
		</Menubar>
	)
}