import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Post-up by Charlie Gzz {year}</p>
    </footer>
  );
}

export default Footer;
