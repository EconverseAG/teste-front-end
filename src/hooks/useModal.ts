import { useState } from "react";
import type { Product } from "../types/product";

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProducts, setSelectedProduct] = useState<Product | null>(null);

  function openModal(product: Product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedProduct(null);
    setIsOpen(false);
  }

  return { isOpen, selectedProducts, openModal, closeModal };
}
