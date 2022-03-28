import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
      <h1>Cadastre-se</h1>
      <div className={styles.divForm}>
          <form>
            <label>
              Nome
              <input />
              <span></span>
            </label>
 
            <label>
              Email
              <input />
              <span></span>
            </label>
 
            <label>
              Senha
              <input />
              <span></span>
            </label>
 
            <label>
              Confirmar Senha
              <input />
              <span></span>
            </label>
 
            <button type="submit">Cadastre-se</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
