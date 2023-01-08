import { Suspense } from 'react';
// import { CgPushChevronRightR } from 'react-icons/cg';
import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link, Title } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <Header>
          <Logo>
            <Title>Movie Guide</Title>
          </Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
