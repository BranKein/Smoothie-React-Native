import React, {useContext} from "react";
import { FlatList } from "react-native";
// @ts-ignore
import Styled from 'styled-components/native';

import { TodoListContext } from "~/Context/TodoListContext";

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

interface Props {}

const TodoList = ({}: Props) => {
    const {todoList, removeTodoList} = useContext<ITodoListContext>(TodoListContext);

    return (
        <>
            <FlatList
                data={todoList}
                keyExtractor={(item, index) => {
                    return `todo-${index}`;
                }}
                renderItem={({item, index}) => (
                    <TodoItem
                        text={item as string}
                        onDelete={() => removeTodoList(index)}
                    />
                )}
                ListEmptyComponent={<EmptyItem />}
                contentContainerStyle={todoList.length === 0 && {flex: 1}}
            />
        </>
    );
};

export default TodoList;
