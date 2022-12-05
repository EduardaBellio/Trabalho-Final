import axios from "axios";
import { userAgent } from "next/server";
import React from "react";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Produtos({produtos}){
    return (
        <div> 
            <h1 className={styles.titulop}>Conheça nossos produtos!</h1>
            <div>
            {produtos.map((produto) => (
                <div className={styles.produtos}>
                    <Link href='/profile/[id]' as={`/profile/${produto.id}`}>
                        <div className={styles.nome}>{produto.title}</div>
                        <br></br>
                    </Link>
                </div>
            ))}
            </div>
            <br></br>
            <a href="/" className={styles.card}>Voltar</a>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'http://fakestoreapi.com/products/'
    );
    const data = await response.data;

    return {
        props: {produtos:data},
    }
}

export default Produtos;
