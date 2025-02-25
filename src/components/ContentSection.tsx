import './ContentSection.css'
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import logout from '../utils/logout';
import api from '../utils/api';

interface Item {
  category: string;
  name: string;
  description: string;
  iconUrl: string;
  type: string;
  downloadUrl: string;
  previewUrl: string;
}

const ContentSection = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    api().get('/timbre').then(response => {
      setItems(response.data);
    }
    ).catch(error => {
      if (error.response.status === 401) {
        logout();
      }
      console.error('Erro ao carregar os dados:', error)
    });
  }, []);


  const playAudio = (url: string) => {
    setAudioUrl(url);
  };

  return (
    <div className="sections-container">

      {items.map((item, index) => (
        <div className="section" key={index}>
          <h2>{item.category}</h2>
          <div className="items-container">
            <div className="item">
              <h3 className="nome">{item.name}</h3>
              <img src={item.iconUrl} alt={item.name} />
              <p className="descricao">{item.description}</p>
              <button className="previa" onClick={() => playAudio(item.previewUrl)}>
                🎧 Prévia
              </button>
              <button className="download" onClick={() => window.open(item.downloadUrl, '_blank')}>
                📥 Baixar
              </button>
            </div>
          </div>
        </div>
      ))}

      {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
    </div>
  );
};

export default ContentSection;
