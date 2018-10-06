
import React from "react";
import Slider from "react-slick";
import ReactDom from 'react-dom';

class SimpleSlider extends React.Component {
		render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			slidesToScroll: 1
		};


		return (
			<Slider {...settings}>
				<div className="col-12">
					<img src={require("./icons/664063.jpg")} alt="" className="img-fluid rounded mx-auto d-block" />
					<div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis error in, nulla omnis pariatur perspiciatis soluta tenetur! Facilis, inventore.</div>
				</div>
				<div className="col-12">
					<img src={require("./icons/cat1.jpg")} alt="" className="img-fluid rounded mx-auto d-block" />
					<div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur in molestiae neque quia unde?</div>
				</div>
				<div className="col-12">
					<img src={require("./icons/17683912355702337432.jpg")} alt="" className="img-fluid rounded mx-auto d-block " />
					<div  className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, vero!</div>
				</div>

			</Slider>
		);
	}
}
ReactDom.render(
	<div>
		<SimpleSlider/>
	</div>,
	document.getElementById('root')
);