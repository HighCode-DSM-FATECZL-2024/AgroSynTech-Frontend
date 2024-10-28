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
               <h1>Agro</h1>
               <p>Syntech</p>
            </div>
            <ul className="navbar-links-navegation">
               {data_links.map((item, index) => (
                  <li key={index}>{item.link_name}</li>
               ))}
            </ul>
            <div className="navbar-login-register">
               <Button title="Login" />
               <Button title="Register" />
            </div>
         </nav>
      </>
   );
};

export default Navbar;
