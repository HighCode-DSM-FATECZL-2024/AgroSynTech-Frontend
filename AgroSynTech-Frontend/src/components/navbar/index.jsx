import Button from "../button";
import "./index.css";

const Navbar = () => {
   const data_links = [
      {
         link_name: "HOME",
      },
      {
         link_name: "SOBRE",
      },
      {
         link_name: "PRÁTICAS",
      },
      {
         link_name: "CONTATO",
      },
   ];

   return (
      <>
         <nav>
            <div className="navbar-agrosyntech-logo">
               <h1>AGRO</h1>
               <p>SYNTECH</p>
            </div>
            <ul className="navbar-links-navegation">
               {data_links.map((item, index) => (
                  <li key={index}>{item.link_name}</li>
               ))}
            </ul>
            <div className="navbar-login-register">
               <Button title="Registrar-se" />
               <Button title="Entrar" />
            </div>
         </nav>
      </>
   );
};

export default Navbar;
