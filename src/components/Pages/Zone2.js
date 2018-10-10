import React from 'react';
import Members from '../Search/Members';

let memberList = [{
    value:'1',
    label:'Juriel Olivera',
    age:37
},
{
    value:'2',
    label:'Reiiel Elijah Olivera',
    age:5
},{
    value:'3',
    label:'Jacob Ching',
    age:7
},{
    value:'4',
    label:'Jared Dumanhug',
    age:7
}]
const Zone2 = props => (

    <div style={{margin:'5px'}}>
        <Members contacts={memberList}/>
    </div>
);

export default Zone2;