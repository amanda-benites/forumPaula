import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [news, setNews] = useState([])

  const pegarNoticias = () => {
    axios.get('http://localhost:8000/news')
    .then(response => setNews(response.data))
    .catch(error => console.log(error))
  }

  const novoArray = news.map((postagem)=>{
    return(
      <div key={postagem.id}>
        <h2>{postagem.titulo}</h2>
        <p>{postagem.conteudo}</p>
      </div>
    )
  })

  useEffect(()=>{
    pegarNoticias()
  }, [])

  return (
    <>
      {novoArray}
    </>
  );
}

export default App;
