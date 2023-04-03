import React from "React"

function Avatar(props){
    const {image ,firstname , lastname }= props
    return (
        <div>
            <img src={image} alt={`${firstname} ${lastname}`}/>
            <h2>{`${firstname} ${lastname}`}</h2>

        </div>
    );
}

export default Avatar