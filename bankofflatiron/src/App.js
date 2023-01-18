import './App.css';
import React, {useState,useEffect} from 'react'
import Table from './components/Table.js';
import Header from './components/Header.js';
import Form from './components/Form.js';


function App() {
      const[state,setState]=useState([])
      const[search,setSearch]=useState('')
      const[data,setData]=useState('')

      useEffect(()=>{
        fetch('http://localhost:8001/transactions')
        .then(res=>res.json())
        .then(data=>setState(data))},[])

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}data={data}setData={setData}/>
      <Form state={state}setState={setState}/>
      <Table state={state}setState={setState}search={search}></Table>
    </div>
  );
}

export default App;
