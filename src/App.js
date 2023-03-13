import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/signUp';
import DataUser from './pages/dataUser';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/datauser' element={<DataUser />} />
      </Routes>
    </div>
  );
}

export default App;
