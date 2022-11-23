import { useContext } from "react";
import { ContextProps } from "../../../context";
import { Card } from "../../Card";
import add from "../../../assets/icons/add.svg";
import { CardInfo } from "../../CardInfo";
import "../../CardInfo/cardInfo.css";
import "./list.css";

export function List() {
  const { openModal, data, clicked } = useContext(ContextProps);
  // const maped = data.map((data) => data.id )
  const dados = data.find(dado => dado.id )
  // console.log(dados)
  // console.log(clickId)



  return (
    <section className="list-container">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            qnt={data.qnt}
            description={data.description}
          />
        );
      })}

      {clicked ? (
        <>
        {/* {data.map((data) =>  */}
              <CardInfo
                infoId={dados.id}
                infoName={dados.name}
                infoImage={dados.image}
                infoQnt={dados.qnt}
                infoCategory={dados.category}
                infoDescription={dados.description}
                infoPrice={dados.price}
              />
        {/* )} */}
        </>
      ) : null}

      <img
        onClick={openModal}
        className="img-add"
        src={add}
        alt="Botão de adicionar produto"
      />
    </section>
  );
}
