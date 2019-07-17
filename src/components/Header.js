import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const Wrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

export default ({ channelName }) => (
  <Wrapper>
    <Header textAlign="center">#{channelName}</Header>
  </Wrapper>
);
