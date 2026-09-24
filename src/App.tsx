import { useEffect, useMemo, useRef, useState } from 'react'
import './App.scss'

const PRODUCTS_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const LOCAL_PRODUCTS_URL = '/products.json'
const WHATSAPP_NUMBER = '5583999999999'

type Product = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

type ProductResponse = { products: Product[] }

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Econverse, página inicial">
        <span className="brand-mark">e</span>
        <span>econverse</span>
      </a>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegação principal">
        <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
    </header>
  )
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <article className="product-card" role="button" tabIndex={0} onClick={() => onSelect(product)} onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && onSelect(product)}>
      <button type="button" className="card-action" aria-label={`Ver detalhes de ${product.productName}`} onClick={(event) => { event.stopPropagation(); onSelect(product) }}>
        <span aria-hidden="true">↗</span>
      </button>
      <div className="product-image-wrap">
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>
      <div className="product-info">
        <p className="product-kicker">Tecnologia</p>
        <h2>{product.productName}</h2>
        <p className="product-description">{product.descriptionShort}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>
    </article>
  )
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeButtonRef} type="button" className="close-button" onClick={onClose} aria-label="Fechar detalhes">×</button>
        <div className="modal-image"><img src={product.photo} alt="" /></div>
        <div className="modal-content">
          <p className="product-kicker">Detalhes do produto</p>
          <h2 id="modal-title">{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <div className="modal-price">{formatPrice(product.price)}</div>
          <button type="button" className="primary-button" onClick={onClose}>Continuar navegando</button>
        </div>
      </section>
    </div>
  )
}

function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da Econverse.')}`

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={`whatsapp-chat ${isOpen ? 'is-open' : ''}`}>
      {isOpen && (
        <section className="whatsapp-panel" role="dialog" aria-labelledby="whatsapp-title">
          <button type="button" className="whatsapp-close" onClick={() => setIsOpen(false)} aria-label="Fechar chat">×</button>
          <div className="whatsapp-panel-heading">
            <span className="whatsapp-symbol" aria-hidden="true">wa</span>
            <div><strong id="whatsapp-title">Fale com a Econverse</strong><span>Estamos por aqui para ajudar</span></div>
          </div>
          <p>Oi! Quer uma ajuda para encontrar a tecnologia ideal para você?</p>
          <a className="whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer">Abrir conversa <span aria-hidden="true">↗</span></a>
        </section>
      )}
      <button type="button" className="whatsapp-trigger" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? 'Fechar chat do WhatsApp' : 'Abrir chat do WhatsApp'}>
        <span className="whatsapp-symbol" aria-hidden="true">wa</span>
        <span className="chat-pulse" aria-hidden="true" />
      </button>
    </div>
  )
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar os produtos.')
        return response.json() as Promise<ProductResponse>
      })
      .catch(() => fetch(LOCAL_PRODUCTS_URL).then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar o catálogo local.')
        return response.json() as Promise<ProductResponse>
      }))
      .then((data) => setProducts(data.products))
      .catch(() => setError('Não conseguimos carregar a vitrine agora. Tente novamente em instantes.'))
      .finally(() => setLoading(false))
  }, [])

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => product.productName.toLowerCase().includes(search.toLowerCase()))
    return [...filtered].sort((a, b) => sort === 'price-asc' ? a.price - b.price : sort === 'price-desc' ? b.price - a.price : 0)
  }, [products, search, sort])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero-section" id="produtos">
          <p className="eyebrow">Coleção 2024 / tecnologia</p>
          <h1>Objetos que<br /><em>movem</em> ideias.</h1>
          <p className="hero-copy">Uma curadoria de tecnologia para deixar o seu dia mais simples, conectado e extraordinário.</p>
        </section>
        <section className="manifesto" id="sobre" aria-label="Sobre a Econverse">
          <p className="eyebrow">O jeito Econverse</p>
          <p className="manifesto-copy">Menos ruído. Mais intenção. Selecionamos tecnologia que faz sentido para a vida real.</p>
          <span className="manifesto-index">01 / 03</span>
        </section>
        <section className="catalog" aria-labelledby="catalog-title">
          <div className="catalog-heading"><div><p className="eyebrow">Seleção da semana</p><h2 id="catalog-title">Vitrine de produtos</h2></div><span className="count-label">{visibleProducts.length} itens</span></div>
          <div className="catalog-tools">
            <label className="search-field"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar produto" aria-label="Buscar produto" /><button type="button" className="clear-search" aria-label="Limpar busca" onClick={() => setSearch('')} hidden={!search}>×</button></label>
            <label className="sort-field"><span>Ordenar por</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Ordenar produtos"><option value="featured">Mais relevantes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option></select></label>
          </div>
          {loading && <p className="state-message">Carregando produtos...</p>}
          {error && <p className="state-message error-message">{error}</p>}
          {!loading && !error && <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={`${product.productName}-${product.price}`} product={product} onSelect={setSelectedProduct} />)}</div>}
          {!loading && !error && visibleProducts.length === 0 && <div className="state-message"><p>Nenhum produto encontrado.</p><button type="button" className="text-button" onClick={() => setSearch('')}>Limpar busca</button></div>}
        </section>
      </main>
      <footer id="contato"><span>econverse</span><span>tecnologia para viver melhor</span></footer>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      <WhatsAppChat />
    </div>
  )
}

export default App
