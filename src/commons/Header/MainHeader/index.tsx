import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.png";
import styles from "../Header.module.scss";

const MainHeader = () => {
  const [term, setTerm] = useState<string>("");
  const [openMinicart, setOpenMinicart] = useState<boolean>(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchProduct({ term });
    }
  };

  const searchProduct = ({ term }: { term: string }) => {
    // Função pesquisar
    alert(`Pesquisar: ${term}`);
  };

  return (
    <div className={styles.mainHeader}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo Econverse"
            title="Logo Econverse"
            width={139}
            height={41.3}
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="O que você está buscando?"
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={() => searchProduct({ term })}
          aria-label={`Procurar por ${term}`}
        >
          <svg
            aria-hidden
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1316)">
              <path
                d="M12.6875 21.875C17.7616 21.875 21.875 17.7616 21.875 12.6875C21.875 7.61338 17.7616 3.5 12.6875 3.5C7.61338 3.5 3.5 7.61338 3.5 12.6875C3.5 17.7616 7.61338 21.875 12.6875 21.875Z"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.1837 19.1843L24.4994 24.5"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1316">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className={styles.profile}>
        <Link to="/" aria-label="Meus pedidos">
          <svg
            aria-hidden
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0896 0.100342H2.67065L2.53979 0.111084C2.28135 0.155825 2.04897 0.332238 1.93628 0.569092L1.89038 0.692139V0.693115L0.125732 7.40991L0.124756 7.41089C0.108012 7.47647 0.100211 7.54437 0.100342 7.61206V23.4939C0.100386 23.9187 0.481197 24.2995 0.906006 24.2996H23.4939C23.9187 24.2995 24.2995 23.9187 24.2996 23.4939V15.0232C24.2994 14.5985 23.9186 14.2176 23.4939 14.2175H14.0642V12.5525C14.0673 12.1641 13.7564 11.8024 13.3718 11.7478H13.3699C13.1827 11.7247 12.9888 11.7698 12.8308 11.8728L8.948 14.3435C8.71328 14.4929 8.60237 14.7634 8.60229 15.0232C8.60229 15.2831 8.7132 15.5544 8.948 15.7039L12.8298 18.1736L12.8308 18.1746C13.0814 18.3315 13.391 18.2988 13.6306 18.1667C13.8702 18.0347 14.0629 17.7905 14.0642 17.4949V15.8289H22.6882V22.6882H1.71167V8.41772H22.6882V11.4929L22.6912 11.572C22.7296 11.9681 23.0918 12.3102 23.4939 12.3103C23.9225 12.3103 24.3054 11.9215 24.2996 11.4929V7.61108C24.2991 7.51695 24.2825 7.42299 24.2498 7.33472L21.7791 0.61792V0.616943C21.6721 0.335667 21.398 0.127752 21.0984 0.100342L21.0896 0.0993652V0.100342ZM12.4529 16.032L10.8757 15.0232L12.4529 14.0144V16.032ZM11.7468 6.80542H1.95093L3.28784 1.71167H11.7468V6.80542ZM22.3357 6.80542H13.3591V1.71167H20.4578L22.3357 6.80542Z"
              fill="#9F9F9F"
              stroke="#9F9F9F"
              strokeWidth="0.2"
            />
          </svg>
        </Link>
        <Link to="/" aria-label="Produtos favoritos">
          <svg
            aria-hidden
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1268)">
              <path
                d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1268">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link to="/" aria-label="Minha conta">
          <svg
            aria-hidden
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button
          aria-label={openMinicart ? "Fechar carrinho" : "Abrir carrinho"}
          aria-expanded={openMinicart}
          aria-controls="ID DO CARRINHO"
          onClick={() => setOpenMinicart((prev) => !prev)}
        >
          <svg
            aria-hidden
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1261)">
              <path
                d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1261">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
