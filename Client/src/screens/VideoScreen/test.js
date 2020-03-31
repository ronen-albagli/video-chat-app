import React, { useState, Component } from 'react';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import io from "socket.io-client";
import Webcam from "react-webcam";



class Parent extends Comment {

    constructor() {
        this.state = {
            srcs: []

        }
    }

    render() {
        return (
            <VideoCam />
        )
    }
}

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};


const VideoCam = () => {
    // const webcamRef = React.useRef(null);
    const webcamRef = null

    // const [src, setSrc] = useState(null);
    // const [start, setStart] = useState(false);

    // const capture = React.useCallback(
    //     () => {
    //         const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
    //         console.log('clicked');
    //         setStart(true);
    //     },
    //     [webcamRef]
    // );

    const capture = () => { }

    const interval$ = interval(5000);
    interval$.pipe(take(1)).subscribe(() => {
        console.log('sdf');
        // if (webcamRef) {
        // setSrc(new Date());
        capture()
        // }
    });
    setInterval(() => {

    }, 1000)
    console.log('loaded')

    return (
        <div>
            <Webcam
                audio={false}
                height={720}
                // ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
    );
};

export default Parent;