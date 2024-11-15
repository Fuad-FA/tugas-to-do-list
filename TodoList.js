// // src/components/TodoList.js
// import React, { useState } from 'react';
// import TaskItem from './TaskItem';
// import TaskModal from './TaskModal';
// import { Button } from 'react-bootstrap';

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentTask, setCurrentTask] = useState({});

//   const handleSave = (taskData) => {
//     if (currentTask.id) {
//       setTasks(tasks.map((task) => (task.id === currentTask.id ? { ...task, ...taskData } : task)));
//     } else {
//       setTasks([...tasks, { ...taskData, id: Date.now(), status: 'To Do' }]);
//     }
//   };

//   const handleEdit = (task) => {
//     setCurrentTask(task);
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleStatusChange = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, status: task.status === 'Done' ? 'To Do' : 'Done' } : task
//       )
//     );
//   };

//   const addTask = () => {
//     setCurrentTask({});
//     setShowModal(true);
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Task List</h2>
//       <Button variant="primary" onClick={addTask} className="mb-3">
//         + Add Task
//       </Button>
//       {tasks.map((task) => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onStatusChange={handleStatusChange}
//         />
//       ))}
//       <TaskModal
//         show={showModal}
//         handleClose={() => setShowModal(false)}
//         handleSave={handleSave}
//         initialData={currentTask}
//       />
//     </div>
//   );
// }

// export default TodoList;
// src/components/TodoList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskModal from './TaskModal';
import { Button } from 'react-bootstrap';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleSave = (taskData) => {
    if (currentTask.id) {
      setTasks(tasks.map((task) => (task.id === currentTask.id ? { ...task, ...taskData } : task)));
    } else {
      setTasks([...tasks, { ...taskData, id: Date.now() }]);
    }
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    setCurrentTask({});
    setShowModal(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Task List</h2>
      <Button variant="primary" onClick={addTask} className="mb-3">
        + Add Task
      </Button>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <TaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
        initialData={currentTask}
      />
    </div>
  );
}

export default TodoList;
