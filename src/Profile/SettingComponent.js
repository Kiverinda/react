import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { editedProfile } from './profileSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonAvatar: {
        marginTop: '20px',
        margin: '0 auto',
        height: '150px',
        width: 'auto',
    },
    imgAvatar: {
        height: '150px',
        width: 'auto',
    },
    fileds: {
        paddingTop: '30px',
        width: '100%'
    },
    fieldText: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '20px',
        "& .MuiOutlinedInput-root": {
            borderRadius: '10px',
            width: '90%'
        },
        "& .MuiInputLabel-outlined": {
            transform: 'translate(35px, 20px) scale(1)',
        },
        "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
            transform: 'translate(40px, -6px) scale(0.75)',
        }
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: '90%',
        left: '80%',
        right: 0,
    },
}));


const SettingComponent = () => {
    const classes = useStyles();

    const profile = useSelector(state => state.profile.data.profile);

    const [isEdited, setIsEdited] = useState(false);
    const [inputName, setInputName] = useState(profile.name);
    const [inputNickname, setInputNickname] = useState(profile.nickname);
    const [inputSurname, setInputSurname] = useState(profile.surname);
    const [inputBio, setInputBio] = useState(profile.bio);
    const dispatch = useDispatch();


    const editedFieldName = (e) => {
        setInputName(e.target.value);
        setIsEdited(true);
    }

    const editedFieldSurname = (e) => {
        setInputSurname(e.target.value);
        setIsEdited(true);
    }

    const editedFieldBio = (e) => {
        setInputBio(e.target.value);
        setIsEdited(true);
    }

    const editedFieldNickname = (e) => {
        setInputNickname(e.target.value);
        setIsEdited(true);
    }

    const editedFormProfile = () => {
        dispatch(editedProfile({
            name: inputName,
            surname: inputSurname,
            bio: inputBio,
            nickname: inputNickname,
        }));
        setIsEdited(false);
    }

    return (
        <div className={classes.root}>
            <Button className={ classes.buttonAvatar } >
                <Avatar className={ classes.imgAvatar } alt="Dmitriy" src="/images/1.jpg" />
            </Button>
            <div className={ classes.fileds }>
                <TextField
                    required
                    id="outlined"
                    label="Name"
                    variant="outlined"
                    className={classes.fieldText}
                    value={inputName}
                    onChange={editedFieldName}
                />
                <TextField
                    required
                    id="outlined"
                    label="Surname"
                    variant="outlined"
                    className={classes.fieldText}
                    value={inputSurname}
                    onChange={editedFieldSurname}
                />
                <TextField
                    required
                    id="outlined"
                    label="Bio"
                    variant="outlined"
                    className={classes.fieldText}
                    value={inputBio}
                    onChange={editedFieldBio}
                />
                <TextField
                    required
                    id="outlined"
                    label="Nickname"
                    variant="outlined"
                    className={classes.fieldText}
                    value={inputNickname}
                    onChange={editedFieldNickname}
                />
            </div>
            {isEdited &&
                <Fab id="fabButton"
                    onClick={editedFormProfile}
                    color="primary"
                    aria-label="edit"
                    className={classes.fabButton}
                >
                    <CheckIcon />
                </Fab>
            }
        </div>


    );
}

export default SettingComponent;