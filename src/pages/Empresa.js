import styles from "..//pages/Empresa.module.css";
import mapa from "../img/mapa.png";
// import LinkButton from '../components/layout/LinkButton'

function Empresa() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
        <h1>Sobre nos</h1>
        <div className={styles.sectionDiv}>
          <p>
            A empresa <b>Vento Solar</b> surgiu há 10 anos atrás na cidade de
            Cedro com o objetivo de transformar a vida dos nordestinos,
            proporcionando energia acessível e limpa para as famílias carentes
            das zonas rurais. E desde de então a empresa vem se empenhando em
            transformar esse objetivo em realidade através do comprometimento
            com seus clientes e parceiros.
          </p>

          <p>
            A Vento Solar vem se destacando Nacionalmente e internacionalmente
            pela metodologia de trabalho, execução dos planos de projetos e
            pelas parcerias com outras empresas no ramo de tecnologias e
            sustentabilidade.
          </p>

          <p>
            Desde de 2001 já são mais de <b>50 prêmios</b> de melhor empresa, melhor
            equipe, melhores resultados, entre outros. Atualmente a Vento Solar
            está concorrendo pelo título de melhor empresa Nordestina em um
            evento idealizado pela <b>Rede Globo</b> e demais mídias de
            telecomunicação, e na categoria Projetos Sustentáveis idealizado
            pela <i>CIPS</i> (Convenção Internacional de Projetos Sustentáveis).
          </p>
        </div>
        <div className={styles.sectionDiv}>
          <img src={mapa} alt="mapa" />
        </div>
        {/* <LinkButton to="/NovoProjeto" text="Projeto sociais" /> */}
      </div>
    </div>
  );
}

export default Empresa;
