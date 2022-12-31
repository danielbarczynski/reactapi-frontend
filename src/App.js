import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexContent from './Components/Index/IndexContent';
import CreateContent from './Components/Create/CreateContent';
import UpdateContent from './Components/Update/UpdateContent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<IndexContent />}></Route>
                    <Route path='/Create' element={<CreateContent />}></Route>
                    <Route path='/Update' element={<UpdateContent />}></Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
