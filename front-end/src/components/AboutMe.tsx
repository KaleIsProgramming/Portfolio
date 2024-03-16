import styled from "@emotion/styled";

export const AboutMe = () => {

    return(
        <WelcomeComponent>

            <LeftContainer>

            </LeftContainer>

            <RightContainer>

            </RightContainer>

        </WelcomeComponent>
    )
}

const WelcomeComponent = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;  
    background: rgb(31, 30, 30);
`;

const LeftContainer = styled.div`
    height: 100%;
    width: 50%;
`;

const RightContainer = styled.div`
    height: 100%;
    width: 50%;
`;