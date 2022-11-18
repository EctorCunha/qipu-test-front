import { useContext, useEffect, useState } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";
import "./addProduct.css";

const initialValues = {
  name: "",
  qnt: 0,
  description: "",
  category: "",
  image: "",
  price: 0,
};

export function AddProduct({ id, name, title, description, input, placeholder, button }) {
  const { modal, closeModal, step, goToNext, goToPrevious } = useContext(ContextProps);
  const [itens, setItens] = useState(6);
  const [values, setValues] = useState(initialValues);


  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      {modal ? 
            <section key={id} id={id} className="add-container">
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
        : null}
    </>
  );
}
