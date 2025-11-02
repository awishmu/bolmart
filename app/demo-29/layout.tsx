import "@/styles/globals.css"
import { HeaderSection } from "@/components/shared/header-section";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
		<HeaderSection />
			{children}
	  
	  </body>
    </html>
  )
}