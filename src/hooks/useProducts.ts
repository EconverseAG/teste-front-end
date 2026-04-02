import { useState } from "react";
import type { Product } from "../types/product";

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProducts] = useState<Product | null>(null);

  function openModal(product: Product) {
    setSelectedProducts(product);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedProducts(null);
    setIsOpen(false);
  }

  return { isOpen, selectedProduct, openModal, closeModal };
}
