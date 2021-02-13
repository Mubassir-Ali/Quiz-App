import React from 'react';
import {
	Container,
	Box,
	Card,

	makeStyles,
	CardHeader,
	CardActionArea,
	Typography,
	

} from '@material-ui/core';
import {resultType} from '../Types/Types'
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
	}
}));

const Result = (props:resultType) => {
	const classes = useStyle();
    const {scores,total}=props
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
					</Card>
				</Box>
			</Container>
		</React.Fragment>
	);
};

export default Result;
