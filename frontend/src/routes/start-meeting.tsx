import React from 'react';
import Meeting from './meeting';

interface Props {
    name: string;
    role: string;
}


const StartMeeting: React.FC<Props> = ({ name }) => {
    const [roomName , setRoomName] = React.useState<string>('');

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <h3>You can start/join the meeting by entering the pre-discussed room name (the name written on the calender)</h3>
            <input type="text" placeholder="Enter Room Name" onChange={(e) => setRoomName(e.target.value)} />
            <button><Meeting roomName={roomName}/></button>
        </div>
    );
};

export default StartMeeting;