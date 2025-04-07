import { useState, useEffect, useRef, PointerEvent } from 'react';
import sliderImg0 from '../../assets/slider/costasanapagot.jpeg';
import sliderImg1 from '../../assets/slider/IMG_2847.jpeg';
import sliderImg2 from '../../assets/slider/IMG_3927.jpeg';
import sliderImg3 from '../../assets/slider/Lorena-Junto2-2.jpeg';
import sliderImg4 from '../../assets/slider/V2-ad.jpeg';
import sliderImg5 from '../../assets/slider/V2-ad2G.jpeg';
import sliderImg6 from '../../assets/slider/NicoleCristina.jpeg';
import sliderImg7 from '../../assets/slider/imgSete.jpeg';
import sliderImg8 from '../../assets/slider/imgOito.jpeg';
import sliderImg9 from '../../assets/slider/imgNove.jpeg';
import sliderImg10 from '../../assets/slider/imgDez.jpeg';
import sliderImg11 from '../../assets/slider/imgOnze.jpeg';

export default function Slider() {
    const images: string[] = [
        sliderImg0,
        sliderImg2,
        sliderImg6,
        sliderImg1,
        sliderImg3,
        sliderImg4,
        sliderImg5,
        sliderImg7,
        sliderImg8,
        sliderImg9,
        sliderImg10,
        sliderImg11,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const resetAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 8000);
    };

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

        resetAutoSlide();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isVisible]);

    const handleBulletClick = (index: number): void => {
        setCurrentIndex(index);
        resetAutoSlide();
    };

    const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        if (!isDragging || startX === null) return;
        const delta = e.clientX - startX;
        setDragX(delta);
    };

    const handlePointerUp = () => {
        if (!isDragging) return;

        const threshold = 50;

        if (dragX > threshold) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (dragX < -threshold) {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }

        resetAutoSlide();

        setStartX(null);
        setDragX(0);
        setIsDragging(false);
    };

    const totalOffset = -currentIndex * 100 + (dragX / window.innerWidth) * 100;

    return (
        <div id="carousel" className="w-full flex items-center justify-center z-20 overflow-hidden">
            <section
                className="relative w-full h-80 md:h-150 overflow-hidden"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                <div
                    className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
                    style={{ transform: `translateX(${totalOffset}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 flex justify-center items-center select-none"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover max-w-[350px] md:max-w-[700px] h-full rounded"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center space-x-2">
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
