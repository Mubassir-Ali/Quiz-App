import React,{useState} from 'react';
import {
	Container,
	Box,
	Card,
	Paper,
	makeStyles,
	CardHeader,
	CardActionArea,
	Typography,
	IconButton,
	CardActions,
	
	

} from '@material-ui/core';
import {resultType} from '../Types/Types'
import ReplayIcon from '@material-ui/icons/Replay';
const useStyle = makeStyles((theme) => ({
	root: {
		minWidth: '100%',
		minHeight: '100vh',
		position:"absolute",
		backgroundColor: theme.palette.grey[300],
		
	},
	pad: {
		padding: theme.spacing(3),
		backgroundColor: theme.palette.grey[100],		
		textAlign:"center",
		
	},
	header: {
		textAlign: 'center',
		color: "white",
		backgroundColor: theme.palette.primary.main,
	},
	replay:{
		alignItems:"center",
		justifyContent:"center"
	},
	layout: {
		[theme.breakpoints.up("md")]: {
		  margin: "6rem 5rem",
		},
		[theme.breakpoints.up("lg")]: {
		  margin: "6rem 10rem",
		},
		[theme.breakpoints.down("sm")]: {
		  marginTop: "10rem",
		},
	  },
}));

const Result = (props:resultType) => {
	const classes = useStyle();
    const {scores,total,callback}=props
	const [replay, setReplay]=useState(total)

	const handler =(e:any)=>{
		setReplay(0)
		console.log("click");
		

	}
	return (
		<React.Fragment>
			<Container className={classes.root}>
				<Paper className={classes.layout}>
					<Card>
						<CardActionArea>
							<CardHeader title="Quiz Result" className={classes.header} />
							<div className={classes.pad}>
								<Typography variant="h6">{`${scores} Currect Answers out of ${total} Questions`} </Typography>
							</div>
						</CardActionArea>
						<form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,replay)}>
						<CardActions className={classes.replay}>
							<IconButton type="submit" onClick={handler}>
								<ReplayIcon />
							</IconButton>

						</CardActions>

						</form>
					
						
					</Card>
				</Paper>
			</Container>
		</React.Fragment>
	);
};

export default Result;
