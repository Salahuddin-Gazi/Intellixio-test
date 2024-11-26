"use client";

import React, { useState,
  // useCallback,
  useEffect } from "react";
import { Product } from "@/types";
import { ProductModal } from "@/views/products/productModal/productModal";
import { BackToHome } from "@/components/backToHome/backToHome";
import { ProductList } from "@/views/products/productList/productList";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_DATA } from "@/data/productsData";
import { useRouter, useSearchParams } from "next/navigation";

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    handlePageChange,
  } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });
  // const handleOpenModal = useCallback((product: Product) => {
  //   setSelectedProduct(product);
  // }, []);

  // const handleCloseModal = useCallback(() => {
  //   setSelectedProduct(null);
  // }, []);

  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const productId = searchParams.get("product-id");
    if (productId) {
      const product = PRODUCTS_DATA.find((prd) => prd.id === productId);
      setSelectedProduct(product || null);
    } else {
      setSelectedProduct(null);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    router.push("/products");
  };

  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts}
      // onOpenModal={handleOpenModal}
      />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};
