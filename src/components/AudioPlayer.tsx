import { useRef } from 'react';

interface AudioPlayerProps {
  audioUrl: string | null;
}

const audioPlayerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  padding: '10px',
  zIndex: 1000, // Para garantir que o player fique acima de outros elementos
  boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.2)', // Opcional: Adiciona uma sombra
};

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  if (audioUrl && audioRef.current) {
    audioRef.current.src = audioUrl;
    audioRef.current.play();
  }

  return (
    <div style={audioPlayerStyle}>
      <audio ref={audioRef} controls>
        <source src={audioUrl || ''} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
