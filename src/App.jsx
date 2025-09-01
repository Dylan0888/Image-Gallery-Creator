import './App.css';
import { Toaster } from 'react-hot-toast';
import Library from './components/Library';
import HeaderInput from './components/HeaderInput';


function App() {


  return (
    <>
      <HeaderInput />
      <Library /> 
      <Toaster position="top-center" />
    </>
  );
}

export default App;