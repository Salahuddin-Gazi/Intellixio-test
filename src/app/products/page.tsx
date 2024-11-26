import { Suspense } from "react";
import { Products } from "@/views/products";

export default function ProductsRoot() {
  return <Suspense><Products /></Suspense>;
}
