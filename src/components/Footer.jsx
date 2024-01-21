import React from "react";

const date = new Date();
const currentTime = date.getFullYear();

function footer(){
return <footer>
  <p>Copyright &copy; {currentTime} </p>
</footer>

}

export default footer;
