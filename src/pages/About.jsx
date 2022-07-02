import React from "react";
import Accordion from "../components/Accordion/Accordion";
import BackgroundImg from "../assets/images/jar-background.png";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import Section from "../components/Section/Section";

const About = () => {
	return (
		<Main image="yes" bgImage={BackgroundImg}>
			<Section>
				<Hero
					title1="SIMPLER SAVING."
					title2="MORE MONEY."
					title3="LESS STRESS."
					subtitle="Building a picture of all your assets, monitoring your money and controlling your spending has one purpose, and one purpose only: 
			to lead to a richer life. A rich life isn’t just about money. It’s about how you use it. Are you sure ready for this?"
				>
					<Accordion title="What is 6-JAR's system?">
						6-JAR's system is simple, easy to start and it has worked for hundreds of thousands people’s lives over
						years. All you have to do is to divide your money into 6 categories for specific purposes: Necessities,
						Long-term, Play, Education, Financial, Give.
					</Accordion>

					<Accordion title="Why should I start doing 6-JAR's system?">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id porro deserunt, corrupti consequuntur autem
						facere recusandae cum nulla eveniet quidem, voluptatum eaque quis sunt. Nostrum aut voluptatibus maiores
						eveniet culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa expedita deserunt aut
						corporis! Tenetur, enim minima optio porro voluptas doloribus? Dolorum omnis doloremque nesciunt eaque unde
						iste eveniet atque?
					</Accordion>

					<Accordion title="Is it so truly easy to save money?">
						Yes, but Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id porro deserunt, corrupti consequuntur
						autem facere recusandae cum nulla eveniet quidem, voluptatum eaque quis sunt. Nostrum aut voluptatibus
						maiores eveniet culpa.
					</Accordion>
				</Hero>
			</Section>
		</Main>
	);
};

export default About;
