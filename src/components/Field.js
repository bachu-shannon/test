import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(2),
    },
    textField: {
        width: '100%',
    },
}));

export default ({ handleChange = () => {}, value = '' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-full-width"
                label="Filter by Name"
                fullWidth
                margin="normal"
                variant="outlined"
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
        </div>
    );
}