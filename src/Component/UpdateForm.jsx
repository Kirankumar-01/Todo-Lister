import React from 'react'

const UpdateForm = ({ updateData, updateTask, cancelUpdate, changeTask  }) => {
  return (
    <div>
      <>
        <div className='row'>
        <div className='col'>
          <input value={updateData && updateData.title} onChange ={(e)=> changeTask(e)} className='form-control form-control-1g'/>
        </div>
        <div className='col-auto'>
          <button onClick={updateTask} className='btn'>Update</button>
          <button onClick={cancelUpdate} className='btn btn-1g btn-warning'>Cancel</button>
        </div>
      </div>
      <br /></>
    </div>
  )
}

export default UpdateForm
