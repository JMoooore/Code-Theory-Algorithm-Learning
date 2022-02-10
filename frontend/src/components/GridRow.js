import styled from 'styled-components';

export const Grid = styled.div`
  background-color: #e7d49e;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// border:10px solid red;

export const Row = styled.div`
  display: flex;
  height: ${(props) => props.height};
  margin: 1rem;
`;

const media = {
  xs: (styles) => `
  @media only screen and (max-width: 480px){${styles}}
  `,
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)};
`;
// border:10px solid green;