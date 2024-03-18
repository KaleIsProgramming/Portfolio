import styled from "@emotion/styled";

export const SendMailComponent = () => {

    return(
        <MainContainer>

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

const MainContainer = styled.form`
    width: 40%;
    height: 90%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const InputContainer = styled.div`
    color: white;

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
    }
`;
