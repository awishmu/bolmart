import { Search, X} from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
    return (
        <div className="mobile-menu-wrapper mt-6 flow-root">
			<div className="mobile-menu-overlay -my-6 devide-y devide-white/10">
				<div className="mobile-menu-container text-white bg-night border-2 max-w-[200px]">
					{/* <!-- Need to ajax load mobile menus -->
						<!-- Search Form --> */}
                                <div className="search-wrapper hs-simple">
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
                                
                                <div className="nav-wrapper mx-2 py-2">
                                    <nav className="99 text-white flex flex-col">
                                        <ul id="menu-main-menu" className="mobile-menu px-4">
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Fruits</Link></li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Vegetable</Link></li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Vegan Meat</Link>
                                                <ul id="megamenu mp-left" className="w-[457px] absolute">
                                                    <li className="menu-item border-2 p-2 mb-2"></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Seafood</Link></li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Dairy</Link></li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Bakery</Link>
                                                <ul id="megamenu mp-left" className="w-[756px] absolte">
                                                    <li className="menu-item border-2 p-2 mb-2"></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Beverages</Link></li>
                                            <li className="menu-item border-2 p-2 mb-2"><Link href="#">Beer &amp; Liquor</Link></li>
                                        </ul>
                                    </nav>			
                                </div>

			    </div>
				    <Link className="mobile-menu-close bg-green-700 rounded-full" href="#" aria-label="Mobile Menu Close" role="button"><X /></Link>
            </div>
        </div>
    )
}