import React from 'react';
import Box from '@material-ui/core/Box';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

function Profile(props) {
    const {fields} = props;

    return (
        <Box py={2} px={4}>
            <MenuList>
                <MenuItem>
                    <Box display={'flex'}>
                        <Box>
                            <Avatar alt="Remy Sharp" src={fields.picture.url}/>
                        </Box>
                        <Box pt={1} ml={2}>
                            <Typography>{fields.name}</Typography>
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem>
                    <Box mr={2}><Typography variant={'body2'}><b>Facebook ID:</b></Typography></Box>
                    <Typography variant={'body2'}>{fields.id}</Typography>
                </MenuItem>
                <MenuItem>
                    <Box mr={2}><Typography variant={'body2'}><b>First Name:</b></Typography></Box>
                    <Typography variant={'body2'}>{fields.first_name}</Typography>
                </MenuItem>
                <MenuItem>
                    <Box mr={2}><Typography variant={'body2'}><b>Email:</b></Typography></Box>
                    <Typography
                        variant={'body2'}>{fields.email || 'Email was not set from user\'s profile'}</Typography>
                </MenuItem>

                <Box pl={2} pt={1}>
                    <Typography variant={'h5'}>Languages</Typography>
                    <br/>

                    {!fields.languages && "Languages was not set from user's profile"}

                    {!!fields.languages &&
                    <Box display={'flex'}>
                        {
                            fields.languages.map(lang => {
                                return (
                                    <Box mr={1} key={lang.id}>
                                        <Chip
                                            label={lang.name}
                                            clickable
                                            color="primary"
                                        />
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    }
                </Box>
            </MenuList>
        </Box>
    )
}

export default Profile;