import Card from "../UI/Card"
import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
    padding: 1rem;
`
const Li = styled.li`
    border: 1px solid #ccc;
    padding: .5rem;
    margin: .5rem 0;
`


const UserList = props => {

    const { userList } = props


    return (
        <Card>
            <Ul>
                {userList.map((user, id) => (
                    <Li key={id}>
                        {user.username} ({user.age} years old)
                    </Li>
                ))}
            </Ul>
        </Card>
    )
}
export default UserList