import { useContext, useState } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";
import { ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import { form } from '../ProductPages/index'
import "./addProduct.css";

export function AddProduct() {
  const { modal, closeModal, step, data, goToNext, goToPrevious, onChange } =
    useContext(ContextProps);
  const [itens, setItens] = useState(6);

  return (
    <>
      {modal ? (
        <>
          {form.map((form) => (
            <section
              key={form.id}
              id={form.id}
              className="add-container"
            >
              <div className="add-header">
                <ButtonBack>
                  <img
                    // onClick={goToPrevious}
                    className="icon-close"
                    src={back}
                    alt="Botão para voltar aba"
                  />
                </ButtonBack>
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

              <div className="text-main" key={form.id}>
                <h1 className="add-title">{form.title}</h1>
                <p>{form.description}</p>
                <input
                  onChange={onChange}
                  className="input"
                  type="text"
                  name={form.name}
                  placeholder={form.placeholder}
                />
                <ButtonNext
                  // onChange={sendForm}
                  // onClick={goToNext}
                  className="btn"
                >
                  {step === 5 ? "ADICIONAR" : "CONTINUAR"}
                </ButtonNext>
              </div>
            </section>
          ))}
        </>
      ) : null}
    </>
  );
}
