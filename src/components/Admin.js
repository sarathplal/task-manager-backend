import React from 'react'
import Stack from '@mui/material/Stack';
import Add from './Add';

const Admin = ({ handleClick }) => {

  const project = [{
    id: 1,
    name: 'project 1',
    tasks: [
      {
        name: 'task 1',
        status: 'to-do',
        due: '10-10-23'
      },
      {
        name: 'task 2',
        status: 'done',
        due: '10-12-23'
      }
    ]
  },
  {
    id: 2,
    name: 'project 2',
    tasks: [
      {
        name: 'next task 1',
        status: 'to-do',
        due: '10-11-23'
      },
      {
        name: 'next task 2',
        status: 'done',
        due: '1-12-23'
      }
    ]
  }
  ]

  return (
    <>
      <div className="p-3"
      >
        <Stack
          direction={{ xs: 'column' }}
          spacing={{ xs: 1, md: 2 }}

        >
          <h4 className=" btn btn-secondary">Admin</h4>
          <Add />
          {
            project.map((project) => {
             return <button as="li" onClick={() => handleClick(project.name)} className='btn btn-outline-secondary'>{project.name}</button>
            })
          }
          {/* <button as="li" onClick={() => handleClick("Project2")} className='btn btn-outline-secondary'>Project 2</button>
          <button as="li" onClick={() => handleClick("Project3")} className='btn btn-outline-secondary'>Project 3</button> */}
        </Stack>

      </div>
    </>
  )
}

export default Admin