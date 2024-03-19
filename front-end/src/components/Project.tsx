import { FC } from "react";
import styled from "@emotion/styled";
import { ProjectI } from "./";

interface DataI {
    data: ProjectI;
}

export const Project:FC<DataI> = ({data}) => {
    const {name, description, image} = data

    return(
        <StyledProject>
            <ImageContainer>
                {image}
            </ImageContainer>
            <NameContainer>
                {name}
            </NameContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    height: 25rem;
    width: 30%;
    margin: 5px 1.65% 24px 1.65%;
    background: rgb(70, 65, 65);
    border-radius: 10px;
    transition: 0.7s;
    cursor: pointer;

    &:hover {
        transition: 0.5s;
        scale: 1.025;
    }

    @media screen and (max-width: 1200px) {
        width: 45%;
        margin: 5px 2.5% 24px 2.5%;
    }

    @media screen and (max-width: 1200px) {
        width: 45%;
        margin: 5px calc(5% - 5px) 24px 5px;
    }

    @media screen and (max-width: 725px) {
        width: 90%;
        margin: 5px 5% 48px 5px;
    }
`;

const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NameContainer = styled.h3`
    min-height: 36px;
    width: 100%;
    color: #21e521;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DescriptionContainer = styled.p`
    height: 60%;
    width: 80%;
    margin-left: 10%;
    color: white;
`;

