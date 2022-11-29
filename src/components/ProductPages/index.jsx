import { AddProduct } from "../AddProduct";
import { Slider, Slide } from 'pure-react-carousel';
import './productPages.css';

export const form = [
  {
    id: 1,
    name: "name",
    title: "Defina o nome do seu produto",
    description:
      "Escolha um nome para você e seu cliente poderem indetificá-lo",
    input: true,
    button: true,
  },
  {
    id: 2,
    name: "qnt",
    title: "Escreva quantos produtos você tem no estoque",
    description:
      "A quantidade ficará armazenada para você controlar o seu estoque",
    input: true,
    button: true,
  },
  {
    id: 3,
    name: "description",
    title: "Descreva seu produto",
    description: "Coloque detalhes sobre o que está sendo oferecido.",
    input: true,
    button: true,
  },
  {
    id: 4,
    name: "category",
    title: "Adicione as categorias",
    description:
      "Separar os produtos em categorias pode facilitar a sua organização e ajuda os clientes encontrarem o que querem.",
    input: true,
    button: true,
  },
  {
    id: 5,
    name: "img",
    title: "Adicione uma foto do seu produto",
    description:
      "As fotos dos produtos aparecem para seus clientes em sua loja. É uma boa forma de mostrar o que você está oferecendo.",
    input: false,
    button: true,
  },
  {
    id: 6,
    name: "price",
    title: "Defina o valor de venda",
    description:
      "Para escolher o valor que será cobrado é importante você saber o custo do seu produto e o lucro que você pretende obter.",
    input: true,
    placeholder: "R$ 0,00",
    button: true,
  },
];

export function ProductsPages() {
  // form.reverse();


  return (
    <div className="slider" >
      {/* <Slider>
        {form.map((form) => (
        <Slide index={0}>
        <AddProduct
          index={0}
          key={form.id}
          id={form.id}
          name={form.name}
          title={form.title}
          description={form.description}
          input={form.input}
          placeholder={form.placeholder}
        />
        </Slide>
      ))}
        <Slide index={1} >
          <AddProduct/>
        </Slide>
        <Slide index={2} >
          <AddProduct/>
        </Slide>
        <Slide index={3} >
          <AddProduct/>
        </Slide>
        <Slide index={4} >
          <AddProduct/>
        </Slide>
        <Slide index={5} >
          <AddProduct/>
        </Slide> 
      </Slider> */}




      <div className="card-container">
      {form.map((form) => (
        <AddProduct
          id={form.id}
          name={form.name}
          title={form.title}
          description={form.description}
          input={form.input}
          placeholder={form.placeholder}
          category={form.category}
          image={form.image}
        />
      ))}
    </div>
    
    </div>
    
  );
}
