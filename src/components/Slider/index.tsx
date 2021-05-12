import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SliderContainer from './styles';
import { useEffect, useState } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export default function Slider() {

	const covers = [
		{img: '/img/cover-001.jpg'},
		{img: '/img/cover-002.jpg'},
		{img: '/img/cover-003.jpg'},
		{img: '/img/cover-004.jpg'},
		{img: '/img/cover-005.jpg'},
		{img: '/img/cover-006.jpg'},
		{img: '/img/cover-007.jpg'},
		{img: '/img/cover-008.jpg'},
		{img: '/img/cover-009.jpg'},
		{img: '/img/cover-010.jpg'},
	];


		// Hook
		function useWindowSize() {
			// Initialize state with undefined width/height so server and client renders match
			const [windowSize, setWindowSize] = useState<Size>({
				width: undefined,
				height: undefined,
			});
			useEffect(() => {
				// Handler to call on window resize
				function handleResize() {
					// Set window width/height to state
					setWindowSize({
						width: window.innerWidth,
						height: window.innerHeight,
					});
				}
				// Add event listener
				window.addEventListener("resize", handleResize);
				// Call handler right away so state gets updated with initial window size
				handleResize();
				// Remove event listener on cleanup
				return () => window.removeEventListener("resize", handleResize);
			}, []); // Empty array ensures that effect is only run on mount
			
			return windowSize;
		};
		

		let windowWidth = useWindowSize().width;
		let slides = 0;
		if ( windowWidth !== undefined && windowWidth < 601) {
			slides = 2;
		}
		else 
			if ( windowWidth !== undefined && windowWidth < 840) {
				slides = 3;
		}
		else 
			if ( windowWidth !== undefined && windowWidth < 1001) {
				slides = 4;
		}
		else {
			slides = 5;
		}
		// console.log(slides);
		

	const [ sliderRef ] = useKeenSlider({
    slidesPerView: slides,
    mode: "free",
    spacing: 4,
    loop: true,
  })


	return (
		<SliderContainer>
			<p>Recomendados para você</p>
			{/* @ts-ignore */}
			<div ref={sliderRef} className="keen-slider">
				{
					covers.map((image, index) => {
						return (
							<div 
								className="keen-slider__slide number-slide"
								key={index}
							>
								<img src={image.img} alt="Capa"/>
							</div>
						)
					})
				}
			</div>
		</SliderContainer>
	);
}