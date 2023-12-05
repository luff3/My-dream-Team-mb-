import React from "react";
import styled from "styled-components";
import Bradok from "../Assests/Brad.jpg";
import Ya from "../Assests/Ya.jpg";
import Sophia from "../Assests/Sophia.jpg";
import Ivan from "../Assests/Ivan.png";

// Фон приницпі можеш лишити
const TeamContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TeamHeader = styled.h1`
  color: black;
  margin-top: 40px;
`;

const MemberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const MemberBlock = styled.div`
  width: 200px;
  padding: 10px;
  margin: 100px 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const teamMembers = [
  {
    id: 1,
    name: "Vasyl Peleshko",
    position: "TeamLead",
    about: "Genius frontend developer(node + react), Sombra I`m waiting for your offer",
    image: Ya,
  },
  {
    id: 2,
    name: "Maksym Pelyno",
    position: "Strong Senior Dev Node",
    about: "Genius frontend developer, Sombra I`m waiting for your offer",
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
    name: "Ivan Petriv",
    position: "Unftnl Senior Dev Python",
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
              {member.about ? <p>{member.about}</p> : <p>About</p>}
            </div>
          </MemberBlock>
        ))}
      </MemberContainer>
    </TeamContainer>
  );
};

export default Our;
