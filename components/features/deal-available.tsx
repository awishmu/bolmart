import * as React from "react"
import Link from "next/link"
import Image from "next/image"


export function DealAvailable () { 
// width 70%
	return (
		<div className="w-full flex flex-start justify-between">
			<div className="w-full md:w-[25%] h-[24rem] border-2 bg-yellow-500">Banner Light Promo</div>
			<div className="w-full flex flex-col md:w-[75%] border-2 border-green-800">
				<h2>Deal of the month products</h2>
				<div className="flex gap-2">
					<div className="relative w-[14rem] border-2 m-2 p-2 bg-purple-200">
						Product Detail 1
						<div className="relative w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
							<div className="absolute flex justify-end right-0 w-full h-[228px] p-2">
								<Image 
									src="/banners/raw-chicken-meat.png" alt="" 
									fill 
									style={{ objectFit: 'contain', borderRadius: '10px', objectPosition: 'right'}}
								/>
							</div>
							<div className="absolute top-[20%] left-[10%] flex flex-col gap-3 bg-rose-300/30">
								<div><h3 className="text-xl font-bold">Apple Fitter</h3></div>
								<div><p className="text-lg">Category : Buah</p></div>
								<div><p className="text-lg">Price && Start</p></div>
								<div><p className="text-lg">Available & Sold</p></div>
								<div className="px-4 py-2 text-white bg-teal-500 rounded-lg font-bold w-[8rem] text-center"><Link href="#"><button>Show Now</button></Link></div>
							</div>
						</div>
								
					</div>
					<div className="w-[14rem] border-2 m-2 p-2 h-[20rem] bg-indigo-200 ">
						Item 2
					</div>
					<div className="w-[14rem] border-2 m-2 p-2 h-[20rem] ">
						Item 3
					</div>
					<div className="w-[14rem] border-2 m-2 p-2 h-[20rem] ">
						Item 4
					</div>
				
				</div>
			</div>
		</div>
	)
}