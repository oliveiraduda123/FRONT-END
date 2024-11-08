//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Maria'
  return (
    <div >
      <h1>Página Principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autora {nome}</p>
      <Image 
      className={styles.imagem}
      src= "/images/praia.jpg" 
      alt="Imagem Praia"
      width={600}
      height={600}
      />
    </div>
  );
}
