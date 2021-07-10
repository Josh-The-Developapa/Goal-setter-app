import React from 'react'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import './ErrorModal.css'


const ErrorModal = (props) => {
    return (
    <Box className="Error-Modal-Box"> 
    <header className="header">
    <h2>{props.title}</h2>
    </header>
    <h3><b>{props.message}</b></h3>
    <Button variant="contained" style={{position: 'relative', left: '40%'}} onClick={props.onClickButton}>Okay</Button>
    </Box>
    )
}

export default ErrorModal