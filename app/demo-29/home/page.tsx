import { BannerStaticLeft } from "@/components/features/banner-static-left"
import { BannerStaticRight } from "@/components/features/banner-static-right"
import { DealAvailable } from "@/components/features/deal-available"

export default function Home() {
  return (
	<>
	{/* Banner : banner static, banner slide col */}
		<div>Banner Kiri Static 50%</div>
		<div>Banner Kanan slide col</div>
		<div className="w-full mx-auto flex justify-between gap-2 mb-6">
			<BannerStaticLeft />
			<BannerStaticRight />
		</div>
	{/* Popular this Month, item product */}	
	<div>
		<DealAvailable />
	</div>
	{/* New Arrivals */}	
	
	{/* Diskon item product */}	
	
	{/* Random item product */}	
	
	{/* Categories */}
    </>
  )
}	