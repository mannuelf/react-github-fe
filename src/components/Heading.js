import styled from "styled-components";

const HeaderH1 = styled.h1`
  font-size: ${(props) => props.size}em;
  color: ${(props) => props.color};
`;

export default function Heading({ name, size, color }) {
  return (
    <HeaderH1 size={size} color={color}>
      {name}
    </HeaderH1>
  );
}
