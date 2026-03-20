import styles from "../Header.module.scss";

const PreHeader = () => {
  return (
    <section className={styles.preHeader}>
      <div className={styles.preHeaderItem}>
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.125 8.95833V4.375C3.125 4.20924 3.19085 4.05027 3.30806 3.93306C3.42527 3.81585 3.58424 3.75 3.75 3.75H16.25C16.4158 3.75 16.5747 3.81585 16.6919 3.93306C16.8092 4.05027 16.875 4.20924 16.875 4.375V8.95833C16.875 15.522 11.3042 17.6966 10.1919 18.0654C10.0675 18.1082 9.93246 18.1082 9.80811 18.0654C8.69578 17.6966 3.125 15.522 3.125 8.95833Z"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <strong>
          Compra <span className={styles.textBlue}>100% segura</span>
        </strong>
      </div>
      <div className={styles.preHeaderItem}>
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1273)">
            <path
              d="M18.75 9.375H13.75V6.25H17.0769C17.2018 6.25 17.3238 6.28743 17.4272 6.35746C17.5307 6.42749 17.6108 6.5269 17.6572 6.64288L18.75 9.375Z"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25 11.25H13.75"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6875 16.875C15.723 16.875 16.5625 16.0355 16.5625 15C16.5625 13.9645 15.723 13.125 14.6875 13.125C13.652 13.125 12.8125 13.9645 12.8125 15C12.8125 16.0355 13.652 16.875 14.6875 16.875Z"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M5.3125 16.875C6.34803 16.875 7.1875 16.0355 7.1875 15C7.1875 13.9645 6.34803 13.125 5.3125 13.125C4.27697 13.125 3.4375 13.9645 3.4375 15C3.4375 16.0355 4.27697 16.875 5.3125 16.875Z"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M12.8125 15H7.1875"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.3762"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.75 13.3762V9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625"
              stroke="#9F9F9F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1273">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <strong>
          <span className={styles.textBlue}>Frete grátis</span> acima de R$ 200
        </strong>
      </div>
      <div className={styles.preHeaderItem}>
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1245 13.125H15.6245"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.37451 13.125H10.6245"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.87451 7.56665H18.1245"
            stroke="#9F9F9F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <strong>
          <span className={styles.textBlue}>Parcele</span> suas compras
        </strong>
      </div>
    </section>
  );
};

export default PreHeader;
