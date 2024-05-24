import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Helper from './Guide/Helper';
import Kal from './Calculator/Calculate';
import Error404 from './Error/Error';
import LoginScreen from './Login_page/LoginScreen'
import Service from './Services/service';
import LandingPage from './Landing_Page/LangingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/power-saver' element={<LandingPage />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/guide' element={<Helper />} />
        <Route path='/calculate' element={<Kal />} />
        <Route path='/services' element={<Service />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

function Header() {
  return <Navbar />
}

export default App;
