import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,
      marginBottom:60,
    //   marginLeft: 25
    },
    media: {
      height: 330,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

function DisplayMemes() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [memeData, setData] = React.useState([]);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(async () => {
        await fetch('http://127.0.0.1:8080/memes')
          .then(response => response.json())
          .then(result => {
            setData(result.data);
          });
      }, []);

      console.log(memeData)
    
    return(
        <div style={{marginTop: 30, marginLeft: 30}}>
            <div className="row">
                {memeData.map((meme)=> {
                    return(
                        <div className="col-12 col-md-4">
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {meme.name[0]}
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={meme.name}
                                    subheader={meme.date}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={meme.url}
                                    title="Meme Image"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Caption: {meme.caption}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                    <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    >
                                    <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>
                                        This meme was uploaded by: {meme.name}
                                    </Typography>
                                    <Typography paragraph>
                                        The image source of this meme can be found at this link: {meme.url}
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default DisplayMemes;