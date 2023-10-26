import { createContext, useContext, useState } from 'react';
import { createTasksRequest, getTasksRequest } from '../api/task';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTask must be used withi a TasksProvider')
    }

    return context;
}

export function TaskProvider({ children }){
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (tasks) => {
        console.log('tasks');
        const res = await createTasksRequest(tasks)
        console.log(res);
    }

    return(
        <TaskContext.Provider value={{ 
            tasks,
            createTask,
            getTasks,
            }}>
            { children }
        </TaskContext.Provider>
    )
}