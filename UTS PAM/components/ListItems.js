import React from "react";
import { useState } from "react";

import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    colors
} from '.././styles/appStyles';

import { MaterialIcons } from '@expo/vector-icons';

const ListItems = ({todos, setTodos}) => {

    const handleDeleteTodo = (rowMap, rowKey) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
        newTodos.splice(todoIndex, 1);
        AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos)).then(() => {
            setTodos(newTodos);
        }).catch(error => console.log(error));
    }
    
    return (
        <>
        {todos.length == 0 && <TodoText>Kamu sedang tidak ada kegiatan</TodoText>}
        {todos.length != 0 && <SwipeListView 
            data={todos}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <TodoText>{data.item.title}</TodoText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
            renderHiddenItem={(data, rowMap) => {
                return (
                    <ListViewHidden>
                        <HiddenButton
                            onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                        >
                            <MaterialIcons name="done-outline" size={30} color={colors.secondary} />
                        </HiddenButton>
                    </ListViewHidden>
                )
                
            }}
            leftOpenValue={60}
            disableLeftSwipe={true}
        />}
        </>
    );

}

export default ListItems;