import React, {Component} from 'react';
import song1 from './Chill.mp3';
import song11 from './elo.wav';
import song2 from './sex.wav';
import song3 from './Gap.wav';
import song4 from './Aint.No.wav';
import './MusicButton.scss';

const songs = [song1, song11, song2, song3, song4]; // Add more songs to the list as needed

class MusicButton extends Component {
    state = {
        audio: new Audio(songs[0]), // Start with the first song in the list
        isPlaying: false,
        volume: 0.07,
        currentTrackIndex: 0,
    };

    componentDidMount() {
        const {audio} = this.state;
        audio.addEventListener('ended', this.handleSongEnd);
    }

    componentWillUnmount() {
        const {audio} = this.state;
        audio.removeEventListener('ended', this.handleSongEnd);
    }

    playPause = () => {
        const {isPlaying, audio} = this.state;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
            this.setState({volume: 0.07}); // Set the volume to 0.2 when play button is clicked
            audio.volume = 0.07; // Also update the audio element's volume
        }
        this.setState({isPlaying: !isPlaying});
    };

    handleSongEnd = () => {
        const {currentTrackIndex} = this.state;
        const nextTrackIndex = (currentTrackIndex + 1) % songs.length; // Loop to the first track if last track ends
        this.setState({currentTrackIndex: nextTrackIndex}, () => {
            this.loadAudio();
            this.state.audio.play();
        });
    };

    loadAudio = () => {
        const {audio, currentTrackIndex} = this.state;
        audio.src = songs[currentTrackIndex];
        audio.load();
    };

    handleVolumeChange = (event) => {
        const volume = event.target.value;
        this.setState({volume}, () => {
            this.state.audio.volume = volume;
        });
    };

    playPreviousTrack = () => {
        const {currentTrackIndex} = this.state;
        const previousTrackIndex =
            currentTrackIndex === 0 ? songs.length - 1 : currentTrackIndex - 1;
        this.setState({currentTrackIndex: previousTrackIndex}, () => {
            this.loadAudio();
            this.state.audio.play();

        });
    };

    playNextTrack = () => {
        const {currentTrackIndex} = this.state;
        const nextTrackIndex = (currentTrackIndex + 1) % songs.length;
        this.setState({currentTrackIndex: nextTrackIndex}, () => {
            this.loadAudio();
            this.state.audio.play();
        });
    };

    render() {
        const {isPlaying, volume} = this.state;
        return (
            <div className="WrapperMusic">
                {isPlaying ? (
                    <>
                        <div className='WrapperButtonNextPrevious'>
                            <button className="PreviousButton" onClick={this.playPreviousTrack}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 20L9 12L19 4V20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 19V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="NextButton" onClick={this.playNextTrack}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M5.86713 4.33594L15.8671 12.3359L5.86713 20.3359V4.33594Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.8671 5.33594V19.3359" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </>
                ) : null}

                <div className='WrapperForMusicButton'>
                    <button className={isPlaying ? 'Pause' : 'ButtonMusic'} onClick={this.playPause}/>
                    <div className='voluem'>
                        <input
                            type='range'
                            min='0'
                            max='1'
                            step='0.01'
                            value={volume}
                            onChange={this.handleVolumeChange}
                            onBlur={this.handleSliderBlur}
                            className='HorizontalSlider'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicButton;
