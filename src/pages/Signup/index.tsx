import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={Logo} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro!</h1>

          <Input name="email" icon={FiUser} placeholder="Nome" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="senha" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="/">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
