import { Container } from "react-bootstrap";
import HomeSection from "./HomeSection";
import { homeSections } from "../../data/homeSections.js";

const HomeSectionCards = () => {
    return (
        <Container>
            {homeSections.map((section, index) => (
                <HomeSection
                    key={section.id}
                    {...section}
                    imageLeft={index % 2 === 1}
                />
            ))}
        </Container>
    );
};

export default HomeSectionCards;