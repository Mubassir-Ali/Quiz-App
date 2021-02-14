import React,{useState} from 'react';
import {
	Container,
	Box,
	Card,
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
		backgroundColor: theme.palette.grey[50]
	},
	pad: {
		padding: theme.spacing(3),
		backgroundColor: theme.palette.grey[100],
		textAlign:"center",
		
	},
	header: {
		textAlign: 'center',
		backgroundColor: theme.palette.primary.main,
	},
	replay:{
		alignItems:"center",
		justifyContent:"center"
	}
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
				<Box px="20%" pt="15%">
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
				</Box>
			</Container>
		</React.Fragment>
	);
};

export default Result;
