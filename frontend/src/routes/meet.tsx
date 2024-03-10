import {JitsiMeeting} from "@jitsi/react-sdk";

const Meet = () => {
    return (
        <div>
            <JitsiMeeting
                domain={"meet.jit.si"}
                roomName="ManobalsClassroom"
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                }}
                userInfo={{
                    displayName: 'YOUR_USERNAME',
                    email: 'YOUR_EMAIL'
                }}
                onApiReady={() => {
                }}
                getIFrameRef={(iframeRef) => {
                    iframeRef.style.height = '800px';
                }}
            />
        </div>
    );
};

export default Meet;