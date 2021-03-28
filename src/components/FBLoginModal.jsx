import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import FacebookLogin from 'react-facebook-login';

function FBLoginModal(props) {
    return (
        <div>
            <Dialog open={props.open}>
                <DialogTitle id="alert-dialog-title">Please Login To Continue</DialogTitle>
                <DialogContent>
                    <Alert severity="warning">
                        This is a Facebook test application. You need to use credentials of the registered test user
                        provided below, to be able to login without errors
                    </Alert>

                    <Box my={2}>
                        <Box><b>Test Email:</b> usbbhxifev_1616857118@tfbnw.net</Box>
                        <Box><b>Test Password:</b> wef%$%!@123</Box>
                    </Box>

                    <FacebookLogin
                        appId="298880124911035"
                        autoLoad={true}
                        fields="id,name,email,first_name,picture,languages"
                        scope={'email,user_likes,public_profile'}
                        callback={props.responseFacebook}
                    />
                    <Box mb={2}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default FBLoginModal;

