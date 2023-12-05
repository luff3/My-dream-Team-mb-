import React from 'react';
import styled from 'styled-components';
import Bradok from '../Assests/Brad.jpg';
import Ya from '../Assests/Ya.jpg';
import Sophia from '../Assests/Sophia.jpg';
import Ivan from '../Assests/Ivan.png';

// Фон приницпі можеш лишити
const TeamContainer = styled.div`
    text-align: center;
    padding: 20px;
    background: linear-gradient(to right, rgba(148,87,235,0.6), rgba(148,87,235,1)); /* Фіолетовий градієнт бекграунда */
    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
//Максим градієрт для заголовку
const TeamHeader = styled.h1`
color: black;
margin-top: 40px; /* Відступ від верхнього краю */
`;

const MemberContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;
//Максим градієнт
const MemberBlock = styled.div`
    width: 200px;
    padding: 10px;
    margin: 100px 40px; /* Відступи між блоками */
    border-radius: 8px;
    background: linear-gradient(to right, rgba(144,238,144,0.6), rgba(144,238,144,1)); /* Світло-зелений градієнт бекграунда */

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const teamMembers = [
{
    id: 1,
    name: 'Vasyl Peleshko',
    position: 'TeamLead',
    image: Ya,
},
{
    id: 2,
    name: 'Maksym Pelyno',
    position: 'Strong Senior Dev Node',
    image: Bradok,
},
{
    id: 3,
    name: 'Sofiia Mykhailova',
    position: 'Strong Senior Dev Angular',
    image: Sophia,
},
{
    id: 4,
    name: 'Ivan Petriv',
    position: 'Unftnl Senior Dev Python',
    image: Ivan,
},
];

const Our = () => {
    return (
        <TeamContainer>
        <TeamHeader>Our Dream Team</TeamHeader>
        <MemberContainer>
            {teamMembers.map((member) => (
            <MemberBlock key={member.id}>
                <MemberImage src={member.image} alt={member.name} />
                <div>
                <p>{member.name}</p>
                <p>{member.position}</p>
                </div>
            </MemberBlock>
            ))}
        </MemberContainer>
        </TeamContainer>
    );
};

export default Our;
