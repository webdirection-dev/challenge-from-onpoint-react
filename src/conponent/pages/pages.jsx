import {useState} from "react";

import General from "./general";
import Page2 from "./page2";
import Page3 from "./page3";

const Pages = (props) => {
    const {
        isSlides = [],
        isOffset = 0,
        onLeft = Function.prototype,
        onRight = Function.prototype,
    } = props

    const [isFirstTouch, setFirstTouch] = useState({})

    const handleTouchStart = (event) => {
        setFirstTouch(event.touches[0])
    }

    const handleTouchMove = (event) => {
        if (isFirstTouch.clientX === undefined || isFirstTouch.clientY === undefined) return
        const x2 = event.touches[0].clientX
        const y2 = event.touches[0].clientY

        const xDiff = x2 - isFirstTouch.clientX
        const yDiff = y2 - isFirstTouch.clientY

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            // right
            if (xDiff > 0) onLeft()
            // left
            else onRight()
        } else {
            // top or bottom
            if (yDiff > 0) console.log('bottom')
            else console.log('top')
        }

        setFirstTouch({})
    }

    return(
        <View
            isSlides={isSlides}
            isOffset={isOffset}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            onRight={onRight}
        />
    )
}

export default Pages

const View = ({isSlides, isOffset, handleTouchStart, handleTouchMove, onRight}) => {
    return(
        <div
            className="main__slider-inner"
            style={
                {
                    'width': `${100 * isSlides.length}%`,
                    'transform': `translateX(-${isOffset}px)`,
                }
            }
        >

            <General
                handleTouchStart={handleTouchStart}
                handleTouchMove={handleTouchMove}
                onRight={onRight}
            />

            <Page2
                handleTouchStart={handleTouchStart}
                handleTouchMove={handleTouchMove}
            />

            <Page3
                handleTouchStart={handleTouchStart}
                handleTouchMove={handleTouchMove}
            />
        </div>
    )
}