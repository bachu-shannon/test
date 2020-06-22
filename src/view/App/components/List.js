import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '30px',
        height: '600px',
    },
    card: {
        display: 'flex',
        marginBottom: '30px',
        background: theme.palette.background.default,
    },
    content: {
        paddingBottom: `${theme.spacing(2)}px !important`,
    },
    cover: {
        width: 151,
    },
    price: {
        display: 'flex',
        alignItems: 'center',
    }
}));

const List = ({ items = [] }) => {
    const classes = useStyles();

    function renderCard() {
        return items.map((item, index) => {
            return (
                <Grid item xs={12} key={index}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image={item.imageURLs.get(0)}
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {item.productName}
                                </Typography>
                                <div className={classes.price}>
                                    <Typography component="h6" variant="h6" style={{ marginRight: "30px" }}>
                                        Price:
                                    </Typography>
                                    <Typography variant="h5">
                                        {item.price}
                                    </Typography>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            )
        });
    }

    return (
        <div className={`${classes.root} list-wrapper`}>
            {!items.length
                ? <Typography variant="h4" component="h4" gutterBottom>
                    List is Empty(
                </Typography>
                : <Scrollbars style={{ width: '100%', height: 600 }} autoHide>
                    <Grid container spacing={0}>
                        {renderCard()}
                    </Grid>
                </Scrollbars>
            }
        </div>
    );
};

export default List