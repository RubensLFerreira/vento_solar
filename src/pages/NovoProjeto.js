// import { useHistory } from 'react-router-dom' ///cjs/react-router-dom.min'
// import ProjetoForm from '../components/project/ProjetoForm'
import styles from "./NovoProjeto.module.css";
import LinkButton from "../components/layout/LinkButton";
import ambiente2 from "../img/ambiente2.png";

function NovoProjeto() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
        <img src={ambiente2} alt="ambiente" />
        <LinkButton to="/Empresa" text="Voltar" />
      </div>
    </div>
  );
}

export default NovoProjeto;
