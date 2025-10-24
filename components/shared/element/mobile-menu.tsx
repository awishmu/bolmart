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
			<DialogContent className="bg-night/60 sm:max-w-[425px] h-screen oveflow-auto">
		
				<DialogHeader>
					<DialogTitle></DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
					<Menubar className="flex flex-col border-none bg-transparent">
					  <MenubarMenu>
						<MenubarContent>
							<MenubarItem className="bg-night text-white w-full mx-auto my-1 py-2">Food</MenubarItem>
						</MenubarContent>
						<MenubarTrigger className="bg-night text-white w-full mx-auto my-1 py-2">File</MenubarTrigger>
						<MenubarContent>
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
						<MenubarTrigger className="bg-night text-white w-full mx-auto my-1 py-2">Edit</MenubarTrigger>
						<MenubarContent>
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
						<MenubarTrigger className="bg-night text-white w-full mx-auto my-1 py-2">View</MenubarTrigger>
						<MenubarContent>
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
						<MenubarTrigger className="bg-night text-white w-full mx-auto my-1 py-2">Profiles</MenubarTrigger>
						<MenubarContent>
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
		
			</DialogContent>
		</Dialog>

    </>
	)
}
