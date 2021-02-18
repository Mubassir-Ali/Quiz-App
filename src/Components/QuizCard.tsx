import React,{useState} from "react";
import {QuestionPropsType } from "./../Types/Types";
import {
    Container,
    Box,
    Card,
    CardContent,
    makeStyles,
    CardHeader,
    CardActionArea,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel, Button
} from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.grey[50],
    },
    pad: {

        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[100]
    },
    header: {
        textAlign: "center",
        color:"white",
        backgroundColor: theme.palette.primary.main
    },
    xpadding:{
        padding: "0 3rem"
    }

}));

export const QuizCard = (props:QuestionPropsType) => {
    const classes = useStyle();
    const { callback, question,QNo ,options } = props;
    const [selectedAns, setSelectedAns] =useState("")



    const handler=(e:any)=>{
        console.log(e.target.value);
        setSelectedAns(e.target.value);
        
    }
    return (
        <React.Fragment>
           
            <Container className={classes.root}>
                <Box px="20%" pt="15%">
                    <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                        <Card >
                            <CardActionArea>
                                <CardHeader title="Quiz" className={classes.header} />
                                <Typography className={classes.header}>{`Question No. ${QNo+1}`}</Typography>
                                <div className={classes.pad}>
                                    <Typography variant="h6" >{question}</Typography>
                                    <FormLabel>Select one of the following</FormLabel>

                                </div>
                                {/* <Divider/> */}
                            </CardActionArea>
                            <CardContent>

                                <FormControl className={classes.xpadding}>
                                    <RadioGroup>
                                        {options.map((opt, index) => (
                                            <Typography variant="subtitle2" key={index}>
                                                <FormControlLabel
                                                    label={opt}
                                                    control={<Radio required/>}
                                                    value={opt}
                                                    checked={selectedAns===opt}
                                                    onChange={handler}
                                                    
                                                    
                                                />
                                            </Typography>
                                        ))}

                                        
                                    </RadioGroup>
                                  
                                </FormControl>
                                <Button variant="contained" color="primary" type="submit" fullWidth >Submit</Button>
                            </CardContent>
                        </Card>
                    </form>
                </Box>
            </Container>
        </React.Fragment>
    );
};

