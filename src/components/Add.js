import React from 'react'

const Add = () => {
  const addProject = () => {

  }
  return (
    <>
    <div className='btn btn-primary mb-4'>Projects</div>
      <div className='d-flex  m-1 mb-3  b-5 '> 
        <input placeholder='Search Projects' className='form-control w-75 me-2'/> <button onClick={addProject} className='btn btn-success bi bi-plus'>+</button>
      </div>
    </>
  )
}

export default Add