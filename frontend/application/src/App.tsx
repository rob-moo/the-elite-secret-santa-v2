import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Login } from './pages/login';
import { Route, Routes } from 'react-router-dom';
import { Santa } from './pages/santa';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="Main">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/santas/:password" element={<Santa />} />
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
