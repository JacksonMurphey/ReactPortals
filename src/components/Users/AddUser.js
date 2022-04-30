import Card from "../UI/Card"
import { Form } from "./AddUserElements"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"
import { useState, useRef } from 'react'

const AddUser = props => {

    //useRef returns a object with a 'current' prop that holds the value we can work with or mutate later.
    //to get the current value, or to view it, you could run console.log(namInputRef.current.value), much like event inputs; e.target.value
    //Now that we are using Ref, we can eliminate our [user,setUser] = useState, and the cooresponding handlers. 
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const { addUser } = props
    const [error, setError] = useState()

    //COMMENTED OUT BECAUSE I AM NOW USING useRef()
    // const [user, setUser] = useState({
    //     username: '',
    //     age: ''
    // })

    //COMMENTED OUT BECAUSE I AM NOW USING useRef()
    // const userHandler = e => {
    //     let newUser = { ...user }
    //     newUser[e.target.name] = e.target.value
    //     setUser(newUser)
    // }

    const addUserHandler = e => {
        e.preventDefault()


        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        // Now that we have the above variables that contain our input values, we can update our code:
        if (enteredName.trim().length === 0 || enteredAge.length === 0) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a valid name and age"
            })
            return
        }
        if (enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a valid age greater than 0"
            })
            return
        }
        const newUser = {
            username: enteredName,
            age: enteredAge
        }
        addUser(newUser)
        console.log(newUser)

        //__NOTE_:
        //THIS OK TO DO IN THE CONTEXT OF AN INPUT FIELD, TO RESET THE FIELD WHEN USING REFs. THIS MANIPULATES THE DOM WITHOUT REACT DOING IT. 
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        //RARELY DO THIS!!! RARELY USE REFs TO MANIPULATE THE DOM!!!!

        //COMMENTED OUT BECAUSE I AM NOW USING useRef()
        //Preventing inputing from being blank on submission
        // if (user.username.trim().length === 0 || user.age.length === 0) {
        //     setError({
        //         title: 'Invalid Input',
        //         message: "Please enter a valid name and age"
        //     })
        //     return
        // }
        //A user must put in an integer greater than 0. since age is set to a string, we can convert it to an int using the (+)sign before our variable.
        // if (+user.age < 1) {
        //     setError({
        //         title: 'Invalid Input',
        //         message: "Please enter a valid age greater than 0"
        //     })
        //     return
        // }
        // addUser(user)
        // console.log(user)
        // setUser({
        //     username: '',
        //     age: ''
        // })
    }

    const errorHandler = () => {
        setError(null)
    }


    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />}
            <Card>
                <Form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        // onChange={userHandler}
                        // value={user.username}
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (In Years)</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        // onChange={userHandler}
                        // value={user.age}
                        ref={ageInputRef} />

                    <Button type='submit'>Add User</Button>
                </Form>
            </Card>
        </>
    )

}
export default AddUser