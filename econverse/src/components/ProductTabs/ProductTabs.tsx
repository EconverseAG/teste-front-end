import './ProductTabs.scss';

interface ProductTabsProps {
  tabs: string[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
  label: string;
}

export function ProductTabs({ tabs, activeTab, onChangeTab, label }: ProductTabsProps) {
  return (
    <div className="product-tabs" role="tablist" aria-label={label}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`product-tabs__tab ${isActive ? 'product-tabs__tab--active' : ''}`}
            onClick={() => onChangeTab(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
