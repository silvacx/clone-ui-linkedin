import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGUPZKsLHKS-A/profile-displayphoto-shrink_100_100/0?e=1603324800&v=beta&t=SlR2kw42ZjGKg9i0ANiA-TbSMV3Ruo1S4-6dlZshylM"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Camila Silva</h1>
        <h2>Java Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
