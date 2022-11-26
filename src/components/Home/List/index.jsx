import { useContext, useState } from "react";
import { ContextProps } from "../../../context";
import add from "../../../assets/icons/add.svg";
import close from "../../../assets/icons/close.svg";
import trash from "../../../assets/icons/trash.svg";
import edit from "../../../assets/icons/edit.svg";
// import "../../CardInfo/cardInfo.css";
import "./list.css";

export function List() {
  const { openModal, data, clicked, openClicked, closeClicked, removeProduct, editProduct } = useContext(ContextProps);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function yellow(){
    style.color="yellow";
    return "Estoque baixo"
  }

  return (
    <section className="list-container" >
      {data.map((data) => {
        return (
          <div
            className={`${clicked ? "principalNone" : "principal"}`}
            key={data.id}
            id={data.id}
            onClick={() => setSelectedProduct(data)}
          >
            <div onClick={openClicked}>
              <h1 className="product-title">{data.name}</h1>
              <div className="item">
                <p className="description">{data.description}</p>
                <div className="inventory inventory-yellow inventory-red">
                  <span className="qnt">{data.qnt}</span>
                  <span className={`${data.qnt >1 & data.qnt <= 5 ? "inventory-yellow" : data.qnt === 0 ? "inventory-red" : ""}`} >
                    {data.qnt >1 & data.qnt <= 5 ? "Estoque baixo" : data.qnt === 0 ? "Fora de estoque" : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      <>
        {clicked ? (
          <>
        {selectedProduct !== null && (
          <section key={selectedProduct.id} id={selectedProduct.id} className="header-container">
            <div className="header-details">
              <img
                onClick={closeClicked}
                className="icon-close"
                src={close}
                alt="Botão para fechar aba"
              />
              <div className="header-main">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <span>{selectedProduct.name}</span>
              </div>

              <div className="icon-change">
                <img
                  onClick={()=>removeProduct(selectedProduct.id)}
                  src={trash}
                  alt="Botão para lixeira"
                />

                <img
                  onClick={editProduct}
                  src={edit}
                  alt="Botão para editar item"
                />
              </div>
            </div>

            <div key={selectedProduct.id} className="character">
              <div>
                <p className="titles">Estoque</p>
                <p>{selectedProduct.qnt}</p>
              </div>
              <div>
                <p className="titles">Categorias</p>
                <span>{selectedProduct.category}</span>
              </div>
              <div>
                <p className="titles">Valor de venda</p>
                <span>{selectedProduct.price}</span>
              </div>
              <div>
                <p className="titles">Descrição</p>
                <span>{selectedProduct.description}</span>
              </div>
            </div>
          </section>
        )}
        </>
        ) : null}
      </>

      <img
        onClick={openModal}
        className="img-add"
        src={add}
        alt="Botão de adicionar produto"
      />
    </section>
  );
}
