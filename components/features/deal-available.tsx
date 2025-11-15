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
					<div className="w-[14rem] border-2 m-2 p-2 h-[20rem]">
						Item 1
					</div>
					<div className="w-[14rem] border-2 m-2 p-2 h-[20rem] ">
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