//import logo from './logo.svg';
import './App.css';
//import { FunctionComponent} from './components/FunctionComponent';
//import ClassComponent from './components/ClassComponent';
import PropsExampleClass from './components/PropsExampleClass'

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent />
      <ClassComponent/> */}
      <PropsExampleClass name='Sandeep'>
        <p>Cool Dude</p>
      </PropsExampleClass>
      <PropsExampleClass name='Vidyanath'/>
      <PropsExampleClass name='Prasad'/>
      <PropsExampleClass name='Anitha'/>
    </div>
  );
}

export default App;
