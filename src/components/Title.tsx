import React, { Children, FC} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const Title: FC = (props) =>{
    const classes = useStyles();
    return (
        <h3 className={classes.root}>{props.children}</h3>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '15rem'
    },
  }),
);

export default Title;

