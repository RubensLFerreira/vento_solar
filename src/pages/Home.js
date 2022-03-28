import styles from './Home.module.css'
//import logo_full_vertical_fundo_branco from '../../src/img/logo_full_vertical_fundo_branco.png'
import LinkButton from '../components/layout/LinkButton'


function Home() {
  return (
    <sectio className={styles.home_container}>
      <h1>Bem-vindo à <span>Vento Solar</span></h1>
      <p>Garantindo um futuro com energia limpa e renovavel</p>
      {/* <img src={logo_full_vertical_fundo_branco} alt="costs" /> */}
      <LinkButton to="/Contato" text="Cadastra-se" />
      
    </sectio>
  )
}

export default Home