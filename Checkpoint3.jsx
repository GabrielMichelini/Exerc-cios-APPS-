import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import minhaImagemSrc from './assets/Musical.ly_vector_logo.svg.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
    faRandom,
    faRepeat,
    faVolumeDown,
    faVolumeUp,
    faHeart,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

const MUSICAS_MOCK = [
    {
        id: 1,
        title: "2023 EM UMA MUSICA",
        artist: "Lucas Inutilismo",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b755B813F405101A39DDE223",
        audioUrl: "/music/2023_em_uma_musica.mp3"
    },
    {
        id: 2,
        title: "Acorda Pedrinho",
        artist: "Jovem Dionisio",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b2733d7b2e39e8d15fefe4c57c4c",
        audioUrl: "/music/acorda_pedrinho.mp3"
    },
    {
        id: 3,
        title: "Flowers",
        artist: "Miley Cyrus",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f080368b6bdf61c7f5f3e7b1",
        audioUrl: "/music/flowers.mp3"
    },
    {
        id: 4,
        title: "Waka Waka (This Time for Africa)",
        artist: "Shakira",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273295874220b3cc2d423985160",
        audioUrl: "/music/waka_waka.mp3"
    }
];

const Header = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="header-container">
            <div className="logo-and-title">
                <img src={minhaImagemSrc} alt="Logo" className="app-logo" />
                <h1 className="app-title">Minha Playlist</h1>
            </div>
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar músicas ou artistas..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = Math.floor(segundos % 60);
    return `${minutos}:${segs < 10 ? '0' : ''}${segs}`;
};

