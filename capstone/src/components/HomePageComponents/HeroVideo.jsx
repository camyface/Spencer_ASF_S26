import herovideo from "../../assets/videos/cookingvideo.mp4";

const HeroVideo = () => {
    return (
        <>
            <video src={herovideo} autoPlay={true} muted={true} loop={true}></video>
        </>
    )
}

export default HeroVideo;