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
                links="https://site-de-uma-barbearia-proj-03.vercel.app/"
                titulo={titulo_real}
                sub_titulo="BARBER SHOP"
                descricao="É um site de apresentação da barbearia Barber Shop."
            />
            <Cards
                links="https://site-para-sorveteria-proj-02.vercel.app/"
                titulo={titulo_real}
                sub_titulo="GELATERIA"
                descricao="É um site de apresentação da sorveteria Gelateria."
            />
            <Cards
                links="https://site-de-uma-barbearia-proj-03.vercel.app/"
                titulo={titulo_real}
                sub_titulo="ÓTICAS VIDA"
                descricao="É um site de apresentação da ótica Óticas Vida."
            />

            <Cards
                links="https://site-cardapio-de-restaurante-proj-05.vercel.app/"
                titulo={titulo_real}
                sub_titulo="CARDÁPIO DE UM RESTAURANTE"
                descricao="Um cardápio de um restaurante, com a possibilidade de busca por categoria, pesquisa por nome do alimento, por categoria do alimento e pela descrição do alimento."
            />
            <Cards
                links="https://site-de-agencia-de-design-proj-04.vercel.app/"
                titulo={titulo_real}
                sub_titulo="AGÊNCIA DE BRANDING E DESIGN DIGITAL"
                descricao="É um site de apresentação de uma agência de branding e design digital."
            />

            </section>
        </section>
    );
};