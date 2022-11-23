import { useContext } from "react";
import { ContextProps } from "../../context";

export function Card({ id, name, qnt, description }) {
  const { openClicked } = useContext(ContextProps);

  // const descendentes = document.querySelectorAll(".principal");
  // for (var i = 0; i < descendentes.length; i++) {
  //   descendentes[i].addEventListener("click", function (e) {
  //     alert('O elemento clicado foi o ' + this.innerHTML);
  //   })
  // }

  return (
    <div className="principal" key={id} id={id} onClick={openClicked} >
      <div>
        <h1 className="product-title">{name}</h1>
        <div className="item">
          <p className="description">{description}</p>
          <div className="inventory inventory-yellow inventory-red">
            <span>{qnt}</span>
            <span>
              {qnt >= 1 <= 5
                ? "Estoque baixo"
                : qnt === 0
                ? "Fora de estoque"
                : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
