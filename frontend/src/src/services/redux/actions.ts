import { TodoActionTypes } from "./types";
import { v4 as uuid } from 'uuid';

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const TOGGLE_TODO = "MARK_COMPLETE";
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLETE = "FILTER_COMPLETE";

export const addItem = (item: {
  title: string;
  description: string;
  dueDate: Date;
}): TodoActionTypes => ({
  type: ADD_ITEM,
  id: uuid(),
  title: item.title,
  description: item.description,
  dueDate: item.dueDate
});

export const toggleTodo = (id: string): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const removeItem = (id: string): TodoActionTypes => ({
  type: REMOVE_ITEM,
  id,
});