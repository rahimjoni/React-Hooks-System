import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import 'semantic-ui-css/semantic.min.css'

function App() {

  const items =[
    {
      title:'What is react',
      content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title:'What is redux',
      content:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
    },
    {
      title:'What is reducer',
      content:'  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy'
    },
    {
      title:'What is rejoin',
      content:' Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
    },

  ]
  return (
    <div className="App" style={{textAlign:"left"}}>
      {/*<Accordion items={items}/>*/}
      <Search/>
    </div>
  );
}

export default App;
