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
    <div className="productCatMenu">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index}>
            {/* Main Category */}
            <div
              className="category"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link>{category.name}</Link>
              {/* Sub Categories */}
              {category.showSubCat && (
                <ul className="sub-categories">
                  {category.name === "Electronics" && (
                    <>
                      <li>
                        <Link>Laptops</Link>
                      </li>
                      <li>
                        <Link>Smartphones</Link>
                      </li>

                      <li>
                        <Link>Tablets</Link>
                      </li>
                    </>
                  )}
                  {category.name === "Clothes" && (
                    <>
                      <li>
                        <Link>Men's Clothing</Link>
                      </li>
                      <li>
                        <Link>Women's Clothing</Link>
                      </li>
                      <li>
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
