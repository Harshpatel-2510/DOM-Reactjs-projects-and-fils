import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="text-5xl mb-5 underline font-bold">
        Product Page..!
      </h1>

      <div className="flex gap-5">
        <Link className="textxl font-semibold underline" to="/Product/Men">Man's Collection</Link>
        <Link className="textxl font-semibold underline" to="/Product/Women">Woman's Collection</Link>
      </div>
    </div>
  );
};

export default Product;
