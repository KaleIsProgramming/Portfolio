import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

interface item {
    to: string;
    name: string;
}

export const NavBar = () => {
    const [ navItems, setNavItems ] = useState([{to:'/projects', name:'Projects'}, {to:'/', name:'AboutMe'}, {to:'/contact', name:'Contact'}])
    const location = useLocation().pathname;

    const anchorHandler = (item: item) => {
        const i = navItems.indexOf(item);

        switch(i) {

            case 0:
                const temp: item[] = [navItems[(navItems.length-1)]];
                for(let j = 0; j < (navItems.length - 1); j++) {
                    temp.push(navItems[j]);
                }
                setNavItems(temp);
                break;
            case 2: 
                const tempv2: item[] = [];
                for(let j = 0; j < (navItems.length - 1); j++) {
                    tempv2.push(navItems[j+1]);
                }
                tempv2.push(navItems[0]);
                setNavItems(tempv2);
                break;
            default: 
                break;
        }
    }

    return(
        <StyledNavBar>
            <LeftContainer>
                { navItems.map(item => {
                if(location == item.to) {
                    return <MainAnchor to={item.to}>{item.name}</MainAnchor>
                } else {
                    return <Anchor onClick={() => anchorHandler(item)} to={item.to}>{item.name}</Anchor>
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