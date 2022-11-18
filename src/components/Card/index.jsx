import { useContext } from "react";
import { ContextProps } from "../../context";
import { CardInfo } from "../CardInfo";

export function Card({ id, name, qnt, description, category, price }) {
  const { openClicked, clicked, data } = useContext(ContextProps);

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id} id={data.id}>
            <div onClick={openClicked}>
              <h1 className="product-title">{data.name}</h1>
              <div className="item">
                <p className="description">{data.description}</p>
                <div className="inventory inventory-yellow inventory-red">
                  <span>{data.qnt}</span>
                  <span>
                    {data.qnt >= 1 <= 5
                      ? "Estoque baixo"
                      : data.qnt === 0
                      ? "Fora de estoque"
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {clicked ? (
        <CardInfo
          infoId={data.id}
          infoQnt={data.qnt}
          infoCategory={data.category}
          infoDescription={data.description}
          infoPrice={data.price}
          />
          ) : null}
    </>
  );
}
