import React from "react";
import { Product } from "@/types";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
  // onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  // onOpenModal,
}) => (
  <div>
    {products.map((product) => (
      <div key={product.id} className="flex border p-2 justify-between">
        <div className="flex">
          <div>{product.id}</div>. {product.name}
        </div>
        {/* <button onClick={() => onOpenModal(product)}>Details</button> */}
        <Link href={`/products?product-id=${product.id}`}>Details</Link>
      </div>
    ))}
  </div>
);
