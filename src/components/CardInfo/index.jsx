import { useContext } from "react";
import { ContextProps } from "../../context";
import close from "../../assets/icons/close.svg";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";

export function CardInfo({ infoId, infoQnt, infoCategory, infoDescription, infoPrice }) {
  const { closeClicked, clicked } = useContext(ContextProps);

  return (
    // <>
    //   { clicked ? (
        
        <section className="header-container">
          <div className="header-details" >
            <img
              onClick={closeClicked}
              className="icon-details"
              src={close}
              alt="Botão para fechar aba"
            />
            <img src="" alt="" />
            <img
              className="icon-details"
              src={trash}
              alt="Botão para lixeira"
            />
            <img
              className="icon-details"
              src={edit}
              alt="Botão para editar item"
            />
          </div>

          {/* {data.map((data, index) => {
            return ( */}
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

        
    //   ) : null}
    // </>
  );
}
