import React from "react";
// @ts-ignore
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image`
  height: 50px;
  width: 50px;
`;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({ iconName, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon source={iconName === 'plus' ? require('~/Assets/Images/add.png') : require('~/Assets/Images/remove.png')} />
    </Container>
  );
};

export default Button;
