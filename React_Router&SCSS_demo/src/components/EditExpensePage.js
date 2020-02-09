import React from 'react';

const EditExpensePage = (props) =>(
    <div>
        Editting the expense with if of {props.match.params.id}
    </div>
);

export default EditExpensePage;