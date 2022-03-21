import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/vento_solar_logo2.png'


function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"><img src={logo} alt="costs" /></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
          <li className={styles.item}><Link to="/projetos">Serviços</Link></li>
          <li className={styles.item}><Link to="/contato">Contatos</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar