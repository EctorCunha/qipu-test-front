import { useContext } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import "./cardInfo.css";

export function CardInfo({
  infoId,
  infoName,
  infoImage,
  infoQnt,
  infoCategory,
  infoDescription,
  infoPrice,
}) {
  const { closeClicked, removeProduct, editProduct } = useContext(ContextProps);

  return (
    <>
      <section key={infoId} id={infoId} className="header-container">
        <div className="header-details">
          <img
            onClick={closeClicked}
            className="icon-close"
            src={close}
            alt="Botão para fechar aba"
          />
          <div className="header-main">
            <img src={infoImage} alt={infoName} />
            <span>{infoName}</span>
          </div>

          <div className="icon-change">
            <img
             onClick={removeProduct}
             src={trash} alt="Botão para lixeira" />
             
            <img onClick={editProduct} src={edit} alt="Botão para editar item" />
          </div>
        </div>
        
        <div key={infoId} className="character">
          <div>
            <p className="titles">Estoque</p>
            <p>{infoQnt}</p>
          </div>
          <div>
            <p className="titles">Categorias</p>
            <span>{infoCategory}</span>
          </div>
          <div>
            <p className="titles">Valor de venda</p>
            <span>{infoPrice}</span>
          </div>
          <div>
            <p className="titles">Descrição</p>
            <span>{infoDescription}</span>
          </div>
        </div>
      </section>
    </>

  );
}
