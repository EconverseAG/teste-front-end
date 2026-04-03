import "./style.scss";

type TabCategory =
  | "Celular"
  | "Acessórios"
  | "Tablets"
  | "Notebooks"
  | "TVs"
  | "Ver todos";

interface ProductTabsProps {
  activeTab: string;
}

export const ProductTabs = ({ activeTab }: ProductTabsProps) => {
  const tabs: TabCategory[] = [
    "Celular",
    "Acessórios",
    "Tablets",
    "Notebooks",
    "TVs",
    "Ver todos",
  ];

  return (
    <nav className="product-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`product-tabs__item ${tab.toUpperCase() === activeTab.toUpperCase() ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};
