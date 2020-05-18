// import React, { Component } from 'react'
// import MicRecorder from 'mic-recorder-to-mp3'
// const Mp3Recorder = new MicRecorder({ bitRate: 128 })	
// export default class Microphone extends Component {
// 	componentDidMount() {
// 		navigator.getUserMedia(
// 			{ audio: true },
// 			() => {
// 				console.log('Permission Granted')
// 				this.setState({ isBlocked: false })
// 			},
// 			() => {
// 				console.log('Permission Denied')
// 				this.setState({ isBlocked: true })
// 			}
// 		)
// 	}
// 	state = {
// 		isRecording: false,
// 		blobURL: '',
// 		isBlocked: false,
// 		// blob: ''
// 	}
// 	start = () => {
// 		if (this.state.isBlocked) {
// 			console.log('Permission Denied')
// 		} else {
// 			Mp3Recorder.start()
// 				.then(() => {
// 					this.setState({ isRecording: true })
// 				})
// 				.catch((e) => console.error(e))
// 		}
// 	}

// 	stop = () => {
// 		Mp3Recorder.stop()
// 			.getMp3()
// 			.then(([buffer, blob]) => {
// 				const blobURL = URL.createObjectURL(blob)
// 				this.setState({ blobURL, isRecording: false }) 
// 			})
// 			.catch((e) => console.log(e))
// 		console.log(this.state.blobURL)
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				<div className='set'>
// 					<div className='buttons'>
// 						<button
// 							onClick={this.start}
// 							disabled={this.state.isRecording}
// 						>
// 							Record
// 						</button>
// 						<button
// 							onClick={this.stop}
// 							disabled={!this.state.isRecording}
// 						>
// 							Stop
// 						</button>
// 					</div>
// 					<audio
// 						className='audioPlayer'
// 						src={this.state.blobURL}
// 						controls='controls'
// 					/>
// 				</div>
// 			</React.Fragment>
// 		)
// 	}
// }

import React from "react";
import { Recorder } from "react-voice-recorder";
import "./Microphone.css"
// import "./styles.css";

export default class Microphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioURL: null,
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    };
  }
  handleAudioStop(data) {
    console.log(data);
    this.setState({ audioDetails: data });
    console.log(data);
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleRest() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({ audioDetails: reset });
  }

  render() {
	var data = {};
	var xhr = new XMLHttpRequest();
	xhr.open('GET', this.state.url, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e) {
		if (this.status === 200) {
			data.data = this.response;
			data.name = "whatever_dataname.mp3";
			// data.size = getYourBlobSize();
			data.type = "audio/mpeg";
			
		}
	};
	xhr.send();
	
    return (
      <div style={{width:"100%", textAlign:"center"}} className="Recorder1">
        <Recorder
          record={true}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={data => this.handleAudioStop(data)}
          handleAudioUpload={data => this.handleAudioUpload(data)}
          handleRest={() => this.handleRest()}
        />
      </div>
    );
  }
}
