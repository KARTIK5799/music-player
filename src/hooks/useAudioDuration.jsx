import { useState, useEffect } from 'react';

const useAudioDuration = (url) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const audio = new Audio(url);

        const onLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('loadedmetadata', onLoadedMetadata);

        return () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [url]);

    return duration;
};

export default useAudioDuration;
