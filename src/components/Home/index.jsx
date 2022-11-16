import { useContext } from "react";
import { ContextProps } from "../../context";
import { Header } from "./Header";
import { List } from "./List";
import load from "../../assets/icons/loading.svg";

export function Home() {
  const { loading } = useContext(ContextProps);

  return (
    <>
      <Header />
      <List />
    </>
  );
}
