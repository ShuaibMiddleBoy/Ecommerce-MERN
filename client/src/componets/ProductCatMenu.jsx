import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCatMenu = () => {
  const [categories, setCategories] = useState([
    { name: "Electronics", showSubCat: false },
    { name: "Clothes", showSubCat: false },
    { name: "Beauty & Cosmetics", showSubCat: false },
  ]);

  const handleMouseEnter = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = true;
    setCategories(updatedCategories);
  };

  const handleMouseLeave = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = false;
    setCategories(updatedCategories);
  };

  return (
    <div className="productCatMenu w-[25%] m-[20px] rounded-md bg-white">
      <h2 className="bg-[#ff5733] text-white rounded-[3px_3px_0_0] p-[10px] tracking-wide font-bold uppercase">
        Categories
      </h2>
      <div className="categories flex flex-col p-[10px] gap-[5px]">
        {categories.map((category, index) => (
          <div key={index}>
            {/* Main Category */}
            <div
              className="category inline-block relative text-[#54595f]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link className="transition-all duration-1000 ease-in-out hover:color-[#fc4a22]">
                {category.name}
              </Link>
              {/* Sub Categories */}
              {category.showSubCat && (
                <ul className="sub-categories bg-white absolute color-[#54595f] left-[40px] z-10 border-solid divide-[#ddd] border-[1px]">
                  {category.name === "Electronics" && (
                    <>
                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Laptops</Link>
                      </li>
                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Smartphones</Link>
                      </li>

                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Tablets</Link>
                      </li>
                    </>
                  )}
                  {category.name === "Clothes" && (
                    <>
                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Men's Clothing</Link>
                      </li>
                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Women's Clothing</Link>
                      </li>
                      <li className="p-[2px_10px] w-[200px]">
                        <Link>Kid's Clothing</Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductCatMenu);
