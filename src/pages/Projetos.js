import styles from "./Projetos.module.css";

import solar from "../img/solar.jpg";
import eolica from "../img/eolica.jpg";
import terceiridade from "../img/terceiridade.jpg";

function Projetos() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
        <h1>Serviços</h1>

        <div className={styles.divConteiner}>
          <div>
            <h2>Energia solar</h2>
            <p>
              Oferecemos equipamentos, serviços e produtos para pessoas e
              empresas que desejam ter um melhor consumo de energia e pagando um
              valor acessível. A nossa empresa conta com profissionais
              especializados em instalação de painéis solares, manutenção e
              apoio ao cliente 24h.
            </p>
          </div>
          <div>
            <img src={solar} alt="solar" />
          </div>
        </div>

        <div className={styles.divConteiner}>
          <div>
            <img src={eolica} alt="eolica" />
          </div>
          <div>
            <h2>Energia eólica</h2>
            <p>
              A Vento Solar também conta com o serviços de prêmios para mega
              empresas que necessitam de um grande poder de energia para suprir
              maquinários pesados. A Vento Solar conta com o que a demais
              tecnológico no mercado, e tecnologia de ponta para um melhor
              proveito de energia, livre de desperdícios ou qualquer impacto
              ambiental.
            </p>
          </div>
        </div>

        <div className={styles.divConteiner}>
          <div>
            <h2>Terceiridade</h2>

            <p>
              A Vento Solar conta com suporte 24h por dia para clientes e
              empresas parceiras, com profissionais capacitados e atendimento
              online. Oferecemos desde de planejamento básico, supervisões,
              capacitação até aplicações mais específicas e complexas.
              Atualmente somos líderes em satisfação ao cliente com mais de 5
              mil clientes ativos em todo o país.
            </p>
          </div>
          <div>
            <img src={terceiridade} alt="terceiridade" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
