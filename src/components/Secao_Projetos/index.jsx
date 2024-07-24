import Card from "./Card";
import styles from "./Secao_Projetos.module.css";

export default function Secao_Projetos() {
    let titulo_real = "PROJETO";
    return (
        <section className={styles.container} >
            <Card
                titulo={titulo_real}
                sub_titulo="CARDÁPIO DE UM RESTAURANTE"
                descricao="Um cardápio de um restaurante, com a possibilidade de busca por categoria, pesquisa por nome do alimento, por categoria do alimento e pela descrição do alimento."
            />
            <Card
                titulo={titulo_real}
                sub_titulo="AGÊNCIA"
                descricao="Projeto desenvolvido a partir do curso de HTML e CSS do Programação Web para por em prática meus estudos de HTML e CSS."
            />
            <Card
                titulo={titulo_real}
                sub_titulo="AGÊNCIA"
                descricao="Projeto desenvolvido a partir do curso de HTML e CSS do Programação Web para por em prática meus estudos de HTML e CSS."
            />
        </section>
    );
};