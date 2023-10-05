import { useContext, useState } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";
import "./addProduct.css";

export function AddProduct({ id, name, title, description, placeholder, image, category }) {
  const { modal, closeModal, step, goToNext, goToPrevious, onChange } =
    useContext(ContextProps);
  const [itens, setItens] = useState(6);

  const categories = {
    1: "Bebidas",
    2: "Cafés",
    3: "Comidas",
  }

  return (
    <>
      {modal ? (
        <>
          {/* {form.map((form) => ( */}
            <section
              key={id}
              id={id}
              className="add-container"
            >
              <div className="add-header">
                <button>
                  <img
                    onClick={goToPrevious}
                    className="icon-close"
                    src={back}
                    alt="Botão para voltar aba"
                  />
                </button>
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
                  className="icon-close-product"
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
                  image={image}
                  category={category}
                />
                
                
                {/* <label htmlFor="picture-input" className="picture">
                <span className="picture-image" >As dimensões da foto devem ser de 600 x 600</span>
                </label>
                <input type="file" accept="image/*" name="image" id="picture-input" /> */}


                <button
                  onClick={goToNext}
                  className="btn"
                >
                  {step === 6 ? "ADICIONAR" : "CONTINUAR"}
                </button>
              </div>
            </section>
          {/* ))} */}
        </>
      ) : null}
    </>
  );
}
