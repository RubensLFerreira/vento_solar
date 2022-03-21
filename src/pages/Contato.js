

import styles from './Contato.module.css'

function Contato() {
  return (
    
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
      <h1>Cadastre-se</h1>
      <form>
        <label>
          Nome
          <input  />
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
          <input  />
          <span></span>
        </label>

        <button type="submit">Cadastrar-se</button>
      </form>
      </div>
    </div>
  )
}


export default Contato