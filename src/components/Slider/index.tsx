import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SliderContainer from './styles';

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

	const [ sliderRef ] = useKeenSlider({
    slidesPerView: 5,
    mode: "free",
    spacing: 4,
    loop: true,
  })


	return (
		<SliderContainer>
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