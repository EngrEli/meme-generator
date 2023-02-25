import headerLogo from "../img/header-logo.svg"
import "./Header.css"

const header = () => {
  return ( 
    <div className="header">
      <div className="header__left">
        <img src={headerLogo} alt=""/>
        <h1>Meme Generator</h1>
      </div>
      <div className="header__right">
        React Course - Project 3
      </div>
    </div>
  );
}

export default header;