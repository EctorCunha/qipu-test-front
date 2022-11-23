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
  const [atualize, setAtualize] = useState(false)
  // const [clickId, setClickId] = useState('');
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const params = useParams(); 

  function getData(){
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
  }, [atualize])

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
      setAtualize(!atualize)
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

  function removeProduct(id){
    axios.delete(`http://localhost:3000/${id}`, values).then((response) => {
      navigate("/");
    });
    setAtualize(!atualize)
    closeClicked()
  }

  function editProduct(id){
    axios.put(`http://localhost:3000/${id}`).then((response) => {
      navigate("/");
    });
    setAtualize(!atualize)
  }

  function functions(){
    openClicked()
  }

  function verifyInventory(){
    if(data.qnt === 0){
      return "Fora de estoque" & "inventory-red"
    } else if (data.qnt <= 5){
      return "Estoque baixo" & "inventory-yellow"
    } else {
      return ""
    }
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
          verifyInventory,
          onChange,
          removeProduct,
          editProduct
        }}
      >
        {children}
      </ContextProps.Provider>
    </div>
  );
}
