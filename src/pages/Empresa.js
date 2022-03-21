import styles from '..//pages/Empresa.module.css'

function Empresa() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subDiv}>
      <h1>Sobre nos</h1>
      <p>Esse resumo apresenta um quadro esquemático das categorias dos fenômenos na semiótica de Charles Sanders Peirce. O objetivo deste resumo não é explicar tais categorias ou mesmo a semiótica peirceana, mas sim servir como gabarito para algumas análises menos produndas com base nesse metodologia.</p> 

      <p>1 Categorias universais dos fenômenos
      Primeiridade: Aquilo que é sem referência a nada mais. Qualidade perceptiva ou sensação. Por exemplo, a qualidade absoluta de uma cor, a brancura, a azulidade, sem remeter a uma comparação ou a outros sentimentos. Tal percepção não pode ser pensada, explicada ou afirmada, pois isso a secundarizaria.</p>

      <p>Secundidade: Aquilo que é por causa de um outro. Envolve reação, resposta. Um fenômeno que existe provocado por algo. Corresponde a percepção dos fatos, do fato atual. É a constatação da origem ou do motivo de uma sensação.</p>

      <p>Terceiridade: Aquilo que é em lugar de um outro. É a representação. Uma coisa representando outra. É o pensamento em signos. Diz respeito à percepção de regras, leis, que regem os fenômenos, permitindo generalizar sua compreensão.</p>

      <p>2 Signos
      O Signo é qualquer coisa, de qualquer espécie, que representa uma outra coisa. Essa “outra coisa” é chamada de Objeto. Quando posto no lugar do objeto, o signo produz um efeito interpretativo em uma mente real ou potencial, efeito este que é chamado de Interpretante.</p>

      <p>3.1 Primeira Tricotomia (signo em relação a si mesmo)
      Quali-signo: Qualidade, sensação sem concreta existência. Um exemplo: a percepção das cores.</p>

      <p>Sin-signo: Coisa ou evento que existe atualmente. Um exemplo: qualquer objeto ou evento concreto percebido.</p>

      <p>Legi-signo: Signo que descreve inúmeros objetos. É um signo sobre o qual há uma concordância ou uma convenção, de ordem generalizante, sobre o que e como ele representa.</p>

      <p>3.2 Segunda Tricotomia (signo em relação ao objeto)
      Ícone: Representação pela semelhança. Ex.: desenho de uma flor.</p>

      <p>Índice: Representação pela indicação, pelo rastro. Ex.: fumaça, indicando a presença de fogo.</p>

      <p>Símbolo: Representação convencionada culturalmente, ou hábitos com força de lei. Ex.: Cruz para o Cristianismo.</p>

      <p>3.3 Terceira Tricotomia (signo em relação ao interpretante)
      Rema: Hipótese de sentido. Signo compreendido, mas sem contexto. Não passível de julgamento, que não é nem falso nem verdadeiro. Ex.: todas as palavras sozinhas, sem relação a qualquer outra, exceto “sim” e “não”.</p>

      <p>Dicente: Expressão de idéias passíveis de julgamento. Presente em frases simples e diretas com um sujeito e um predicado, que não envolvem conclusões lógicas. Ex.: (O giz é branco.</p>

      <p>Argumento: São definições precisas, leis matemáticas, previsões acertadas. Presente em constatações envolvendo conclusões maduras.</p>
      </div>
    </div>
  )
}

export default Empresa