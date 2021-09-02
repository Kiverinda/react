import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { editedPassword } from './profileSlice';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    textField: {
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '40px'
    },
    nameTitle: {
        marginRight: '30px',
        color: 'red',
        marginTop: '16px',
        fontSize: '18px',
    },
    nameValue: {
        marginLeft: '35px',
        marginTop: '16px',
        fontSize: '18px'
    },
    inputName: {
        padding: '6px 0 7px',
        fontSize: '18px'
    },
    buttonSave: {
        // height: '45px',
        // width: '50px',
         left: '20px'
    }
}));

const SecuritySettingsComponent = () => {
    const classes = useStyles();
    const [inputPasswordOne, setInputPasswordOne] = useState('');
    const [inputPasswordTwo, setInputPasswordTwo] = useState('');
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.data);
    console.log(profile);
    
    const onSavePassword = () => {
        if (inputPasswordOne === inputPasswordTwo) {
            dispatch(editedPassword(inputPasswordTwo));
            setInputPasswordOne('');
            setInputPasswordTwo('');
        }
    };

    return (
        <div className={classes.textField}>
            <div className={classes.card}>
            <div className={classes.nameTitle}>Login</div>
            <div className={classes.nameValue}>{profile.login}</div>
            </div>
            
            <div className={classes.card}>
                <div className={classes.nameTitle}>New password</div>
                <div>
                    <TextField
                        className={classes.inputPassword}
                        value={inputPasswordOne}
                        onChange={(e) => setInputPasswordOne(e.target.value)}
                    />
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.nameTitle}>Replace password</div>
                <div>
                    <TextField
                        className={classes.inputName}
                        value={inputPasswordTwo}
                        onChange={(e) => setInputPasswordTwo(e.target.value)}
                        onKeyDown={({ key }) => {
                            if (key === 'Enter') { onSavePassword()};
                        }}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.buttonSave}
                        edge="end"
                        onClick={onSavePassword}
                    >
                    <SaveIcon />
                    </Button>
                </div>
            </div>

        </div>
    )
};

export default SecuritySettingsComponent