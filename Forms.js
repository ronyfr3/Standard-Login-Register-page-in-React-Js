import React,{useState} from 'react';
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import CloseIcon from '@material-ui/icons/Close';
import {AiFillTwitterSquare} from 'react-icons/ai'
import Home from './Home'
import {Link} from 'react-router-dom'
import './Forms.css'
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
        color: '#00b09b',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#00b09b',
      }
  }
})(TextField)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    border:'none',
    padding: '15px',
    outline: 'none',
    boxShadow: '0 0 10px #00b09b;'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Forms() {
  const classes = useStyles();
  const[open,setOpen]=useState(true)
  const handleClick=()=>{
      setOpen(!open);
  }

  return (

      <div className='container'>
      {
          open ? (
    <form className={classes.root} id='form-field'>
       <h3 className='closeSign' onClick={handleClick}><CloseIcon/></h3>
       <h3 className='signIn'>Sign In</h3>
      {/* <CssTextField
        className={classes.margin}
        label="Your First Name"
        // variant="outlined"
        id="custom-css-outlined-input"
      />
      <CssTextField
        className={classes.margin}
        label="Your Last Name"
        // variant="outlined"
        id="custom-css-outlined-input"
      /> */}
      {/* <CssTextField
        className={classes.margin}
        label="Email"
        // variant="outlined"
        id="custom-css-outlined-input"
      /> */}
      <CssTextField
        className={classes.margin}
        label="Username"
        // variant="outlined"
        id="custom-css-outlined-input"
      />
      <CssTextField
        className={classes.margin}
        label="Password"
        // variant="outlined"
        id="custom-css-outlined-input"
      />
      <CssTextField
        className={classes.margin}
        label="Confirm Password"
        // variant="outlined"
        id="custom-css-outlined-input"
      />
      <p className='forget_pass'>Forget password?</p>
      <button className='SignIn_btn'>SIGN IN</button>
      <p className='orSignInWith'>Not a member?
      <span className='forget_pass'>
        <Link to='/register' className='register'>Register</Link>
      </span>
      </p>
      <p className='orSignInWith'>or Sign in with:</p>
      <div className='social_div'>
            <span className='social_logo'><AiFillFacebook/></span>
            <span className='social_logo'><AiOutlineGooglePlus/></span>
            <span className='social_logo'><AiFillTwitterSquare/></span>
      </div>
    </form>
    ) : (<Home/>)
      }
    </div>
    );
}
