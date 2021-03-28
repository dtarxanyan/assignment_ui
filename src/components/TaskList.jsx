import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Task from './Task'
import {API_URL} from "../config";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    let intervalId = null;

    useEffect(() => {
        intervalId = setInterval(() => {
            axios.get(API_URL + 'tasks').then(resp => setTasks(resp.data.data));
        }, 2000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <Box>
            <Box my={1} display={'flex'} style={{backgroundColor: 'lightgray'}}>
                <Box width={'25%'} my={1} mr={1} py={1} px={2}>ID</Box>
                <Box width={'25%'} my={1} mr={1} py={1} px={2}>Category</Box>
                <Box width={'25%'} my={1} mr={1} py={1} px={2}>Task</Box>
                <Box width={'25%'} my={1} mr={1} py={1} px={2}>Status</Box>
            </Box>

            {!tasks.length && <Box>
                <Alert severity="info">
                    Tasks are not loaded. Upload tasks.json to see new tasks
                </Alert>
            </Box>}

            {tasks.map(task => <Task data={task}/>)}
        </Box>
    )
}

export default TaskList;