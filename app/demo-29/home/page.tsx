import { BannerStaticLeft } from "@/components/features/banner-static-left"
import { BannerStaticRight } from "@/components/features/banner-static-right"

export default function Home() {
  return (
	<>
	{/* Banner : banner static, banner slide col */}
		<div>Banner Kiri Static 50%</div>
		<div>Banner Kanan slide col</div>
		<div className="w-full mx-auto flex justify-between gap-2 border-2 border-zinc-900 bg-sky-200">
			<BannerStaticLeft />
			<BannerStaticRight />
		</div>
	{/* Popular this Month, item product */}	
	
	{/* New Arrivals */}	
	
	{/* Diskon item product */}	
	
	{/* Random item product */}	
	
	{/* Categories */}
    </>
  )
}	