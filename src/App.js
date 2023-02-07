import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import AddTaskForm from './Component/AddTaskForm';
import UpdateForm from './Component/UpdateForm';
import Todo from './Component/Todo';

function App() {

  const [input, setInput]= useState('');
  const [updateData, setUpdateData] = useState('');
  const [todos, setTodos]= useState([])
  const addTask = ()=>{
    if(input){
      let num = todos.length +1;
      let newEntry = { id:num, title:input, status: true}
      setTodos([...todos, newEntry])
      setInput('');
    }

  }
  const deleteTask = (id)=>{
    let newTask = todos.filter(task => task.id!== id)
    setTodos(newTask)
    
    
  }
  const cancelUpdate = () =>{
    setUpdateData('');
  }
  const changeTask=(e) => {
    let newEntry ={
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }
  const updateTask = ()=>{
    let filterRecords = [...todos].filter(task => task.id !==updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setTodos(updatedObject)
    setUpdateData('')
  }
  return (
    <div className='container'>
      <br /> 
      <h2 className='heading'> What's the plan for today ?</h2>
      <br /> <br />
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
        />
      ):(
       <AddTaskForm 
          input ={input}
          setInput ={setInput}
          addTask = {addTask}
       
       />

      ) }

     
      
      {todos&&todos.length ? '': 'No tasks.....'}
      <Todo 
        todos={todos}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}

      />
    </div>
  );
    }

export default App
