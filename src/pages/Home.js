import styles from './Home.module.css'
// import savings2 from '../../src/img/savings2.png'
import LinkButton from '../components/layout/LinkButton'


function Home() {
  return (
    <sectio className={styles.home_container}>
      <h1>Bem-vindo a <span>Vento Solar</span></h1>
      <p>Garantindo um futuro com energia limpa e renovavel!</p>
      <LinkButton to="/Projetos" text="Serviços" />
      {/* <img src={savings2} alt="costs" /> */}
    </sectio>
  )
}

export default Home