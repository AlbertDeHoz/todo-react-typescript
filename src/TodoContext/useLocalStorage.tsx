import { useEffect, useState } from "react";
import { Task } from "../interfaces";

interface IStorage {
    item:Task[];
    saveItem: React.Dispatch<any>;
    loading: boolean;
}

const useLocalStorage = (itemName: string):IStorage => {
    const [loading, setLoading] = useState<boolean>(true);
    const [item, setItem] = useState<Task[]>([]);

    useEffect(() => {
        const dataStored = localStorage.getItem(itemName);
        setTimeout(() => {
            const tasks: Task[] = dataStored ? JSON.parse(dataStored) : [];
            setItem(tasks);
            setLoading(false);
            console.log('effect executed!');
        }, 1000);
    },[]);
    const saveItem = (newItem: Task[]) => {
        const dataToString = JSON.stringify(newItem);
        localStorage.setItem(itemName, dataToString);
        setItem(newItem);
    };

    return {item, saveItem, loading};
};

export { useLocalStorage };
