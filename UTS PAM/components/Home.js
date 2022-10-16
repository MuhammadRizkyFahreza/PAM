import React from "react";
import { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import Header from './Header';
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = ({todos, setTodos}) => {
    //ClearAll Todos
    const handleClearTodos = () => {
        AsyncStorage.setItem("storedTodos", JSON.stringify([])).then(() => {
            setTodos([]);
        }).catch(error => console.log(error));
    }

    //Modal Visibility dan Input Value
    const [modalVisibie, setModalVisible] = useState(false);
    const [todoInputValues, setTodoInputValues] = useState();

    //Add Todos
    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        
        AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos)).then(() => {
            setTodos(newTodos);
            setModalVisible(false);
        }).catch(error => console.log(error));
    }

    return (
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems 
                todos={todos}
                setTodos={setTodos}
            />

            <InputModal
                modalVisibie={modalVisibie}
                setModalVisible={setModalVisible}
                todoInputValues={todoInputValues}
                setTodoInputValues={setTodoInputValues}
                handleAddTodo={handleAddTodo}
                todos={todos}
            />
        </>
    );
}

export default Home;
