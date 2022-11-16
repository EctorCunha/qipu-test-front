import { useContext } from "react";
import { ContextProps } from "../../../context";
import add from "../../../assets/icons/add.svg";
import "./list.css";

export function List() {
  const { openModal, openClicked, data } = useContext(ContextProps);



  return (
    <section className="list-container">
      {data.map((data) => {
        return (
          <div key={data.id} onClick={openClicked}>
            <h1 className="product-title">{data.name}</h1>
            <div className="item">
              <p className="description">
                {data.description}
              </p>
              <div className="inventory">
                <span>{data.qnt}</span>
              </div>
            </div>
          </div>
        );
      })}

      <img
        onClick={openModal}
        className="img-add"
        src={add}
        alt="Botão de adicionar produto"
      />
    </section>
  );
}
