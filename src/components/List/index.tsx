import styled from "styled-components";

const List = styled.ul<List>`
  > li + li {
    margin-top: ${(props) => props.mtSpace}pt;
  }
`;
export default List;
