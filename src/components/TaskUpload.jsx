import React, {useRef} from 'react';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import {API_URL} from "../config";

function TaskUpload() {
    const formRef = useRef();

    const uploadFile = e => {
        const blob = new Blob(e.target.files, {type: 'application/json'});
        axios.post(API_URL + `files`, blob);
        formRef.current.reset();
    };

    return (
        <Box px={5} py={4}>
            <Alert severity="info">
                1. Upload Tasks.json file
                <br/>
                2. Wait several seconds foe new tasks being appeared
                <br/>
                3. Wait a minute to see tasks execution result
                <br/>
                4. Tasks will be sent to the corresponding service N=3 items per minute. You can change N from the
                backend configuration file
            </Alert>

            <Box mt={2}>
                <form ref={formRef} onSubmit={uploadFile} encType={'multipart/form-data'} action={''}>
                    <label htmlFor="file-upload-input" style={{display: 'flex', cursor: 'pointer'}}>
                        <Box display={'flex'} alignContent={'center'}>
                            <CloudUploadIcon fontSize={'large'}/>
                            <Box component={'span'} ml={2} pt={1}>Upload Tasks File</Box>
                        </Box>

                        <input
                            style={{'visibility': 'hidden', height: 0}}
                            id={'file-upload-input'}
                            type={'file'}
                            name={'file'}
                            onChange={uploadFile}
                        />
                    </label>
                </form>
            </Box>
        </Box>
    )
};

export default TaskUpload;