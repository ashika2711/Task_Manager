import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks') 
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-lg shadow-md m-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">Tasks Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                <div
                    key={task._id}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 transition-transform duration-300 hover:scale-105 border-indigo-500"
                >
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{task.title}</h3>
                    <p className="text-gray-600 mb-3">{task.description}</p>
                    <div className="flex items-center justify-between">
                    <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                        task.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                        {task.status}
                    </span>
                    <span className="text-xs text-gray-400">
                        {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                    </div>
                </div>
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-full">
                No tasks found.
                </p>
            )}
            </div>
        </div>
        );
}