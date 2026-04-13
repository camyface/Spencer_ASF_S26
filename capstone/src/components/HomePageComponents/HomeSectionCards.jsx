import HomeSection from "./HomeSection";
import { homeSections } from "../../data/homeSections.js";

const HomeSections = () => {
    return (
        <>
            {homeSections.map((section, index) => (
                <HomeSection
                    key={section.id}
                    {...section}
                    imageLeft={index % 2 === 1}
                />
            ))}
        </>
    );
};

export default HomeSections;