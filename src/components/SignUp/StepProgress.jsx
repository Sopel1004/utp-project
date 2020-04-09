import React from 'react';
import Styled from './StepProgressStyle';

const StepProggress = ({ step }) => {
  return (
    <Styled.Container>
      <Styled.Container__Step active={1 <= step}>1</Styled.Container__Step>
      <Styled.Container__Step active={2 <= step}>2</Styled.Container__Step>
      <Styled.Container__Step active={3 <= step}>3</Styled.Container__Step>
    </Styled.Container>
  );
};

export default StepProggress;
