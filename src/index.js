import ReactDOM from 'react-dom';
import MenuRow from './menuComponents/rows';
import Header from './header';
import Footer from './footer';

const root = document.querySelector('.root');

function App(){
  return (
    <>
      <Header />
      <main>
        <MenuRow kind={'meals'} text={'Primeiro, seu prato'}/>
        <MenuRow kind={'drinks'} text={'Agora, sua bebida'}/>
        <MenuRow kind={'desserts'} text={'Por fim, sua sobremesa'}/>
      </main>
      <Footer />
    </>
  );

}


ReactDOM.render(<App />, root);
