import { useCallback, useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';
import './ProductModal.scss';

const QUANTIDADE_MINIMA = 1;

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantidade, setQuantidade] = useState<number>(QUANTIDADE_MINIMA);
  const [confirmado, setConfirmado] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const alterarQuantidade = useCallback((valor: number) => {
    setQuantidade((atual) => Math.max(QUANTIDADE_MINIMA, atual + valor));
  }, []);

  // Foco no botão de fechar ao abrir, Esc para fechar, trava da rolagem do fundo
  // e focus trap para não deixar o Tab escapar do diálogo.
  useEffect(() => {
    closeButtonRef.current?.focus();

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focaveis = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])',
      );

      if (focaveis.length === 0) {
        return;
      }

      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];

      if (event.shiftKey && document.activeElement === primeiro) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primeiro.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal-info">
            {/* Bloco Superior: Título e Preço (Gap: 18px) */}
            <div className="info-header-block">
              <h2 className="modal-title" id="modal-title">
                {product.productName}
              </h2>
              <p className="modal-price">{formatCurrency(product.price)}</p>
            </div>

            {/* Bloco do Meio: Descrição e Link (Gap: 12px) */}
            <div className="info-details-block">
              <p className="modal-description">{product.descriptionShort}</p>
              {/* O catálogo não expõe uma página de detalhes: o item do layout é
                  renderizado como texto, e não como um link que não leva a lugar. */}
              <span className="modal-link-more">Veja mais detalhes do produto &gt;</span>
            </div>

            {/* Bloco Inferior: Ações (Contador e Botão) */}
            <div className="modal-actions-row">
              <div className="quantity-selector">
                <button
                  type="button"
                  className="btn-qt"
                  onClick={() => alterarQuantidade(-1)}
                  disabled={quantidade <= QUANTIDADE_MINIMA}
                  aria-label="Diminuir quantidade"
                >
                  <span className="vector-minus" />
                </button>

                <span
                  className="qt-number"
                  aria-live="polite"
                  aria-label={`Quantidade: ${quantidade}`}
                >
                  {quantidade.toString().padStart(2, '0')}
                </span>

                <button
                  type="button"
                  className="btn-qt"
                  onClick={() => alterarQuantidade(1)}
                  aria-label="Aumentar quantidade"
                >
                  <span className="vector-plus" />
                </button>
              </div>

              <button
                type="button"
                className="btn-comprar-modal"
                onClick={() => setConfirmado(true)}
              >
                {confirmado ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
              </button>
            </div>

            {confirmado ? (
              <p className="modal-feedback" role="status">
                {quantidade} {quantidade === 1 ? 'item adicionado' : 'itens adicionados'} ao carrinho.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
