import React, { useState, useEffect, useRef } from 'react';

const TransparentImage = ({ src, alt, className, tolerance = 20 }) => {
    const [processedSrc, setProcessedSrc] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = src;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Check if pixel is close to white
                if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
                    data[i + 3] = 0; // Set alpha to 0
                }
            }

            ctx.putImageData(imageData, 0, 0);
            setProcessedSrc(canvas.toDataURL());
        };
    }, [src, tolerance]);

    if (!processedSrc) {
        // Show original while processing (or nothing)
        return <img src={src} alt={alt} className={className} style={{ opacity: 0 }} />;
    }

    return <img src={processedSrc} alt={alt} className={className} />;
};

export default TransparentImage;
