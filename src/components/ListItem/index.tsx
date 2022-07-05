import styled from "styled-components";

const ListItem = styled.li<ListItem>`
  font-size: ${(props) => props.fontSize}px;
  span {
    display: inline-block;
    width: ${(props) => props.width}px;
    text-align: ${(props) => props.textAlign};
  }
`;
export default ListItem;
