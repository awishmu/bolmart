import { Search, X} from "lucide-react";

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
                                            <li className="menu-item border-2 p-2 mb-2"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/fruits/">Fruits</a></li>
                                            <li className="menu-item border-2 p-2 mb-2"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/vegetable/">Vegetable</a></li>
                                            <li id="menu-item-933" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-933"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/vegan-meat/">Vegan Meat</a>
                                                <ul id="megamenu mp-left" className="w-[457px] absolute">
                                                    <li id="menu-item-936" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-936"></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-932"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/seafood/">Seafood</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-931"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/dairy/">Dairy</a></li>
                                            <li id="menu-item-929" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-929"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/bakery/">Bakery</a>
                                                <ul id="megamenu mp-left" className="w-[756px] absolte">
                                                    <li id="menu-item-1193" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1193"></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-930 current-menu-item"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/beverages/">Beverages</a></li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1230"><a href="https://d-themes.com/wordpress/wolmart/demo-29/product-category/beer-liquor/">Beer &amp; Liquor</a></li>
                                        </ul>
                                    </nav>			
                                </div>

			    </div>
				    <a className="mobile-menu-close" href="#" aria-label="Mobile Menu Close" role="button"><X /></a>
            </div>
        </div>
    )
}