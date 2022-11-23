import { useContext, useState } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";
import "./addProduct.css";
import "../CardInfo/cardInfo.css";



export function AddProduct({
  id,
  name,
  title,
  description,
  input,
  placeholder,
  button,
}) {
  const { modal, closeModal, step, goToNext, goToPrevious, onChange } =
    useContext(ContextProps);
  const [itens, setItens] = useState(6);


  // function sendForm(ev) {
  //   ev.preventDefault();
  //   console.log("Form enviado!")
  // }

  return (
    <>
      {modal ? (
        <section 
        // onChange={sendForm} 
        key={id} 
        id={id} 
        className="add-container">
          <div className="add-header">
            <img
              onClick={goToPrevious}
              className="icon-close"
              src={back}
              alt="Botão para voltar aba"
            />
            <div>
              {Array.from(Array(itens), (item, index) => {
                return (
                  <button key={index} className="dots">
                    {item}
                  </button>
                );
              })}
            </div>
            <img
              onClick={closeModal}
              className="icon-close"
              src={close}
              alt="Botão para fechar aba"
            />
          </div>

          <div className="text-main" key={id}>
            <h1 className="add-title">{title}</h1>
            <p>{description}</p>
            <input
              onChange={onChange}
              className="input"
              type="text"
              name={name}
              placeholder={placeholder}
            />
            <button 
              // onChange={sendForm}
              onClick={goToNext}
              className="btn"
              // type="button"
            >
              {/* CONTINUAR */}
              {step === 5 ? "ADICIONAR" : "CONTINUAR"}
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
