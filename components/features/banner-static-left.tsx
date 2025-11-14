import * as React from "react"
import Link from "next/link"
import Image from "next/image"


export function BannerStaticLeft () { 
// width 70%
	return (
		<div className="w-full lg:w-[70%]">
			<div className="w-full bg-yellow-300 w-full h-64 border-2">
				<div className="relative w-full h-full flex justify-end items-center mr-0 my-4 py-2">
					<div className="absolute top-0 right-0 bg-yellow-100 text-right">
						<Image 
							src="/Native_Chicken_Rustic_Studio_Shot.png" alt="" 
							fill 
							style={{ objectFit: 'contain', borderRadius: '10px', right: '1px', left: 'auto'}}
						/>
					</div>
				</div>
				<div className="text-white font-bold">
					<div><h1>Best Chicken Meat</h1></div>
					<div><h3>This Weekend Only</h3></div>
				</div>				
			</div>
		</div>
	)
}