import { useEffect, useRef } from 'react';
import './Tools.css'

function Tools(){
    const placeholderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-border');
                }
            });
        }, { threshold: 0.1 });

        if (placeholderRef.current) {
            observer.observe(placeholderRef.current);
        }

        return () => {
            if (placeholderRef.current) {
                observer.unobserve(placeholderRef.current);
            }
        };
    }, []);

    return(
        <>
            <div className='placeholder' ref={placeholderRef}>
                <div className="tools-container">
                    <div className='tools'>Tools</div>
                </div>
            </div>
            
        </>
    )
}

export default Tools;