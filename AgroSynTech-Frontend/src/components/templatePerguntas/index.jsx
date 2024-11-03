import { ArrowDown } from "lucide-react";
import "./index.css";

const TemplatePerguntas = () => {
    return (
        <div className="templatePerguntas">
            <p>O que é a AgroSyntech?</p>
            <button className="templatePerguntas-button">
                <ArrowDown strokeWidth={3.5} size={22}/>
            </button>
        </div>
    );
};

export default TemplatePerguntas;
