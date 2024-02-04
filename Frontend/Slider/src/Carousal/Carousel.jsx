import React from 'react'
import img1 from '../assets/image/img1.jpg'
import img2 from '../assets/image/img2.jpg'
import img3 from '../assets/image/img3.jpg'
import img4 from '../assets/image/img4.jpg'
import ImageList from './ImageList'
import ThumnailList from './ThumnailList'
import { useEffect } from 'react'

const Carousal = () => {

    useEffect(() => {
        let next = document.querySelector("#next");
        let prev = document.querySelector("#prev");
        let carousel = document.querySelector(".carousel");
        let list = document.querySelector(".carousel .list");
        let thumbnail = document.querySelector(".carousel .thumbnail");

        let settingAutonext = 5000;
        let settingTimeout = 2500;
        let runTimeout;

        const showSlider = (str) => {
            let itemList = document.querySelectorAll(".carousel .list .item");
            let thumbnailList = document.querySelectorAll(".carousel .thumbnail .item");

            if (str === "next") {
                list.appendChild(itemList[0]);
                thumbnail.appendChild(thumbnailList[0]);
                carousel.classList.add('next');
            } else {
                let lastIdx = itemList.length - 1;
                list.prepend(itemList[lastIdx]);
                thumbnail.prepend(thumbnailList[lastIdx]);
                carousel.classList.add('prev');
            }

            clearTimeout(runTimeout);

            runTimeout = setTimeout(() => {
                carousel.classList.remove('next');
                carousel.classList.remove('prev');
            }, settingTimeout);

            // Reset auto-run timeout every time the carousel advances
            clearTimeout(runAutoNext);
            runAutoNext = setTimeout(() => {
                next.click();
            }, settingAutonext);
        };

        const handleClickNext = () => {
            showSlider("next");
        };

        const handleClickPrev = () => {
            showSlider("prev");
        };

        next.addEventListener("click", handleClickNext);
        prev.addEventListener("click", handleClickPrev);

        let runAutoNext = setTimeout(() => {
            console.log("run");
            next.click();
        }, settingAutonext);

        return () => {
            next.removeEventListener("click", handleClickNext);
            prev.removeEventListener("click", handleClickPrev);
            clearTimeout(runAutoNext); // Clear the auto-run timeout when component unmounts
        };
    }, []);



    return (
        <div className='carousel'>
            <div className='list'>
                <ImageList imgURL={img1} />
                <ImageList imgURL={img2} />
                <ImageList imgURL={img3} />
                <ImageList imgURL={img4} />

            </div>
            <div className="thumbnail">
                <ThumnailList imgURL={img1} />
                <ThumnailList imgURL={img2} />
                <ThumnailList imgURL={img3} />
                <ThumnailList imgURL={img4} />

            </div>
            {/* arrow */}
            <div className="arrows">
                <button id="prev">{"<"}</button>
                <button id="next">{">"}</button>
            </div>
            <div className="time"></div>
        </div>
    )
}

export default Carousal