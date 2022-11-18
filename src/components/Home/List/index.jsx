import { useContext } from "react";
import { ContextProps } from "../../../context";
import add from "../../../assets/icons/add.svg";
import { Card } from "../../Card";
import "../../Details/details.css";
import "./list.css";

export function List() {
  const {
    openModal,
    data
  } = useContext(ContextProps);

  return (
    <section className="list-container">
      {/* {data.map((data) => {
        return ( */}
          <Card
            id={data.id}
            name={data.name}
            qnt={data.qnt}
            description={data.description}
            category={data.category}
            price={data.price}
          />
        {/* );
      })} */}

      <img
        onClick={openModal}
        className="img-add"
        src={add}
        alt="Botão de adicionar produto"
      />
    </section>
  );
}
