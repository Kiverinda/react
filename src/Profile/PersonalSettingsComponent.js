import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { editedName, editedNickname } from './profileSlice';
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

const PersonalSettingsComponent = () => {
    const classes = useStyles();
    const [inputName, setInputName] = useState('');
    const [inputNickname, setInputNickname] = useState('');
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.data);
    
    const onSaveName = () => {
        dispatch(editedName(inputName));
        setInputName('');
    };

    const onSaveNickname = () => {
        console.log(inputNickname)
        dispatch(editedNickname(inputNickname));
        setInputName('');
    };

    return (
        <div className={classes.textField}>
            <div className={classes.card}>
            <div className={classes.nameTitle}>Name</div>
            <div className={classes.nameValue}>{profile.name}</div>
            </div>
            <div className={classes.card}>
                <div className={classes.nameTitle}>New name</div>
                <div>
            <TextField
              className={classes.inputName}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onKeyDown={({ key }) => {
                if (key === 'Enter') { onSaveName()};
              }}
            />
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonSave}
              edge="end"
              onClick={onSaveName}
            >
              <SaveIcon />
                    </Button>
                    </div>
            </div>
            <div className={classes.card}>
            <div className={classes.nameTitle}>Nickname</div>
            <div className={classes.nameValue}>{profile.nickname}</div>
            </div>
            <div className={classes.card}>
                <div className={classes.nameTitle}>New nickname</div>
                <div>
            <TextField
              className={classes.inputName}
              value={inputNickname}
              onChange={(e) => setInputNickname(e.target.value)}
              onKeyDown={({ key }) => {
                if (key === 'Enter') { onSaveNickname()};
              }}
            />
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonSave}
              edge="end"
              onClick={onSaveNickname}
            >
              <SaveIcon />
                    </Button>
                    </div>
            </div>
        </div>
    )
};

export default PersonalSettingsComponent