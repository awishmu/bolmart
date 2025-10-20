import { ElPopover } from "@/components/shared/el-popover";
import { ElDialog } from "@/components/shared/el-dialog";

export function HeaderSection () {
	
	return (
	<>
	{ /*<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
		<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
	*/}
		<header className="bg-beige text-zinc-800 dark:bg-gray-900">
		  <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
			<div className="flex lg:flex-1">
			  <a href="#" className="-m-1.5 p-1.5">
				<span className="sr-only">Your Company</span>
				<img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
			  </a>
			</div>
			{/* el-popover-group */}
			<ElPopover />
			<div className="hidden lg:flex lg:flex-1 lg:justify-end">
			  <a href="#" className="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
			</div>
			{/* el-dialog */}
			<ElDialog />
		  </nav>
		  
			  

		</header>

	</>
	)
	
}