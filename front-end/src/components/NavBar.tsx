import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
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

    useEffect(() => {
        for(let i = 0; i < navItems.length; i++) {
            
            if((location === navItems[i].to) && (navItems.indexOf(navItems[i]) !== Math.floor(navItems.length/2))) {
                anchorHandler(navItems[i])
            }
        }

    },)

    return(
        <StyledNavBar>
            <MainContainer>
                { navItems.map((item, i) => {
                if(location === item.to) {
                    return <MainAnchor key={i} to={item.to}>{item.name}</MainAnchor>
                } else {
                    return <Anchor key={i} onClick={() => anchorHandler(item)} to={item.to}>{item.name}</Anchor>
                }
}) }
            </MainContainer>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;  
    justify-content: center;
    background: rgb(31, 30, 30);

`;

const MainContainer = styled.div`
    height: 100%;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1250px) {
        width: 375px;
    }

    @media screen and (max-width: 450px) {
        width: 325px;
    }

    @media screen and (max-width: 320px) {
        width: 275px;
    }
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