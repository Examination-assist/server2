import React from "react";
import { Recorder } from "react-voice-recorder";
// import "../Microphone.css"
import './Microphone.css'
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
    // console.log(data);
    this.setState({ audioDetails: data });
    // console.log(data);
  }
  handleAudioUpload(file) {
    // console.log(file);
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
