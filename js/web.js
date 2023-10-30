import React from "react";
import HeroSlider, {slide} from 'hero-slider';

// Image

const image1 = "../img/5.JPG";
const image2 = "../img/9.JPG";
const image3 = "../img/17.JPG";
const image4 = "../img/36.JPG";
const image5 = "../img/60.JPG";

const App = () => {
    return (
        <HeroSlider
            slidingAnimation = "left_to_right"
            orientation = "horizontal"
            initialSlide = {1}
            onBeforeChange = {(PreviousSlide, nextSlide) => console.log("onBeforeChange", PreviousSlide,nextSlide)}
            onchange = {nextSlide => console.log("onChange", nextSlide)}
            onAfterChange = {nextSlide => console.log("onAfterChange", nextSlide)}
            style = {{
                backgroundColor: "rgba(0,0,0,0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slideDelay: 100,
             shouldAutoplay: true,
             shouldDisplayButton: true,
             autoplayDuration: 5000,
             height:"100vh"
            }}
        >
            <slide
                background={{
                    backgroundImage: image1,
                    backgroundAttachment: "fixed"
                }}
            />

            <slide
                background={{
                    backgroundImage: image2,
                    backgroundAttachment: "fixed"
                }}
            />

            <slide
                background={{
                    backgroundImage: image3,
                    backgroundAttachment: "fixed"
                }}
            />

            <slide
                background={{
                    backgroundImage: image4,
                    backgroundAttachment: "fixed"
                }}
            />

            <slide
                background={{
                    backgroundImage: image5,
                    backgroundAttachment: "fixed"
                }}
            />
        </HeroSlider>
    )
}

export default App;