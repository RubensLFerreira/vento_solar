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
              Energia solar é um termo que se refere à energia proveniente da
              luz e do calor do Sol. É utilizada por meio de diferentes
              tecnologias em constante evolução, como o aquecimento solar, a
              energia solar fotovoltaica, a energia heliotérmica, a arquitetura
              solar e a fotossíntese artificial.
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
              Energia eólica é a transformação da energia do vento em energia
              útil, tal como na utilização de aerogeradores para produzir
              eletricidade, moinhos de vento para produzir energia mecânica ou
              velas para impulsionar veleiros.
            </p>
          </div>
        </div>

        <div className={styles.divConteiner}>
          <div>
            <h2>Terceiridade</h2>

            <p>
              A terceirização de atividade-fim firmada na Lei 11.442, de 2007 e
              a exigência de qualidade cada vez maior nos serviços das
              distribuidoras de energia, por parte dos consumidores e da Agência
              Nacional de Energia Elétrica (Aneel), tem tornado comum o uso de
              empresas terceirizadas na prestação dos serviços essenciais da
              operação das concessionárias.
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
