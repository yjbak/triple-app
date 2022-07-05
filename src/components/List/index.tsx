import styled from "styled-components";

const List = styled.ul<any>`
  > li + li {
    margin-top: ${(props) => props.mtSpace}pt;
  }
`;
export default List;
