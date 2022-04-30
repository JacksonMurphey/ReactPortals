import Card from "./Card"
import Button from "./Button"
import classes from './ErrorModal.module.css'
import React from "react"
import ReactDom from 'react-dom'


//JSX WRAPPERS to use to prevent unecessary <div>'s

//Empty Tags: 
//wrap your jsx elements with empty html tags: <> </> 

//React Fragments:
//To use React.Fragment, you can just wrap your jsx in <React.Fragment></React.Fragmetn>
//Or you can import {Fragment} from 'react' then wrap your jsx with <Fragment></Fragment>

//Empty Component Wrapper: 
//Example of creating an empty wrapper component:
// const Wrapper = props => {
//     return props.children
// }
// export default Wrapper


const ErrorModal = props => {

    const { title, message, errorHandler } = props


    const Backdrop = props => {
        return <div className={classes.backdrop} onClick={errorHandler} />
    }

    const ModalOverlay = props => {

        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>

                <div className={classes.content}>
                    <p>{message}</p>
                </div>

                <footer className={classes.actions}>
                    <Button onClick={errorHandler}>Okay</Button>
                </footer>

            </Card>
        )
    }

    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={errorHandler} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay onClick={errorHandler} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErrorModal