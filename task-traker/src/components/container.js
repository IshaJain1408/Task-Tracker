
import React, { useState } from 'react';
import CardSlider from './CardSlider';
import { AiOutlineCloseCircle } from "react-icons/ai";
const Container = () => {
 const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        team: '',
        assignee: '',
        priority: 'P0' // Default priority
    });
    const [tasks, setTasks] = useState([]); // State to store tasks

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddTask = () => {
        // Validate if any required field is empty
        if (!newTask.title || !newTask.description || !newTask.team || !newTask.assignee) {
            alert('Please fill in all fields');
            return;
        }
        
        // Add the new task to the tasks array
        setTasks(prevTasks => [...prevTasks, newTask]);

        // Clear the form and close the modal
        setNewTask({
            title: '',
            description: '',
            team: '',
            assignee: '',
            priority: 'P0'
        });
        setShowModal(false);
    };
    

    return (
        <div className='p-3'>
            <div className="container rounded p-3" style={{ border: '2px solid white', height: "45rem" }}>

                {/* Filter Form */}
                <div className="row p-2">
                    <div className="col">
                        <form>
                            <div className="row align-items-center">
                                <div className="col-1 mt-2">
                                    <h6 className='fw-medium'>Filter By:</h6>

                                </div>
                                {/* Existing filter components */}
                                <div className="col-2">
              <div className="form-group">
                <input type="text" className="form-control" id="assignName" placeholder="Assignee"  style={{color:"#7c777b"}}/>
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <select className="form-select" id="priority" style={{color:"#7c777b"}}>
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div className="col-4">
            <div className="form-group">
      <div className="input-group">
        <input
          type="date"
          className="form-control border-0"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Start Date"
          style={{color:"#7c777b"}}
        />
        <span className="input-group-text ">-</span>
        <input
          type="date"
          className="form-control border-0"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="End Date"
          style={{color:"#7c777b"}}
        />
      </div>
    </div>
    </div>
    <div className="col-3 text-end">
              <button type="button" className="btn text-white" style={{backgroundColor:"#25689C"}} onClick={() => setShowModal(true)}>Add New Task</button>
            </div>
                            </div>
                        </form>
                        
                    </div>
                </div>

              

                {/* Sort Form */}
                <div className="row p-2">
                    <div className="col">
                        <form>
                            <div className="row align-items-center">
                                <div className="col-1 mt-2">
                                    <h6 className='fw-medium'>Sort By:</h6>
                                </div>
                                {/* Existing sort components */}
                                <div className="col-2">
              <div className="form-group">
                <select className="form-select" id="priority" style={{color:"#7c777b"}}>
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div></div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Modal for adding new task */}
                {showModal && (
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog " role="document">
                            <div className="modal-content rounded-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(234,219,252,1) 0%, rgba(218,219,255,1) 35%, rgba(244,219,249,1) 100%)"}}>
                                <div className="modal-header d-flex flex-row justify-content-between" style={{  backgroundColor: 'white' }}>
                                    <h5 className="modal-title">Create a Task</h5>
                                    <div style={{cursor:"pointer"}} onClick={() => setShowModal(false)}>
                                    <AiOutlineCloseCircle/>
                                    </div>
                                </div>
                                <div className="modal-body">
                                <form className="d-flex flex-column">
    <div className="mb-3 row align-items-center">
        <label htmlFor="title" className="col-md-3 col-form-label">Title:</label>
        <div className="col-md-9">
            <input type="text" className="form-control" id="title" name="title" value={newTask.title} onChange={handleInputChange} />
        </div>
    </div>
    <div className="mb-3 row align-items-center">
        <label htmlFor="description" className="col-md-3 col-form-label">Description:</label>
        <div className="col-md-9">
            <textarea className="form-control" id="description" name="description" value={newTask.description} onChange={handleInputChange}></textarea>
        </div>
    </div>
    <div className="mb-3 row align-items-center">
        <label htmlFor="team" className="col-md-3 col-form-label">Team:</label>
        <div className="col-md-9">
            <input type="text" className="form-control" id="team" name="team" value={newTask.team} onChange={handleInputChange} />
        </div>
    </div>
    <div className="mb-3 row align-items-center">
        <label htmlFor="assignee" className="col-md-3 col-form-label">Assignee:</label>
        <div className="col-md-9">
            <input type="text" className="form-control" id="assignee" name="assignee" value={newTask.assignee} onChange={handleInputChange} />
        </div>
    </div>
    <div className="mb-3 row align-items-center">
        <label htmlFor="priority" className="col-md-3 col-form-label">Priority:</label>
        <div className="col-md-9">
            <select className="form-select" id="priority" name="priority" value={newTask.priority} onChange={handleInputChange}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
            </select>
        </div>
    </div>
</form>


                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
                                </div>
                             
                            </div>
                         
                        </div>
                    </div>
                )}

                {/* Existing card slider */}
                <CardSlider />

            </div>
        </div>
    );
}

export default Container;

