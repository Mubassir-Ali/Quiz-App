import React from "react";
import { QuizType } from "./../Types/Types";
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
  FormLabel,Divider, Button
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";


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
    backgroundColor: theme.palette.grey.A100
  },
}));

export const QuizCard = (props: QuizType) => {
  const classes = useStyle();
  const { answer, question, options } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
        <Box px="20%" pt="15%">
          <form>
            <Card>
              <CardActionArea>
                <CardHeader title="Quiz" subheader="Question No. 1" className={classes.header} />
                <div className={classes.pad}>   
                    <Typography variant="h6" >{question}</Typography>
                    <FormLabel>Select one of the following</FormLabel>
                    
                    </div>
                    {/* <Divider/> */}
              </CardActionArea>
              <CardContent>
                
                <FormControl>
                  <RadioGroup>
                    {options.map((opt, index) => (
                      <Typography variant="subtitle2">
                        <FormControlLabel
                          label={opt}
                          control={<Radio />}
                          value={opt}
                        />
                      </Typography>
                    ))}

                    <Button >Submit</Button>
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};
