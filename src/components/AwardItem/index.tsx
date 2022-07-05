import styled from "styled-components";

const AwardItem = styled.div<IAwardItem>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: left top;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  white-space: nowrap;
`;
export default AwardItem;
