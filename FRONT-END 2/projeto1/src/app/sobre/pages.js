import style from "./sobre.module.css"

export default function Sobre () {
    return (
        <main>
            <h1>Sobre</h1>/
            <p className={style.paragrafo}>Minha segunda Página</p>
            <p className={style.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}
