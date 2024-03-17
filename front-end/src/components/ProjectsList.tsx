import styled from "@emotion/styled";
import { Project } from "./";

export interface ProjectI {
    name: string;
    description: string;
    image: string;
}

export const ProjectsList = () => {
    const projects: ProjectI[] = [
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ToDoAPP',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
    ]

    return(
        <StyledProjectsList>
            {projects.map((item, i) => {
                return <Project key={i} data={item}/>
            })}
        </StyledProjectsList>
    )
}

const StyledProjectsList = styled.div`
    position: relative;
    height: 70%;
    width: 80%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
`;
