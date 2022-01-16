
import { Container, TextContainer } from './styles'

export const ContactItem = ({ textOne, textTwo, linkOne, linkTwo, Icon }) => {

    return (
        <Container>
            <Icon size={50} color="#fff" />
            <TextContainer>
                <a href={linkOne} target="_blank">{textOne}</a>
                {textTwo && <a href={linkTwo} target="_blank">{textTwo}</a>}
            </TextContainer>
        </Container>
    )
}