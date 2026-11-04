import './ProductCategoryTabs.scss';

type ProductCategoryTabsProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

function ProductCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: Readonly<ProductCategoryTabsProps>) {
  return (
    <nav className="product-category-tabs" aria-label="Categorias de produtos">
      <ul className="product-category-tabs__list" role="tablist">
        {categories.map((category) => (
          <li className="product-category-tabs__item" key={category}>
            <button
              className={`product-category-tabs__button ${
                activeCategory === category
                  ? 'product-category-tabs__button--active'
                  : ''
              }`}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProductCategoryTabs;
