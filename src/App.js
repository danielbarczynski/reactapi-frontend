import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexContent from './Components/Index/IndexContent';
import CreateContent from './Components/Create/CreateContent';
import UpdateContent from './Components/Update/UpdateContent';

function App() {
    const API_URL = 'https://localhost:7000/api/Person/';
    const [persons, setPersons] = useState([]);
    const [inputName, setInputName] = useState(''); 
    const [inputAge, setInputAge] = useState(''); 
    const [refresh, setRefresh] = useState([]);  

    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<IndexContent API_URL={API_URL} persons={persons} setPersons={setPersons} inputName={inputName} setInputName={setInputName} inputAge={inputAge} setInputAge={setInputAge} refresh={refresh} setRefresh={setRefresh}/>}></Route>
                    <Route path='/Create' element={<CreateContent />}></Route>
                    <Route path='/Update/:id' element={<UpdateContent API_URL={API_URL} inputName={inputName} setInputName={setInputName} inputAge={inputAge} setInputAge={setInputAge} persons={persons} setRefresh={setRefresh}/>}></Route>
                </Routes>
            </header>
        </div>
    );
};

export default App;
