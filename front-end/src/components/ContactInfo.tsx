import styled from "@emotion/styled";

export const ContactInfo = () => {

    return(
        <ContactInfoContainer>
            <Header>Piotr Kostecki</Header>
            <SubHeaders></SubHeaders>
            <SubHeaders>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:pio1kostecki@gmail.com">pio1kostecki@gmail.com</a>
            </SubHeaders>
        </ContactInfoContainer>
    )
}

const ContactInfoContainer = styled.div`
    height: 60%;
    width: 40%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.h1`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
`;

const SubHeaders = styled.h3`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    display: flex;

    a {
        color: white;
    }

    svg {
        
    }
`;