import React from 'react'

const AddTaskForm = ({ input, setInput, addTask }) => {
  return (
    <div>
      <>
        <div className='row'>
        <div className='col'>
          <input value={input} onChange={(e)=> setInput(e.target.value)} className='form-control form-control-1g'/>
        </div>
        <div className='col-auto'>
          <button onClick={addTask} className='btn'>Add Task</button>
        </div>
      </div>
      <br/></>
    </div>
  )
}

export default AddTaskForm
