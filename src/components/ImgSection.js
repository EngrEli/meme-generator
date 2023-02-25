import "./ImgSection.css"
import memeImg from "../img/meme-placeholder.svg"
import "../fonts/impact.ttf";

const ImgSection = () => {
  return ( 
    <>
      <div className="image">
        <p className="image__top-text">Top Text</p>
        <img src={memeImg} alt="" />
        <p className="image__bottom-text">Bottom Text</p>
      </div>
    </>
  );
}

export default ImgSection;