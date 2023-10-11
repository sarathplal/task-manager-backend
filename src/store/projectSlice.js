import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [
        {
            id: 1,
            name: 'Project 1',
            tasks: [
                {
                    id: '',
                    name: '',
                    description: '',
                    deadline: '',
                    assignedProject: ''
                }
            ]
        }
    ]
}
const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        createProjects: (state, action) => {
            state.projects.push(action.payload)
        }
    }
})

export const { createProject } = projectSlice.actions;
export default projectSlice.reducer;