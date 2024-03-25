import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AboutMe = () => {

    return(
        <WelcomeComponent
            initial={{opacity: 0, y: 200}} 
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 1}}
        >

            <LeftContainer>
                <h1>Hi there!</h1>
                <p>
                    My name is Peter and I'm 20 year old student in <Important>Poznań University of Technology</Important>.
                    I started 
                    programming 2 years ago at my 4th year in technical school. In this 2 years
                    i have learned multiple programming languages like <Important>javascript  
                     with multiple frameworks</Important> and libraries, <Important>python</Important> with tinker for desktop apps,
                    <Important>lua</Important>, <Important>c</Important> and <Important>c++</Important> but at the end of the day i choose to became 
                    FullStack webdeveloper, so let me build a website for you
              </p>
            </LeftContainer>

            <RightContainer>

            </RightContainer>

        </WelcomeComponent>
    )
}

const WelcomeComponent = styled(motion.div)`
    height: 91vh;
    width: 100%;
    display: flex;  
    justify-content: center;
    align-items: center;
    background: rgb(31, 30, 30);
`;

const LeftContainer = styled.div`
    height: 75%;
    width: 40%;
    color: white;
    display: flex;
    flex-direction: column;

    h1 {
        width: 100%;
        margin-bottom: 16px;
        margin-top: 10%;
        color: #21e521;
    }

    p {
        font-size: 120%;
    }
`;

const RightContainer = styled(motion.div)`
    height: 75%;
    width: 40%;

`;

const Important = styled.span`
    color: #0fb4d9;
`;