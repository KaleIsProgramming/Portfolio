import styled from "@emotion/styled";

export const NavBar = () => {

    return(
        <StyledNavBar>

            <></>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;  
    background: rgb(31, 30, 30);
    align-items: center;
    justify-content: center;
`;

const LeftContainer = styled.div`
    height: 100%;
    width: 60%;

    a {
        color: white;
        text-decoration: none;
    }
`;