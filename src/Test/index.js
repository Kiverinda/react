import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TARGET_API_URL, setData, setError, setLoading} from './testSlice';
import { CircularProgress, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100vh',
        height: '100vh',
        margin: '0 auto'
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70vh',
        height: '70vh',
        '& img':{
            height: '70vh',
            width: 'auto'
        }
    }
}));

const getDataFromApi = () => async (dispatch, getState) => {
    const loading = getState().test.loading;
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const responce = await fetch(TARGET_API_URL);
            if (!responce.ok) {
                throw new Error("Something went wrong")
            }
            const result = await responce.json();
            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        }
        finally {
            dispatch(setLoading(false));
        }
    }
}

const TestComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector((state) => state.test);

    const getThankData = useCallback(() => dispatch(getDataFromApi()), [dispatch]);
    
    useEffect(() => {
        getThankData();
    }, [getThankData]);
console.log(data)
    return (
        <div className={ classes.wrapper }>
            <div className={classes.imageWrapper}>
                {loading && <CircularProgress />}
                {error && <div>"Error request"</div>}
                {!error && !loading && data && <img src={data[0].url} alt="foto cat"/>}
            </div>
                
            <Button variant="contained" color="primary" disabled={loading} onClick={getThankData}>
                View image
            </Button>
        </div>
    )
}

export default TestComponent;