import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import {ReactComponent as MagnifyingGlass} from '../assets/magnifying-glass.svg';
import {ReactComponent as Cross} from '../assets/cross.svg';

interface State {
  input: string;
}

export default function InputField() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    input: '',
  });
 
  // Changes the input value
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Function for removing text in inputfield
  const handleClickRemove = () => {
    setValues({ ...values, input:''});
  };

  /*
  const handleClickSearch = () => {
    setValues({ ...values,  });
  };*/
  
  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} >
          <OutlinedInput
            id="outlined-search"
            placeholder="Search"
            value={values.input}
            style={{borderRadius:0, paddingRight: '0.8rem'}}
            onChange={handleChange('input')}
            endAdornment={
              
              <InputAdornment position="end">
                {values.input != "" ? 
                <>
                  <IconButton
                    id="removeBtn"
                    aria-label="remove text input"
                    onClick={handleClickRemove}
                    edge="end"
                  >
                    <Cross style={{paddingRight: '0.5rem'}}/>
                  </IconButton> 
                  <IconButton
                    aria-label="search"
                    //onClick={handleClickSearch}
                    edge="end"
                    className={classes.btnSearchBlue}
                  >
                  <MagnifyingGlass
                  style={{color: 'white'}}/>
                  </IconButton>
                </>
                : 
                <IconButton
                  aria-label="search"
                  //onClick={handleClickSearch}
                  edge="end"
                  style= {{borderRadius: 0, padding: '1rem'}}
                >
                <MagnifyingGlass/>
                </IconButton>}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '70vw',
      margin: '0 15rem',
      display: 'flex'
    },
    btnSearchBlue: {
      borderRadius: 0, 
      padding: '1rem', 
      backgroundColor: '#0f4fa8'
    }
  }),
);