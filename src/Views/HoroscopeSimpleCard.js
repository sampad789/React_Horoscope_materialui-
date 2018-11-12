import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function HorscopeSimpleCard(props) {
    const { classes } = props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
         
          <CardContent>
            <Typography gutterBottom variant="h5" >
             {props.horoscope}
            </Typography>
            <Typography component="p">
        {props.description}

            </Typography>
            <Typography  >
              Compatibility : {props.compatibility }
            </Typography>
            <Typography >
            Lucky Number:  {props.lucky_number}
            </Typography>
            <Typography >
             Lucky Time : {props.lucky_time}
            </Typography>
            <Typography >
              Lucky Color : {props.color}
            </Typography>
            <Typography >
              Mood : {props.mood}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }
  

HorscopeSimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorscopeSimpleCard);