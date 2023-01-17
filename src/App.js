import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import Process from './component/Process'
import About from './component/About';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div>
      <Navi></Navi>
      <About id="about"></About>
      <Process id="process" title="개발자 연혁" style={ {height: '100vh'}}></Process>
      <Portfolio id="portfolio" className=''></Portfolio>
      <section style={ {height: '100vh'}} id="contact"></section>
    </div>
  );
}

export default App;