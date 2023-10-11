import { Stack } from '@mui/material'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Add from '../../components/Add'

const Project = ({handleClick}) => {

  const project=[{
    id:1,
    name:'project 1',
    status:'todo'
  },
  {
    id:2,
    name:'project 2',
    status:'done'
  }
]

  const handleProject = () => {

  }
  const addProject = () => {

  }

  return (
    <>
      <div >
        <Stack
          direction={{ xs: 'column' }}
          justifyContent="space-between"
        >
          <ListGroup as="ol" numbered>
            <button as="li" onClick={()=>handleClick(project)}   className='btn btn-outline-secondary'>Project 1</button>
            <button as="li" onClick={()=>handleClick(project)}   className='btn btn-outline-secondary'>Project 2</button>
            {/* <button as="li" onClick={()=>handleClick("Project3")}   className='btn btn-outline-secondary'>Project 3</button> */}
          </ListGroup>
        </Stack>
      </div>
    </>
  )
}
export default Project