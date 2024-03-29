import { observer } from 'mobx-react-lite';
import React,{useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import {EVENTS_LIST } from '../../utils/config-routs';
import clsx from "clsx";

import CardHeader from "@material-ui/core/CardHeader";


import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import dateFormat  from 'dateformat';
import { Button, IconButton, Link } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
const useStyles = makeStyles({
    root: {        
      maxWidth: 300      
    },
    media: {
      height: 160,     
    },
  });  
const EventsItem = observer(({event}) => {
    
    const classes = useStyles();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);
    const [time, setTime] = useState("");  
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(true)
    useEffect(() => {
        const time = event.time
        const d = dateFormat(time)    
        setTime(d)
    })  
    // const v = history.push(EVENTSINFO+'/'+ event.id);
    return (
        <Card className={classes.root} onClick={()=>history.push(EVENTS_LIST+'/'+ event._id)}>
           
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                РФ
                </Avatar>
                }
                action={
                <IconButton aria-label="settings"  onClick={()=>setUpdate(!update)} color={update?'secondary':'disabled'}>
                    <CreateIcon />
                </IconButton>         
                }
                title={event.title}
                subheader={time}
            />     
            <CardMedia
                className={classes.media}
                image={event.img}       
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="р" >
                    {event.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={()=>setShow(!show)} color={show?'secondary':'disabled'}>
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share"  color={'secondary'}>
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="settings" color={'secondary'}>
                    <DeleteOutlineIcon />
                </IconButton>              
               
               
            </CardActions>
            
            
        </Card>
    );
})

export default EventsItem;



