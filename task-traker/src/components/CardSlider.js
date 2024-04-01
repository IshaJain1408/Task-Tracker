import './CardSlider.css';
import {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { SlOptionsVertical } from "react-icons/sl";
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


const tasks = [
  {
    category: 'Pending',
    title: 'User Auth',
    description: 'Upgrade authentication system to support multi-factor authentication (MFA) and improve security measures.',
    assignPerson: 'John Doe',
    priority: 'P1',
    team: 'Engineering',
    status: 'Assign',
    dueDate: '2024-04-15',
    comments: [
      {
        author: 'Jane Smith',
        text: 'Need to prioritize this task as it affects user security.'
      },
      {
        author: 'John Doe',
        text: 'Agreed. Let\'s aim to complete it before the due date.'
      }
    ]
  },
  {
    category: 'In Progress',
    title: ' Dashboard UI',
    description: 'Design and develop a new user-friendly dashboard interface with interactive data visualization features.',
    assignPerson: 'Jane Smith',
    priority: 'P2',
    team: 'UI/UX Design',
    status: 'In Progress',
    dueDate: '2024-04-30',
    comments: [
      {
        author: 'John Doe',
        text: 'The initial mockups look promising. Keep up the good work!'
      }
    ]
  },
  {
    category: 'Deployed',
    title: ' Database Queries',
    description: 'Identify and optimize slow-performing database queries to improve overall application performance.',
    assignPerson: 'John Doe',
    priority: 'P1',
    team: 'Database Administration',
    status: 'Assign',
    dueDate: '2024-05-10',
    comments: []
  },
  {
    category: 'Complete',
    title: 'Bug Fixes',
    description: 'Address reported bugs and conduct thorough testing to ensure stability and reliability of the system.',
    assignPerson: 'Jane Smith',
    priority: 'P2',
    team: 'Quality Assurance',
    status: 'In Progress',
    dueDate: '2024-04-25',
    comments: [
      {
        author: 'John Doe',
        text: 'We need to finalize the testing phase before the upcoming release.'
      }
    ]
  },
  {
    category: 'Deferred',
    title: 'Update API ',
    description: 'Update and maintain the API documentation to reflect recent changes and improvements in the API endpoints.',
    assignPerson: 'Jane Smith',
    priority: 'P2',
    team: 'Documentation',
    status: 'In Progress',
    dueDate: '2024-04-20',
    comments: []
  },
  // Add more tasks as needed
];

const categoryColors = {
  'Pending': 'bg-gray',
  'In Progress': 'bg-warning',
  'Complete': 'bg-success',
  'Deployed': 'bg-info-subtle',
  'Deferred': 'bg-danger'
};

const CardSlider = () => {
  const [editTask, setEditTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);



  
  const handleEdit = (task) => {
    setEditTask(task);
  };

  const handleDelete = (task) => {
    setDeleteTask(task);
  };

  const handleCloseEdit = () => {
    setEditTask(null);
  };

  const handleCloseDelete = () => {
    setDeleteTask(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pt-4'>
      <Slider {...settings}>
        {tasks.map((task, index) => (
          <div key={index} className="col">
            <div className="card rounded bg-gray">
              <h6 className={`text-center p-3 text-white ${categoryColors[task.category]}`}>{task.category}</h6>
              <div className="card-body mt-1 ">
                <div className='border p-2 rounded' style={{ backgroundColor: "#F3F1F2" }}>
                  <div className='d-flex flex-row justify-content-between'>
                    <h6 className="card-title mt-2 p-0 fw-semibold" >{task.title}</h6>
                    <button className="btn text-white p-1 rounded-0" >{task.priority} </button>
                  </div>
                  <hr />
                  <p className="card-text fs-6">{task.description}</p>
                  <div className='d-flex flex-row justify-content-between'>
                    <h6 className="card-title mt-2 fw-semibold ">{task.assignPerson}</h6>
                    <div className="dropdown">
                      <button className="btn text-white rounded-0" type="button" id={`dropdownMenuButton${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                        <SlOptionsVertical />
                      </button>
                      <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                        <li className="dropdown-item" onClick={() => handleEdit(task)}>Edit</li>
                        <li className="dropdown-item" onClick={() => handleDelete(task)}>Delete</li>
                      </ul>
                    </div>
                  </div>
                  <button className="btn text-white mt-2" > {task.status}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Edit Task Modal */}
      {editTask && (
  <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-0 border-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(234,219,252,1) 0%, rgba(218,219,255,1) 35%, rgba(244,219,249,1) 100%)"}}>
      <div className="modal-header d-flex flex-row justify-content-between rounded-0" style={{  backgroundColor: 'white' }}>
                                    <h5 className="modal-title">Edit Task</h5>
                                    <div style={{cursor:"pointer"}} aria-label="Close" onClick={handleCloseEdit}>
                                    <AiOutlineCloseCircle/>
                                    </div>
                                </div>
    
        <div className="modal-body">
        <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control form-field" id="title" name="title" value={editTask.title} disabled />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control form-field" id="description" name="description" value={editTask.description} disabled></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="team" className="form-label">Team</label>
    <input type="text" className="form-control form-field" id="team" name="team" value={editTask.team} disabled />
  </div>
  <div className="mb-3">
    <label htmlFor="assignee" className="form-label">Assignee</label>
    <input type="text" className="form-control  form-field" id="assignee" name="assignee" value={editTask.assignPerson} disabled />
  </div>
  <div className="mb-3">
    <label htmlFor="priority" className="form-label">Priority</label>
    <select className="form-select enable" id="priority" name="priority" value={editTask.priority} onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}>
      <option value="P0">P0</option>
      <option value="P1">P1</option>
      <option value="P2">P2</option>
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="status" className="form-label">Status</label>
    <select className="form-select enable" id="status" name="status" value={editTask.status} onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}>
      <option value="Assign">Assign</option>
      <option value="In Progress">In Progress</option>
      <option value="Complete">Complete</option>
      <option value="Deployed">Deployed</option>
      <option value="Deferred">Deferred</option>
    </select>
  </div>
</form>

        </div>
        <div className="modal-footer rounded-0" style={{backgroundColor:"white"}}>
          <button type="button" className="btn text-white" onClick={handleCloseEdit}>Close</button>
          <button type="button" className="btn text-white">Save changes</button>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Delete Task Modal */}
      {deleteTask && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-0 border-0" style={{ backgroundImage: "linear-gradient(90deg, rgba(234,219,252,1) 0%, rgba(218,219,255,1) 35%, rgba(244,219,249,1) 100%)"}}>
            <div className="modal-header d-flex flex-row justify-content-between" style={{  backgroundColor: 'white' }}>
                                    <h5 className="modal-title">Delete Task</h5>
                                    <div style={{cursor:"pointer"}} aria-label="Close" onClick={handleCloseDelete}>
                                    <AiOutlineCloseCircle/>
                                    </div>
                                </div>
            
              <div className="modal-body">
                <p className='text-black'>Do You Wish To Delete Task </p>
                <div className='d-flex flex-row justify-content-around'>
                <h6 className='fw-semibold'>  {deleteTask.title}</h6>
                <div>
  <button type="button" className="btn me-4 text-white" onClick={handleCloseDelete}>No</button>
  <button type="button" className="btn text-white">Yes</button>
</div>

               </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardSlider;
