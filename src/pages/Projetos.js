import styles from './Projetos.module.css'

import solar from '../img/solar.jpg'
import eolica from '../img/eolica.jpg'
import terceiridade  from '../img/terceiridade.jpg'

function Projetos() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>

      <h1>Serviços</h1>
      <p>Serviço ofertados</p>


      <div className={styles.divConteiner}>
        <div >Energia solar</div>
        <div ><img src={solar} alt="solar" /></div>
      </div>

      <div className={styles.divConteiner}>
        <div ><img src={eolica} alt="eolica" /></div>
        <div >Energia eólica</div>
      </div>

      <div className={styles.divConteiner}>
        <div>Terceiridade</div>
        <div ><img src={terceiridade} alt="terceiridade" /></div>
      </div>
      </div>
    </div>
  )
}

export default Projetos