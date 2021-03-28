import React from 'react';
import Box from '@material-ui/core/Box';

const STATUS_SUCCESS = 1;
const STATUS_FAIL = 2;

const getStyle = data => {
    if (data.status === STATUS_SUCCESS) {
        return {backgroundColor: 'green', color: 'white'}
    }

    if (data.status === STATUS_FAIL) {
        return {backgroundColor: 'red', color: 'white'}
    }

    return {backgroundColor: 'white', color: 'black'}
};

function Task(props) {
    const {data} = props;
    const style = getStyle(data);

    return (
        <Box my={1} display={'flex'}>
            <Box width={'25%'} my={1} mr={1} py={1} px={2} style={style}>{data.id}</Box>
            <Box width={'25%'} my={1} mr={1} py={1} px={2} style={style}>{data.category}</Box>
            <Box width={'25%'} my={1} mr={1} py={1} px={2} style={style}>{data.task}</Box>
            <Box width={'25%'} my={1} mr={1} py={1} px={2} style={style}>{data.status}</Box>
        </Box>
    )
}

export default Task;