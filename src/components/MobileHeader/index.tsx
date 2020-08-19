import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4E03AQGUPZKsLHKS-A/profile-displayphoto-shrink_100_100/0?e=1603324800&v=beta&t=SlR2kw42ZjGKg9i0ANiA-TbSMV3Ruo1S4-6dlZshylM" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
