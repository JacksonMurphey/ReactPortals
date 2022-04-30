import { Wrapper } from "./CardStyles"



const Card = props => {

    const { className } = props

    return (
        <Wrapper className={`${className}`}>
            {props.children}
        </Wrapper>

    )
}
export default Card