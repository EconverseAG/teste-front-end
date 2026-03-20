
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <table className={styles.filter}>
      <tbody>
        <tr>
          <td>Celular</td>
          <td>Acessórios</td>
          <td>Tablets</td>
          <td>notebooks</td>
          <td>Tvs</td>
          <td>Ver todos</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Filters;
