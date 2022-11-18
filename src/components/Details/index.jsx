// import { useContext } from "react";
// import { ContextProps } from "../../context";
// import close from "../../assets/icons/close.svg";
// import trash from "../../assets/icons/trash.svg";
// import edit from "../../assets/icons/edit.svg";
// import "./details.css";

// export function Details() {
//   const { closeClicked, clicked, data } = useContext(ContextProps);
//   const busca = data.map(data => data.id)
//   const search = data.find((data) => data.id === busca);
//   // console.log(busca);
//   // console.log(search);
//   // console.log(data);
//   // console.log(data.filter((data) => data.id === busca));

//   return (
//     <>
//       {clicked ? (
//         <section className="header-container">
//           <div className="header-details">
//             <img
//               onClick={closeClicked}
//               className="icon-details"
//               src={close}
//               alt="Botão para fechar aba"
//             />
//             <img src="" alt="" />
//             <img
//               className="icon-details"
//               src={trash}
//               alt="Botão para lixeira"
//             />
//             <img
//               className="icon-details"
//               src={edit}
//               alt="Botão para editar item"
//             />
//           </div>

//           {data.map((data, index) => {
//             return (
//               <div key={data.id}  className="character">
//                 <div>
//                   <p className="titles">Estoque</p>
//                   <p>{data.qnt}</p>
//                 </div>
//                 <div>
//                   <p className="titles">Categorias</p>
//                   <span>{data.category}</span>
//                 </div>
//                 <div>
//                   <p className="titles">Valor de venda</p>
//                   <span>{data.price}</span>
//                 </div>
//                 <div>
//                   <p className="titles">Descrição</p>
//                   <span>{data.description}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </section>
//       ) : null}
//     </>
//   );
// }
