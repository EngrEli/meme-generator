import "./Form.css"

const Form = () => {
  return ( 
    <form className="form">
      <div className="form__input-flex">
        <input 
          type="text"
          required
          placeholder="Top Text"
        />
        <input 
          type="text"
          required
          placeholder="Bottom Text"
        />
      </div>
      <button className="form__generate-btn">
        Get a new meme image
      </button>
    </form>
  );
}

export default Form;