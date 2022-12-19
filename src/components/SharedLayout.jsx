import { Suspense } from 'react';
import { CgPushChevronRightR } from 'react-icons/cg';
import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <Header>
          <Logo>
            <CgPushChevronRightR />
            <span>Movie Swiftly</span>
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
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
