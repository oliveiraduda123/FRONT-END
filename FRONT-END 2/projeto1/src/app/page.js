//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Maria'
  return (
    <div >
      <h1>Página Principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autora {nome}</p>
    </div>
  );
}
