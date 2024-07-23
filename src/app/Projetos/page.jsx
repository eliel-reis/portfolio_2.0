import Cards from "./Cards";
import styles from "./Projetos.module.css";


export default function Projetos() {
    let titulo_real = "PROJETO";
    return (
        <section className={styles.container} >
            <section className={styles.container_h1} >
                <h1>
                    PROJETOS
                </h1>
            </section>
            <section className={styles.container_cards} >
                <Cards
                    titulo={titulo_real}
                    sub_titulo="AGÊNCIA"
                    descricao="Projeto desenvolvido a partir do curso de HTML e CSS do Programação Web para por em prática meus estudos de HTML e CSS."
                />
                <Cards
                    titulo={titulo_real}
                    sub_titulo="AGÊNCIA"
                    descricao="Projeto desenvolvido a partir do curso de HTML e CSS do Programação Web para por em prática meus estudos de HTML e CSS."
                />
                <Cards
                    titulo={titulo_real}
                    sub_titulo="AGÊNCIA"
                    descricao="Projeto desenvolvido a partir do curso de HTML e CSS do Programação Web para por em prática meus estudos de HTML e CSS."
                />
            </section>
        </section>
    );
};