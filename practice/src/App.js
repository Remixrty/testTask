// import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Table from './components/Table';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
