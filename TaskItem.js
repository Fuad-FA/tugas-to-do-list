// // src/components/TaskItem.js
// import React from 'react';
// import { Button } from 'react-bootstrap';

// function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
//   return (
//     <div className="d-flex justify-content-between align-items-center my-2 p-3 border rounded">
//       <div>
//         <h5>{task.task}</h5>
//         <p>Priority: <span className={`text-${task.priority.toLowerCase()}`}>{task.priority}</span></p>
//       </div>
//       <div>
//         <Button variant="outline-success" onClick={() => onStatusChange(task.id)}>✔</Button>{' '}
//         <Button variant="outline-primary" onClick={() => onEdit(task)}>✎</Button>{' '}
//         <Button variant="outline-danger" onClick={() => onDelete(task.id)}>🗑</Button>
//       </div>
//     </div>
//   );
// }

// export default TaskItem;
// src/components/TaskItem.js
import React from 'react';
import { Button, Badge } from 'react-bootstrap';

function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  const getBadgeVariant = (status) => {
    switch (status) {
      case 'Done':
        return 'success';
      case 'In Progress':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-2 p-3 border rounded shadow-sm">
      <div>
        <h5>{task.task}</h5>
        <p>
          Priority: <Badge variant={task.priority.toLowerCase()}>{task.priority}</Badge>
          {' | '}
          Status: <Badge variant={getBadgeVariant(task.status)}>{task.status}</Badge>
        </p>
      </div>
      <div>
        <Button variant="outline-primary" onClick={() => onEdit(task)} className="mr-2">
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TaskItem;
