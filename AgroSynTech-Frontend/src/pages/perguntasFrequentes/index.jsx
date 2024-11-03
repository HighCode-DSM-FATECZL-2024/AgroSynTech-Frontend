import TemplatePerguntas from "../../components/templatePerguntas";
import "./index.css";

const PerguntasFrequentes = () => {
    return (
        <section className="perguntasFrequentes-template">
            <div className="perguntasFrequentes-text-camp">
                <p>
                    <span>PERGUNTAS FREQUENTES</span> sobre a
                </p>
                <h1>AgroSyntech</h1>
            </div>
            <div className="perguntasFrequentes-templatePerguntas">
                <TemplatePerguntas />
                <TemplatePerguntas />
                <TemplatePerguntas />
                <TemplatePerguntas />
                <TemplatePerguntas />
            </div>
        </section>
    );
};

export default PerguntasFrequentes;
