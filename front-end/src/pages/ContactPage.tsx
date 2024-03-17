import styled from "@emotion/styled";
import { ContactInfo, SendMailComponent } from "../components";

export const ContactPage = () => {

    return(
        <StyledContactPage>
            <ContactInfo />
            <SendMailComponent />
        </StyledContactPage>
    );
}

const StyledContactPage = styled.div`
    height: 91vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;