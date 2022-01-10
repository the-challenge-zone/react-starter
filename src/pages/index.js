import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  background-color: lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

function Home() {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
    </Wrapper>
  );
}

export default Home;
