// // src/components/TaskModal.js
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function TaskModal({ show, handleClose, handleSave, initialData }) {
//   const [task, setTask] = useState(initialData.task || '');
//   const [priority, setPriority] = useState(initialData.priority || 'Medium');

//   const saveTask = () => {
//     handleSave({ task, priority });
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{initialData.id ? 'Edit Task' : 'Add Task'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group>
//             <Form.Label>Task</Form.Label>
//             <Form.Control
//               type="text"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Priority</Form.Label>
//             <Form.Control
//               as="select"
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//             >
//               <option>High</option>
//               <option>Medium</option>
//               <option>Low</option>
//             </Form.Control>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={saveTask}>
//           Save Task
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default TaskModal;
// src/components/TaskModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function TaskModal({ show, handleClose, handleSave, initialData }) {
  const [task, setTask] = useState(initialData.task || '');
  const [priority, setPriority] = useState(initialData.priority || 'Medium');
  const [status, setStatus] = useState(initialData.status || 'To Do');

  useEffect(() => {
    setTask(initialData.task || '');
    setPriority(initialData.priority || 'Medium');
    setStatus(initialData.status || 'To Do');
  }, [initialData]);

  const saveTask = () => {
    handleSave({ task, priority, status });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{initialData.id ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveTask}>
          Save Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;
