import React from "react";
import { Modal, Text } from "react-native";

//Import style

import {
    ModalButton,
    ModalAction,
    ModalContainer,
    ModalView,
    ModalActionGroup,
    ModalIcon,
    StyledInput,
    HeaderTitle,
    colors,
    ModalTextButton,
    TextButton
} from '../styles/appStyles';

//Icon
import { FontAwesome } from '@expo/vector-icons';

const InputModal = ({
    modalVisibie, 
    setModalVisible, 
    todoInputValues, 
    setTodoInputValues,
    handleAddTodo,
    todos
    }) => {
    
    const handleCloseModal = () => {
        setModalVisible(false);
    }
    
    const handleSubmit = () => {
        handleAddTodo({
            title: todoInputValues,
            date: new Date().toLocaleString(),
            key: `${(todos[todos.length-1] && parseInt(todos[todos.length -1].key) + 1) || 1}`
        });
        setTodoInputValues("");

    }
    
    return (
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <FontAwesome name="plus" size={32} color={colors.secondary} />
            </ModalButton>
            <ModalTextButton onPress={() => {setModalVisible(true)}}>
                <TextButton color={colors.tertiary}>Tambahkan List Kegiatan</TextButton>
            </ModalTextButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibie}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle>To-Do</HeaderTitle>
                            <FontAwesome name="edit" size={32} color={colors.tertiary} />
                        </ModalIcon>

                        <StyledInput
                            placeholder="Tambahkan Daftar Kegiatan"
                            placeholderTextColor={colors.secondary}
                            autoFocus={true}
                            onChangeText={(text) => setTodoInputValues(text)}
                            value={todoInputValues}
                            onSubmitEditing={handleSubmit}
                        />

                        <ModalActionGroup>
                            <ModalAction color={colors.primary} onPress={handleCloseModal}>
                                <FontAwesome name="close" size={32} color={colors.tertiary} />
                            </ModalAction>
                            <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                                <FontAwesome name="check" size={32} color={colors.secondary} />
                            </ModalAction>
                        </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;