const ListaMusicas = ({ musicas, musicaAtualId, onSelectMusica, onToggleFavorite, favoriteSongs }) => {
    return (
        <div className="lista-musicas-container">
            <ul>
                {musicas.map((musica) => (
                    <li
                        key={musica.id}
                        className={`item-musica ${musicaAtualId === musica.id ? 'active' : ''}`}
                    >
                        <div className="item-musica-left" onClick={() => onSelectMusica(musica.id)}>
                            <img src={musica.coverUrl} alt="Capa" className="item-musica-cover" />
                            <div className="item-musica-details">
                                <p className="item-musica-title">{musica.title}</p>
                                <p className="item-musica-artist">{musica.artist}</p>
                            </div>
                        </div>
                        <button
                            className={`favorite-btn ${favoriteSongs.includes(musica.id) ? 'favorited' : ''}`}
                            onClick={() => onToggleFavorite(musica.id)}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MusicPlayer = ({
    musica,
    isPlaying,
    progresso,
    duracao,
    volume,
    onPlayPause,
    onNext,
    onPrev,
    onProgressoChange,
    onVolumeChange
}) => {
    
    return (
        <div className={`player-container ${!musica ? 'hidden' : ''}`}>
            {musica && (
                <div className="track-info">
                    <img src={musica.coverUrl} alt="Capa do Álbum" className="track-cover" />
                    <div className="track-details">
                        <h3 className="track-title">{musica.title}</h3>
                        <p className="track-artist">{musica.artist}</p>
                    </div>
                </div>
            )}

            <div className="main-controls-container">
                <div className="main-controls">
                    <button className="control-btn subtle">
                        <FontAwesomeIcon icon={faRandom} />
                    </button>
                    <button className="control-btn" onClick={onPrev} disabled={!musica}>
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button className="control-btn play" onClick={onPlayPause} disabled={!musica}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button className="control-btn" onClick={onNext} disabled={!musica}>
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                    <button className="control-btn subtle">
                        <FontAwesomeIcon icon={faRepeat} />
                    </button>
                </div>

                <div className="progress-bar-container">
                    <span className="time">{formatarTempo(progresso)}</span>
                    <input
                        type="range"
                        className="progress-slider"
                        value={progresso}
                        min="0"
                        max={duracao || 0}
                        onChange={onProgressoChange}
                        disabled={!musica}
                    />
                    <span className="time">{formatarTempo(duracao || 0)}</span>
                </div>
            </div>

            <div className="volume-container">
                <FontAwesomeIcon icon={faVolumeDown} className="subtle-icon" />
                <input
                    type="range"
                    className="volume-slider"
                    value={volume}
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={onVolumeChange}
                />
                <FontAwesomeIcon icon={faVolumeUp} className="subtle-icon" />
            </div>
        </div>
    );
};

function Myapp() {
    const [musicas, setMusicas] = useState(MUSICAS_MOCK);
    const [musicaAtualId, setMusicaAtualId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progresso, setProgresso] = useState(0);
    const [duracao, setDuracao] = useState(0);
    const [volume, setVolume] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [favoriteSongs, setFavoriteSongs] = useState([]);

    const audioRef = useRef(null);
    
    const filteredMusicas = musicas.filter(musica =>
        musica.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        musica.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const musicaAtual = musicaAtualId ? musicas.find(m => m.id === musicaAtualId) : null;
    
    useEffect(() => {
        if (musicaAtual) {
            audioRef.current.src = musicaAtual.audioUrl;
            audioRef.current.load();
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.error("Erro ao reproduzir:", error);
                    });
                }
            }
        } else {
            audioRef.current.src = "";
            setProgresso(0);
            setDuracao(0);
            setIsPlaying(false);
        }
    }, [musicaAtualId]); 
    
    useEffect(() => {
        if (!musicaAtual) return; 

        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Erro ao reproduzir:", error);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]); 

    const handlePlayPause = () => {
        if (!musicaAtual && filteredMusicas.length > 0) {
            setMusicaAtualId(filteredMusicas[0].id);
            setIsPlaying(true);
        } else if (musicaAtual) {
            setIsPlaying(!isPlaying);
        }
    };

    const handleSelectMusica = (id) => {
        if (musicaAtualId === id) {
            handlePlayPause();
        } else {
            setMusicaAtualId(id);
            setIsPlaying(true);
        }
    };

    const handleNext = () => {
        if (!filteredMusicas.length) return;
        const currentIndex = filteredMusicas.findIndex(m => m.id === musicaAtualId);
        const nextIndex = (currentIndex + 1) % filteredMusicas.length;
        setMusicaAtualId(filteredMusicas[nextIndex].id);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        if (!filteredMusicas.length) return;
        const currentIndex = filteredMusicas.findIndex(m => m.id === musicaAtualId);
        const prevIndex = (currentIndex - 1 + filteredMusicas.length) % filteredMusicas.length;
        setMusicaAtualId(filteredMusicas[prevIndex].id);
        setIsPlaying(true);
    };

    const handleTimeUpdate = () => {
        setProgresso(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuracao(audioRef.current.duration);
    };

    const handleProgressoChange = (e) => {
        const novoTempo = e.target.value;
        audioRef.current.currentTime = novoTempo;
        setProgresso(novoTempo);
    };

    const handleVolumeChange = (e) => {
        const novoVolume = e.target.value;
        audioRef.current.volume = novoVolume;
        setVolume(novoVolume);
    };

    const handleSongEnd = () => {
        handleNext();
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleToggleFavorite = (songId) => {
        setFavoriteSongs(prevFavorites => {
            if (prevFavorites.includes(songId)) {
                return prevFavorites.filter(id => id !== songId);
            } else {
                return [...prevFavorites, songId];
            }
        });
    };

    return (
        <div className="app-container">
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleSongEnd}
            ></audio>

            <div className="main-content">
                <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <ListaMusicas
                    musicas={filteredMusicas}
                    musicaAtualId={musicaAtualId}
                    onSelectMusica={handleSelectMusica}
                    onToggleFavorite={handleToggleFavorite}
                    favoriteSongs={favoriteSongs}
                />
            </div>

            <MusicPlayer
                musica={musicaAtual}
                isPlaying={isPlaying}
                progresso={progresso}
                duracao={duracao}
                volume={volume}
                onPlayPause={handlePlayPause}
                onNext={handleNext}
                onPrev={handlePrev}
                onProgressoChange={handleProgressoChange}
                onVolumeChange={handleVolumeChange}
            />
        </div>
    );
}

export default Myapp;