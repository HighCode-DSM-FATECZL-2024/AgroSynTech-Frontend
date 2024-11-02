import CardMissao from "../../components/cardMissao";
import "./index.css";

const CardsMissao = () => {
   return (
      <section className="cardmissao-section">
         <div className="cardmissao-template">
            <div className="card-missao-template-texto">
               <p>
                  Explore nosso <span id="card-missao-verde">TRABALHO</span> e{" "}
                  <span>IMPACTO</span>
               </p>
               <h1>Missão da AgroSyntech</h1>
            </div>
            <div className="card-missao-cards">
               <CardMissao titulo="Auxiliar" descricao="Auxiliar na Agricultura Sintrópica apoia a implementação e gestão sustentável."/>
               <CardMissao titulo="Conscientizar" 
               descricao="Conscientizar sobre Agricultura Sintrópica fomenta práticas agrícolas sustentáveis."/>
               <CardMissao titulo="Educar" 
               descricao="Educar em Agricultura Sintrópica promove práticas sustentáveis e restauração ambiental." />
            </div>
         </div>
      </section>
   );
};

export default CardsMissao;
