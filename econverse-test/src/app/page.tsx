import { ProductShowcase } from "@/src/features/products";
import { Footer } from "@/src/shared/components/Footer/Footer";
import { Header } from "@/src/shared/components/Header/Header";
import styles from "./page.module.scss";

const categories = [
  { label: "Tecnologia", image: "/figma-assets/category-tech.png", active: true },
  { label: "Supermercado", image: "/figma-assets/category-market.png" },
  { label: "Bebidas", image: "/figma-assets/category-drinks.png" },
  { label: "Ferramentas", image: "/figma-assets/category-tools.png" },
  { label: "Saúde", image: "/figma-assets/category-health.png" },
  { label: "Esportes e Fitness", image: "/figma-assets/category-sports.png" },
  { label: "Moda", image: "/figma-assets/category-fashion.png" },
];

const tabs = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Black Friday Econverse</p>
            <h1 id="hero-title">Venha conhecer nossas promoções</h1>
            <p>
              <strong>50% Off</strong> nos produtos selecionados para renovar seu setup.
            </p>
            <a href="#produtos" className={styles.heroButton}>
              Ver produto
            </a>
          </div>
        </section>

        <section className={styles.categories} aria-label="Categorias">
          {categories.map((category) => (
            <article
              className={`${styles.category} ${category.active ? styles.activeCategory : ""}`}
              key={category.label}
            >
              <span aria-hidden="true">
                <img alt="" src={category.image} />
              </span>
              <h2>{category.label}</h2>
            </article>
          ))}
        </section>

        <ProductShowcase tabs={tabs} />

        <section className={styles.partnerGrid} aria-label="Parceiros Econverse">
          {[1, 2].map((item) => (
            <article className={styles.partnerCard} key={item}>
              <div>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#produtos">Confira</a>
              </div>
            </article>
          ))}
        </section>

        <ProductShowcase title="Produtos relacionados" compact />

        <section className={styles.partnerGrid} aria-label="Parceiros em destaque">
          {[1, 2].map((item) => (
            <article className={styles.partnerCard} key={`second-${item}`}>
              <div>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#produtos">Confira</a>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.brands} aria-labelledby="brands-title">
          <h2 id="brands-title">Navegue por marcas</h2>
          <div>
            {[1, 2, 3, 4, 5].map((brand) => (
              <article className={styles.brand} key={brand} aria-label="Econverse">
                <img alt="" src="/figma-assets/logo.svg" />
              </article>
            ))}
          </div>
        </section>

        <ProductShowcase title="Produtos relacionados" compact />
      </main>
      <Footer />
    </>
  );
}
