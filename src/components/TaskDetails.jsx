import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
       <div>
           <div className='back-button-container'>
            <Button onClick={handleBackButtonClick}>Voltar</Button>
           </div>
           <div className='task-details-container'>
               <h2> {params.tasktitle} </h2>
               <p>
                   Lore impsum dolor sit amet consectetur
               </p>
           </div>
       </div>
    );
}

export default TaskDetails;