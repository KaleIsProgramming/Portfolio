import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SendMailComponent = () => {

    return(
        <MainContainer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >

            <InputContainer>
                <h3>E-Mail:</h3>
                <input type="email" required placeholder="E-mail..."/>
            </InputContainer>

            <InputContainer>
                <h3>Nick:</h3>
                <input type="text" required placeholder="Nick..."/>
            </InputContainer>
            <InputContainer>
                <h3>Message:</h3>
                <textarea name="mail" placeholder="Message..." required />
            </InputContainer>
            <InputContainer>
                <button type="submit">Send</button>
            </InputContainer>
        </MainContainer>
    )
}

const MainContainer = styled(motion.form)`
    width: 40%;
    height: 90%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: visible;

    @media screen and (max-width: 1340px) {
        min-height: 50vh;
        align-items: center;
        width: 60%;
        margin-bottom: 5%;
    }
`;

const InputContainer = styled.div`
    color: white;
    overflow: visible;

    h3 {
        margin: 20px 0px;
    }

    input {
        height: 40px;
        width: 400px;
        padding: 0px 16px;
        outline: none;
    }

    textarea {
        height: 10rem;
        width: 400px;
        padding: 10px 16px;
        outline: none;
        resize: none;
    }

    button {
        width: 400px;
        padding: 10px 0;
        color: white;
        background: #0fb4d9;
        border: none;
        margin-top: 5px;
        font-size: 1.2rem;
        cursor: pointer;
    }

    @media screen and (max-width: 1340px) {
        width: 400px;

        input {
            width: 100%;
        }

        button {
            width: 100%;
        }

        textarea {
            width: 100%;
        }
    }

    @media screen and (max-width: 600px) {
        width: 300px;


    }
`;
