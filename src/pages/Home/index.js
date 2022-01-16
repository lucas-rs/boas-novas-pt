import { 
    Container, 
    ImageBackground, 
    BannerWrapper,  
    ContactContainer, 
    TextContainer,
    CityBackground,
    ContactListContainer,
    ImageBackgroundContainer
 } from "./styles"
import { 
    FaWhatsapp,
    FaFacebook,
    FaEnvelope, 
    FaInstagram,  } from 'react-icons/fa'
import { ContactItem } from "../../components/ContactItem"


const contactList = [
    { 
        textOne: 'Miss. Fábia: +351912672541',
        linkOne: '',
        textTwo: 'Rev. Wanderson: ',
        linkTwo: '',
        Icon: FaWhatsapp  
    },
    {
        textOne: '@fabia_rocha_santos',
        linkOne: 'https://www.instagram.com/fabia_rocha_santos/',
        textTwo: '@estherrocha__',
        linkTwo: 'https://www.instagram.com/estherrocha__/',
        Icon: FaInstagram
    },
    {
        textOne: 'Wanderson Matheus',
        linkOne: 'https://pt-br.facebook.com/wanderson.matheus.906',
        Icon: FaFacebook
    },
    {
        textOne: 'boasnovasportugal@gmail.com',
        linkOne: 'mailto: boasnovasportugal@gmail.com',
        Icon: FaEnvelope
    }
]

export const Home = () => {

    return (
        <Container>
            <ImageBackgroundContainer>
                <ImageBackground>
                    <TextContainer>
                        <h1>BOAS NOVAS</h1>
                        <h3>PARA</h3>
                        <h1>Portugal</h1>
                    </TextContainer>
                </ImageBackground>
            </ImageBackgroundContainer>
            <BannerWrapper>
                <ContactContainer>
                    <h3>SEJA NOSSO</h3>
                    <h1>PARCEIRO</h1>
                    <ContactListContainer>
                    {contactList.map((item, index) => (
                    <ContactItem
                        key={index}
                        textOne={item.textOne}
                        textTwo={item.textTwo}
                        linkOne={item.linkOne}
                        linkTwo={item.linkTwo}
                        Icon={item.Icon}
                    />))}
                    </ContactListContainer>
                </ContactContainer>
                
            </BannerWrapper>
            <CityBackground >

            </CityBackground>
        </Container>
    )
}