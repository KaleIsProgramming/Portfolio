import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ProjectsList } from "../components";

export const ProjectsPage = () => {

    return(
        <StyledProjectsPage
            initial={{opacity: 0, y: 200}} 
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 1}}
        >
            <ProjectsList />
        </StyledProjectsPage>
    )
}

const StyledProjectsPage = styled(motion.div)`
    height: 91vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(31, 30, 30);
`;

