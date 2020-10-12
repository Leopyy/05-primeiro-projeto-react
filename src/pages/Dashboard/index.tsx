import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/images/logo.svg'
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt= "Github Explorer" />
      <Title>Explore Repositorios no GitHub</Title>

      <Form>
        <input placeholder="nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/63420973?s=460&u=024e91a4f5cd27b40a7505a159a29093c7f5fff0&v=4" alt="Profile Picture"/>

          <div>
            <strong>Leopyy/goBarber</strong>
            <p>App conceitual do bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/63420973?s=460&u=024e91a4f5cd27b40a7505a159a29093c7f5fff0&v=4" alt="Profile Picture"/>

          <div>
            <strong>Leopyy/goBarber</strong>
            <p>App conceitual do bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/63420973?s=460&u=024e91a4f5cd27b40a7505a159a29093c7f5fff0&v=4" alt="Profile Picture"/>

          <div>
            <strong>Leopyy/goBarber</strong>
            <p>App conceitual do bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  );
};

export default Dashboard;