import { useState } from "react";
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
            name: 'Inna',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'ReadySteady',
            description: 'ToDoApp that works with selfmade REST API and have alot of functionality',
            image: './',
        },
        {
            name: 'Kocham koty',
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
    ];

    const [ filterValue, setFilterValue ] = useState('');
    console.log(filterValue)

    return(
    <>
        <Header>
            <h1>Here u can check my creations</h1>
            <Filter>
                <input onChange={(e:any) => setFilterValue(e.target.value) } type="text" placeholder="search..." />
            </Filter>
        </Header>
        {
        filterValue === '' ? 

            <StyledProjectsList>
                {projects.map((item, i) => {
                    return <Project key={i} data={item}/>
                })}
            </StyledProjectsList>

        : 
            <StyledProjectsList>
                {projects.filter(item => item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())).map((item, i) => {
                    return <Project key={i} data={item}/>
                })}
            </StyledProjectsList>
        }

    </>
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

const Header = styled.div`
    position: relative;
    height: 50px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        color: white;
    }

    @media screen and (max-width: 1250px) {
        font-size: 80%;
    }

    @media screen and (max-width: 1000px) {
        font-size: 80%;
        justify-content: left
    }

    @media screen and (max-width: 800px) {
        height: 100px;
        flex-direction: column;
        
        div {
            height: 40%;
            width: 100%;
            position: static;
            justify-content: left;
            margin-left: 5px;
        }

        h1 {
            height: 50%;
            width: 100%;
            overflow: visible;
            text-align: left;
            margin-left: 5px;
        }
    }

    @media screen and (max-width: 560px) {
        height: 150px;
    }
`;

const Filter = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        height: 32px;
        width: 154px;
        border-radius: 10px;
        color: white;
        border: none;
        background: rgb(70, 65, 65);
        padding: 8px;
    }
`;

