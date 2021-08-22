import './App.css';
import { Container, Head, Titulo, BemVindo } from './styles'

function App() {
  return (
    <Container>
      <Head>
        <Titulo>teste</Titulo>
      </Head>

      <BemVindo cor="2ee" tamanho={35}>
        Bem vindo
      </BemVindo>
    </Container>
  );
}

export default App;


/*
<div className="container">

  <header className="header">
    <a href="" className="titulo">Projeto Style</a>
  </header>

  <h1>Bem vindo ao sistema!</h1>

</div>
*/