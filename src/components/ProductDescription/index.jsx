import { useContext, useState } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";
import "../AddProduct/addProduct.css";


const initialValues = {
  name: "",
  qnt: 0,
  description: "",
  category: "",
  image: "",
  price: 0,
};

export function ProductDescription (){
  const { modal, closeModal, step, goToNext, goToPrevious } = useContext(ContextProps);
  const [itens, setItens] = useState(6);
  const [values, setValues] = useState(initialValues);

  // function onChange(ev) {
  //   const { name, value } = ev.target;
  //   setValues({ ...values, [name]: value });
  // }


  return(
    <section className="add-container">
    <div className="add-header">
      <img
        onClick={goToPrevious}
        className="icon-details"
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
        className="icon-details"
        src={close}
        alt="Botão para fechar aba"
      />
    </div>

    <div className="text-main">
      <h1 className="add-title">Descreva seu produto</h1>
      <p>Coloque detalhes sobre o que está sendo oferecido.</p>
      <input
        // onChange={onChange}
        className="input"
        type="text"
      />
      <button
        onClick={goToNext}
        // onSubmit={onSubmit}
        className="btn"
        // type="button"
      >
        CONTINUAR
        {/* {step === 6 ? "ADICIONAR" : "CONTINUAR"} */}
      </button>
    </div>
  </section>
  )};