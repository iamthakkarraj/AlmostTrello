import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://localhost:44373/api';

const JWT_TOKEN = sessionStorage.getItem('jwtToken');

interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Service methods for Todo API
const todoService = {
  // Get all Todos
  getAllTodos: async (): Promise<AxiosResponse<Todo[]>> => {
    return axiosInstance.get('/Todos');
  },

  // Get a Todo by ID
  getTodoById: async (id: number): Promise<AxiosResponse<Todo>> => {
    return axiosInstance.get(`/todos/${id}`);
  },

  // Delete a Todo by ID
  deleteTodoById: async (id: string): Promise<AxiosResponse<void>> => {
    return axiosInstance.delete(`/todos/${id}`);
  },

  // Update a Todo by ID
  updateTodoById: async (id: string, updatedTodo: Todo): Promise<AxiosResponse<Todo>> => {
    return axiosInstance.put(`/todos/${id}`, updatedTodo);
  },
  
};

export default todoService;
