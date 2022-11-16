import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ContextProps = createContext();

export function PropsProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const params = useParams(); 


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

  function goToNext(ev) {
    // const isLastSlide = step === form.length - 1;
    // const newIndex = isLastSlide ? 0 : step + 1;
    // setStep(newIndex);
    setStep((prevActiveStep) => prevActiveStep + 1);
    if (step >= 5) {
      ev.preventDefault();

      closeModal();
      setStep(0);

      axios.post("http://localhost:3000", values).then((response) => {
        navigate("/");
      });
    }
  }

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
  }, [])

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setStep(0);
  }

  function openClicked() {
    setClicked(true);
    // const busca = data.map(data => data.id)
    data.find((data) => data.id === data.id);
    // setData(busca)
  }

  function closeClicked() {
    setClicked(false);
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
        }}
      >
        {children}
      </ContextProps.Provider>
    </div>
  );
}
