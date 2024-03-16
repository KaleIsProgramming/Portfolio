import styled from "@emotion/styled";
import { NavBar, AboutMe  } from "../components";

export const MainPage = () => {

    return(
        <StyledMainPage>
            <NavBar />
            <AboutMe />
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
  min-height: 100vh;
  width: 100vw;  
`;