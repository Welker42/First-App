"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/app/gallery/gallery.module.css';

export default function Gallery() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCats() {
            try {
                // Substitua 'REPLACE_ME' pela sua chave de API real
                const apiKey = 'REPLACE_ME'; // Insira sua chave de API aqui
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`);
                setCats(response.data);
            } catch (err) {
                setError('Erro ao carregar as imagens.');
            } finally {
                setLoading(false);
            }
        }

        fetchCats();
    }, []);

    return (
        <div className={styles.Gallery}>
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.1nkpvwKLIg/v0/-999x-999.gif" alt="Wallpaper" className={styles.Wallpaper} />
            <h1>Galeria</h1>
            <h2 className={styles.Subtitle}>Aqui veremos algumas fotos de gatos Bengal</h2>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            <div className={styles.ImageContainer}>
                {cats.length > 0 ? (
                    cats.map((cat) => (
                        <div key={cat.id} className={styles.ImageItem}>
                            {cat.url ? (
                                <img src={cat.url} alt="Gato" className={styles.Image} />
                            ) : (
                                <p>Imagem não disponível</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Sem gatos para mostrar</p>
                )}
            </div>
        </div>
    );
}
