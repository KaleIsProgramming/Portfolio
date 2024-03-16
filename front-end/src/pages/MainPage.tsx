import styled from "@emotion/styled";
import { AboutMe  } from "../components";

export const MainPage = () => {

    return(
        <StyledMainPage>
            <AboutMe />
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
  height: 100vh;
  width: 100vw;  
`;