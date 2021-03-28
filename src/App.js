import React, {useState} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Profile from './components/Profile';
import TaskUpload from './components/TaskUpload';
import FBloginModal from './components/FBLoginModal';
import {API_URL} from "./config";
import TaskList from "./components/TaskList";

const UNEXPECTED_ERROR_MESSAGE = 'Unexpected Error: Please make sure that you use `HTTPS` and you have set correct `API_URL` in `src/config.js`';

function App() {
    const [profile, setProfile] = useState();
    const [showLogin, setShowLogin] = useState(true);
    const [error, setError] = useState('');

    const getProfile = () => {
        axios.get(API_URL + 'users/me').then(resp => {
            setProfile(resp.data.data);
            setShowLogin(false);
        }).catch((err) => {
            if (err.response.status === 401) {
                setShowLogin(true);
            } else {
                setShowLogin(false);
                setError(UNEXPECTED_ERROR_MESSAGE);
            }
        })
    };

    const responseFacebook = resp => {
        axios.get(API_URL + `auth/access_token?facebookToken=${resp.accessToken}`).then(resp => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.data;
            getProfile();
        });
    };

    return (
        <Container fixed>
            {error && <Alert severity="error">{error}</Alert>}

            {profile && !error && <Box py={5}>
                <Paper>
                    <Profile fields={profile}/>
                    <TaskUpload/>
                    <TaskList/>
                </Paper>
            </Box>}

            <FBloginModal open={showLogin} responseFacebook={responseFacebook}/>
        </Container>
    );
}

export default App;