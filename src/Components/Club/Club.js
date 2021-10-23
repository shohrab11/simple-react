import React from 'react';

const Club = (props) => {
    const club = props.club;
  
    const budget = club.reduce((sum,club) => sum + club.salary, 0)
    return (
        <div>
            <h2>This is My Cricket Team</h2>
            <h3>Number of Player in the Team:{club.length} </h3>
            <p>Total Budget of club : {budget} </p>
            <div>
                {
                    club.map(club => <h2>{club.name} </h2>)
                }
            </div>
        </div>
    );
};

export default Club;