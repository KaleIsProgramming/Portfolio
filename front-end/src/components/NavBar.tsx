import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
    const navItems = [{to:'/projects', name:'Projects'}, {to:'/', name:'AboutMe'}, {to:'/contact', name:'Contact'}];
    const location = useLocation().pathname;

    return(
        <StyledNavBar>
            <LeftContainer>
                { navItems.map(item => {
                if(location == item.to) {
                    return <MainAnchor to={item.to}>{item.name}</MainAnchor>
                } else {
                    return <Anchor to={item.to}>{item.name}</Anchor>
                }
}) }
            </LeftContainer>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;  
    background: rgb(31, 30, 30);

`;

const LeftContainer = styled.div`
    height: 100%;
    width: 30%;
    margin-left: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const MainAnchor = styled(NavLink)`
    font-size: 140%;
    margin-top: 10%;
    color: #21e521;
    text-decoration: none;

    &:hover {
        transition: 0.3;
        scale: 1.05;
    }
`;

const Anchor = styled(NavLink)`
    color: white;
    text-decoration: none;

    &:hover {
        transition: 0.3;
        scale: 1.05;
    }
`;