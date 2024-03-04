import './App.css';
import { FooterComp } from './components/footerComp'
import { TableGoods } from './components/tableGoods';


function App() {
  return (
    <div className="container">
      <section className='wrapper'>
        <main>
          <TableGoods/>
        </main>
        <FooterComp/>
      </section>
      
    </div>
  );
}

export default App;
