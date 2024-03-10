
import { JitsiMeeting } from '@jitsi/react-sdk';

const Meeting = ({roomName}:{roomName:string}) => {
    return(
        <JitsiMeeting
            configOverwrite = {{
                startWithAudioMuted: true,
                hiddenPremeetingButtons: ['microphone']
            }}
            roomName = { roomName }
            getIFrameRef = { node => node.style.height = '800px' }
        />
    )
};

export default Meeting;