import { Table } from '@mui/material'
import React from 'react'

const Tasks = ({ selectedItem }) => {
  return (
    <div>

      <Table striped>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Task</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {/* {selectedItem.map((item) => {
            <>
              <td></td>
              <td></td>
              <td></td>
            </>
          })} */}
          <tr>
            <td>1</td>
            <td>{selectedItem}</td>
            <td>{selectedItem}</td>
            <td>{selectedItem}</td>
            <td>{selectedItem}</td>
            <td>{selectedItem}</td>
          </tr>
        </tbody>
      </Table>
      <p>Selected Item : {selectedItem}</p>
    </div>
  )
}

export default Tasks