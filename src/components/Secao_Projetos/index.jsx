import Card from "./Card";
import styles from "./Secao_Projetos.module.css";

export default function Secao_Projetos() {
    let titulo_real = "PROJETO";
    return (
        <section className={styles.container} >
            
            <Card
                link="https://site-cardapio-de-restaurante-proj-05.vercel.app/"
                titulo={titulo_real}
                sub_titulo="CARDÁPIO DE UM RESTAURANTE"
                descricao="Um cardápio de um restaurante, com a possibilidade de busca por categoria, pesquisa por nome do alimento, por categoria do alimento e pela descrição do alimento."
            />
            <Card
                link="https://site-de-agencia-de-design-proj-04.vercel.app/"
                titulo={titulo_real}
                sub_titulo="AGÊNCIA DE BRANDING E DESIGN DIGITAL"
                descricao="É um site de apresentação de uma agência de branding e design digital."
            />
        </section>
    );
};