import './ProductDetailsButton.scss';

type ProductDetailsButtonProps = {
  onClick: () => void;
};

function ProductDetailsButton({
  onClick,
}: Readonly<ProductDetailsButtonProps>) {
  return (
    <button className="product-details-button" type="button" onClick={onClick}>
      Veja mais detalhes do produto
      <span aria-hidden="true">&gt;</span>
    </button>
  );
}

export default ProductDetailsButton;
