import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ContextProps = createContext();

const initialValues = {
  name: "",
  qnt: 0,
  description: "",
  category: "",
  image: "",
  price: "R$ ",
};

export function PropsProvider({ children }) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [atualize, setAtualize] = useState(false);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);

  const navigate = useNavigate();
  const params = useParams();

  function getData() {
    try {
      axios.get("http://localhost:3000").then((response) => {
        setData(response.data);
      });
    } catch (error) {
      alert("Houve um erro");
    }
  }

  useEffect(() => {
    getData();
  }, [atualize]);

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  function goToPrevious() {
    // const isFirstSlide = step === 0;
    // const newIndex = isFirstSlide ? form.length - 1 : step - 1;
    // setStep(newIndex);
    setStep((prevActiveStep) => prevActiveStep - 1);
    if (step <= 1) {
      closeModal();
      setStep(0);
    }
  }

  function goToNext() {
    // const isLastSlide = step === form.length - 1;
    // const newIndex = isLastSlide ? 0 : step + 1;
    // setStep(newIndex);
    setStep((prevActiveStep) => prevActiveStep + 1);
    if (step >= 6) {
      axios.post("http://localhost:3000", values).then((response) => {
        navigate("/");
      });
      setAtualize(!atualize);
      closeModal();
      setStep(0);
    }
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setStep(0);
  }

  function openClicked() {
    setClicked(true);
  }

  function closeClicked() {
    setClicked(false);
  }

  function removeProduct(id) {
    if(confirm("Deseja mesmo excluir este produto?")){
      axios.delete(`http://localhost:3000/${id}`).then((response) => {
        navigate("/");
      });
      setAtualize(!atualize);
      closeClicked();
    } else {
      return;
    }
    
  }

  function editProduct(id) {
    axios.put(`http://localhost:3000/${id}`).then((response) => {
      navigate("/");
    });
    setAtualize(!atualize);
  }

  // const clicado = document.querySelectorAll(".principal");
  // for (var i = 0; i < clicado.length; i++) {
  //   clicado[i].addEventListener("click", function (e) {
  //     // setClickId(clicado)
  //     // setClickId(clicado[i].id);
  //     // setClickId(e.target.id);
  //     alert("O elemento clicado foi o " + this.innerHTML);
  //   });
  // }

  function functions() {
    openClicked();
  }


  return (
    <div>
      <ContextProps.Provider
        value={{
          openModal,
          modal,
          openClicked,
          closeClicked,
          clicked,
          closeModal,
          data,
          goToPrevious,
          goToNext,
          step,
          onChange,
          removeProduct,
        }}
      >
        {children}
      </ContextProps.Provider>
    </div>
  );
}
