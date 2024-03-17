import styled from "@emotion/styled";
import { ProjectsList } from "../components";

export const ProjectsPage = () => {

    return(
        <StyledProjectsPage>
            <Header>Here u can check my creations</Header>
            <ProjectsList />
        </StyledProjectsPage>
    )
}

const StyledProjectsPage = styled.div`
    height: 91vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(31, 30, 30);
`;

const Header = styled.h1`
    height: 50px;
    width: 80%;
    text-align: center;
    color: white;
`;