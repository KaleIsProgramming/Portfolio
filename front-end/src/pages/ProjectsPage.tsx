import styled from "@emotion/styled";
import { ProjectsList } from "../components";

export const ProjectsPage = () => {

    return(
        <StyledProjectsPage>
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

