import React from "react";

const year = new Date().getFullYear(); 

function Footer() {
    return ( 
    <footer className="footer">
        <p>Josh Salce © {year}</p>
    </footer>
  );
}

export default Footer;