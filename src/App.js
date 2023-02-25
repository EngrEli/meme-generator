import './App.css';
import Form from './components/Form';
import Header from "./components/Header"
import ImgSection from './components/ImgSection';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-container__body">
        <Form />
        <ImgSection />
      </div>
    </div>
  );
}

export default App;
