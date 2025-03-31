import { useState, useEffect, DragEvent } from 'react';
import sliderImg1 from '../../assets/slider/Amanda Souza Frente.png';
import sliderImg2 from '../../assets/slider/Lorena Junto2.png';

export default function Slider() {
    const images: string[] = [
        sliderImg1,
        sliderImg2,
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Troca de imagem automática
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Muda a cada 3 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    const handleBulletClick = (index: number): void => {
        setCurrentIndex(index);
    };

    const handleDragStart = (event: DragEvent<HTMLDivElement>): void => {
        event.dataTransfer.setData('text/plain', String(currentIndex));
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
        const startIndex = parseInt(event.dataTransfer.getData('text/plain'));
        const offset = startIndex > currentIndex ? -1 : 1;
        setCurrentIndex((prev) => (prev + offset + images.length) % images.length);
    };

    return (
        <section className="relative w-full h-64 md:h-75 overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDrop}>
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 flex justify-center items-center ">
                        <img src={image} alt={`Slide ${index + 1}`} className="object-cover max-w-[300px] md:max-w-[400px] h-full rounded" />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => handleBulletClick(index)}
                    />
                ))}
            </div>
        </section>
    );
}