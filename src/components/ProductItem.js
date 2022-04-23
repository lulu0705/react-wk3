export default function ProductItem( {product}) {
    return (
        <section class="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4">
        <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
                <img class="w-100"
                    src={product.image}
                    alt={product.name} />
            </a>

            <div class="p-4">
            <h6 class="text-white opacity-2 mb-1">{product.category}</h6>
            <h5 class="text-white mb-3">{product.name}</h5>
            <p class="text-white opacity-3 mb-3">{product.description}</p>

            <div class="d-flex justify-content-between flex-wrap ">
                <a href="/" class="text-decoration-none text-color-1">
                    See More
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <span
                    class="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                    USD {product.price}.00
                </span>
            </div>

            </div>
        </div>
        </section>
    );
}