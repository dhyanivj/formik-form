import React from 'react';

const FetchData = ({ data }) => {
    return (
        <div>
            {data.map((value, index) => (
                <div key={index}>
                    <p>{value.name}</p>
                    <p>{value.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchData;
