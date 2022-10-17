import styled from "styled-components/native";
import Constants from "expo-constants";

// Colors
export const colors = {
  primary: "#1A374D",
  secondary: "#406882",
  tertiary: "#e1edf3",
  alternative: "#6998AB",
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.tertiary};
  letter-spacing: 4px;
`;
export const HeaderButton = styled.TouchableOpacity`
  color: ${colors.tertiary};
`;

// List
export const ListView = styled.View`
  background-color: ${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  allign-items: center;
`;

export const TodoText = styled.Text`
  font-size: 22px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 14px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-align: right;
  text-transform: uppercase;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  right: 40px
  bottom: 40px;
`;

export const ModalTextButton = styled.TouchableOpacity`
  width: 240px;
  height: 70px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  left: 40px
  bottom: 40px;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  letter-spacing: 1px;
  color: ${colors.secondary};
`;


export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.primary};
`;


export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 0px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;
