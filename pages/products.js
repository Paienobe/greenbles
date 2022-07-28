import React from "react";
import { popularProducts, allProducts } from "../data/home";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Products() {
  return (
    <div>
      <div className=" bg-[#000] h-[40px]"></div>
      <div className="w-full bg-hero-image bg-no-repeat bg-center  h-[400px] flex justify-center items-center">
        <div>
          {" "}
          <h1 className="text-white text-4xl font-bold">Products </h1>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-10">
        <div className="drop-shadow bg-white bless-border px-5 py-10">
          <div className="flex justify-between">
            <div>
              {" "}
              <h2 className="text-sm sm:text-base font-semibold uppercase">
                POPULAR PRODUCTS
              </h2>
            </div>
            <div className="flex gap-4">
              <div>
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="#AFAFAF" />
                  <path
                    d="M11.6875 6.625L8.3125 10L11.6875 13.375"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="#410636" />
                  <path
                    d="M8.3125 6.625L11.6875 10L8.3125 13.375"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-5 flex space-x-5 lg:space-x-0 w-full flex-nowrap overflow-x-auto overflow-y-hidden lg:grid lg:overflow-hidden lg:grid-cols-4 lg:gap-y-14 lg:gap-x-10">
            {popularProducts.map((product) => (
              <div key={product.id} className="basis-1/4 product">
                <img src={product.img} alt="shop item" className="w-full" />
                <p className="mt-5 text-sm font-bold text-center md:text-base">
                  {product.name}{" "}
                </p>
                <div className="mb-5 text-center">
                  <span className="text-sm font-semibold text-shopazBlack">
                    {" "}
                    N{product.price}
                  </span>
                </div>

                <button className="px-5 py-1 transition border rounded-lg rounded-bl-none border-tahiti-green text-shopazPurple hover:text-white md:py-2.5 lg:py-2 hover:bg-shopazPurple lg:w-full">
                  <span className="text-xs font-bold uppercase lg:text-sm">
                    Add to Cart
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-20">
        <div className="drop-shadow bg-white px-5 py-10 bless-border">
          <div className="flex justify-center">
            <div className="flex gap-2">
              <button className="btn active"> ALL</button>
              <button className="btn"> Vegetables</button>
              <button className="btn"> Fruit</button>
              <button className="btn"> Salad</button>
              <button className="btn"> Carrot</button>
              <button className="btn"> Tomato</button>
            </div>
          </div>

          <div>
            <div>
              <div className=" pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {allProducts.map((products) => (
                  <div key={products.id} className="">
                    <img src={products.img} alt="shop items" />
                    <div>
                      <p className="mt-5 text-sm font-bold text-center md:text-base">
                        {products.name}{" "}
                      </p>{" "}
                    </div>
                    <div className="mb-5 text-center">
                      <span className="text-sm font-semibold text-shopazBlack">
                        {" "}
                        N{products.price}
                      </span>
                    </div>
                    <button className="px-5 py-1 transition border rounded-lg rounded-bl-none border-tahiti-green text-shopazPurple hover:text-white md:py-2.5 lg:py-2 hover:bg-shopazPurple lg:w-full">
                      <span className="text-xs font-bold uppercase lg:text-sm">
                        Add to Cart
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="block-end">
              <ul>
                <li className="direction"> &#60;</li>
                <li>
                  {" "}
                  <span> 1</span>{" "}
                </li>
                <li>
                  {" "}
                  <span> 2</span>{" "}
                </li>
                <li>
                  {" "}
                  <span> 3</span>{" "}
                </li>
                <li>
                  {" "}
                  <span> 4</span>{" "}
                </li>
                <li>
                  {" "}
                  <span> 5</span>{" "}
                </li>
                <li className="direction">&#62;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
