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
  price: "",
};

export function PropsProvider({ children }) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [atualize, setAtualize] = useState(false);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [clickEdit, setClickEdit] = useState(false);
  const navigate = useNavigate();

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
    setStep((prevActiveStep) => prevActiveStep - 1);
    if (step <= 1) {
      closeModal();
      setStep(0);
    }
  }

  function goToNext() {
    setStep((prevActiveStep) => prevActiveStep + 1);
    if (step >= 6) {
      axios.post("http://localhost:3000", values).then((response) => {
        setAtualize(!atualize);
        navigate("/");
      });
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
    axios.put(`http://localhost:3000/${id}`, values).then((response) => {
      setClickEdit(false);
      setClicked(true)
      setAtualize(!atualize);
    });
  }

  function buttonEdit() {
    setClickEdit(true)
  }

  function cancelEdit() {
    setClickEdit(false)
  }

  console.log(values)

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
          buttonEdit,
          editProduct,
          clickEdit,
          cancelEdit,
          values,
        }}
      >
        {children}
      </ContextProps.Provider>
    </div>
  );
}
