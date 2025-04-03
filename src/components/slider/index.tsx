import { useState, useEffect, DragEvent, TouchEvent } from 'react';
import sliderImg1 from '../../assets/slider/IMG_2847.jpeg';
import sliderImg2 from '../../assets/slider/IMG_3927.jpeg';
import sliderImg3 from '../../assets/slider/Lorena-Junto2-2.jpeg';
import sliderImg4 from '../../assets/slider/V2-ad.jpeg';
import sliderImg5 from '../../assets/slider/V2-ad2G.jpeg';

export default function Slider() {
    const images: string[] = [
        sliderImg1,
        sliderImg2,
        sliderImg3,
        sliderImg4,
        sliderImg5,
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [dragStartX, setDragStartX] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [touchStartX, setTouchStartX] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const carouselElement = document.getElementById('carousel');
            if (carouselElement) {
                const rect = carouselElement.getBoundingClientRect();
                const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsVisible(isInViewport);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length, isVisible]);

    const handleBulletClick = (index: number): void => {
        setCurrentIndex(index);
    };

    const handleDragStart = (event: DragEvent<HTMLDivElement>): void => {
        setDragStartX(event.clientX);
    };

    const handleDragEnd = (event: DragEvent<HTMLDivElement>): void => {
        const dragEndX = event.clientX;
        const offset = dragEndX < dragStartX ? 1 : -1;
        setCurrentIndex((prev) => (prev + offset + images.length) % images.length);
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
        const touchEndX = event.changedTouches[0].clientX;
        const offset = touchEndX < touchStartX ? 1 : -1;
        setCurrentIndex((prev) => (prev + offset + images.length) % images.length);
    };

    return (
        <div id="carousel" className="absolute w-full h-screen flex items-center justify-center z-20">

            <section className="relative w-full h-80 md:h-150 overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 flex justify-center items-center">
                            <img src={image} alt={`Slide ${index + 1}`} className="object-cover max-w-[350px] md:max-w-[700px] h-full rounded" />
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
        </div>
    );
}
