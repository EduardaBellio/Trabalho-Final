import axios from 'axios';

function Profile({produto = {}}){
    return (
        <div>
            <p>ID: {produto.id}</p>
            <p>TITULO: {produto.title}</p>
            <p>DESCRIÇÃO: {produto.description}</p>
            <p>PREÇO: {produto.price}</p>
            <div><img src={produto.image}></img></div>
        </div>
    ) 
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const produto = await response.data;
    return {
      props: {produto}
    }
  }

export async function getStaticPaths() {
    const response = await axios.get (
        'http://fakestoreapi.com/products/'
    );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}}
    });
    return {
        paths,
        fallback: true,
    };
}

export default Profile;