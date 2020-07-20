import React from 'react';

import Feed from '../Feed';

import {  
  Container, 
  Banner, 
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Rafael Melo</h1>
        <h2>@RafaScriptMelo</h2>

        <p>
          Fullstack JavaScript Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de fevereiro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <strong>
            <span>672 </span> seguidores
          </strong>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage;