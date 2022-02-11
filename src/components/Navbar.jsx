import React from "react";
import {Image,Wrapper,Div,A} from "./Navbar.styled"

export const Navbar = () => {
	return (
		<Wrapper>
			<Image src="https://i.pinimg.com/originals/37/64/f3/3764f310c29105644ced473e00b864e0.png"></Image>
			<Div>
				<A href="https://www.google.com">Google</A>
				<A href="https://www.facebook.com">FaceBook</A>
			</Div>
		</Wrapper>
	);
};
