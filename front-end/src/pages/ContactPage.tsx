import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ContactInfo, SendMailComponent } from "../components";

export const ContactPage = () => {

    return(
        <StyledContactPage
            initial={{opacity: 0, y: 200}} 
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 1}}
        >
            <ContactInfo />
            <SendMailComponent />
        </StyledContactPage>
    );
}

const StyledContactPage = styled(motion.div)`
    height: 91vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1340px) {
        
        flex-direction: column;
        overflow-y: scroll;
        

    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 90%;
        
    }

    ::-webkit-scrollbar-track {
        background: #525151;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #111111;
    }

`;