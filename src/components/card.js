import React from 'react';
import reactDom  from 'react-dom/client';


function UserCard(props)
{
            const {id,name,age} = props;
    return(
        
        <>
        
          <h1> Hi {id} my name is {name} loossuuuuu !!!!! {age}</h1>
        </>
    )
    
}

export default UserCard;