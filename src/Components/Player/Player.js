import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const imageStyle = {height: '70px',width:'100px'}
const palyerStyle = 
{ border: '1px solid red',
margin: '10px', 
padding: '10px',
width: '400px', textAlign: 'center',
alignContent: 'center',
backgroundColor: '#3399ff'
}

const Player = (props) => {
  const {name,age,image,salary }= props.play;
  const handleAddToClub = props.handleAddToClub;
  
    return (
        <div style={palyerStyle}>
            <img style={imageStyle}  src={image} alt="" />
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h5>Salary: {salary}</h5>
            <button className="btn btn-success"  onClick={()=> handleAddToClub(props.play)} ><FontAwesomeIcon icon={faUserPlus} />Add to Team</button>
        </div>
    );
};

export default Player;