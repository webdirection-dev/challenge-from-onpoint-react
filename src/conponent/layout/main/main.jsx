import {useEffect, useState} from "react";
import './main.scss'
import Pages from "../../pages";



const Main = () => {
    const [isWidthMain, setWidthMain] = useState('')
    const [isSlides, setSlides] = useState([])
    const [isOffset, setOffset] = useState(0)

    const onLeft = () => {
        if (isOffset === 0) setOffset(0)
        else setOffset(isOffset - +isWidthMain)
    }

    const onRight = () => {
        const finish = +isWidthMain * (isSlides.length -1)
        if (isOffset === finish) setOffset(finish)
        else setOffset(isOffset + +isWidthMain)
    }

    useEffect(() => {
        // componentDidMount
        // Получим ширину окна показа слайдов. На эту ширину слайды будут сдвигаться
        const mainWindow = document.querySelector('.main')
        setWidthMain(window.getComputedStyle(mainWindow).width.replace(/\D/g, ''))

        // Получим псевдомассив со слайдами
        setSlides(document.querySelectorAll('.main__slide'))
    }, [])

    return(
        <View
            isSlides={isSlides}
            isOffset={isOffset}
            onLeft={onLeft}
            onRight={onRight}
        />
    )
}

export default Main

const View = ({isSlides, isOffset, onLeft, onRight}) => {
    return(
        <div className='main'>

            <Pages
                isSlides={isSlides}
                isOffset={isOffset}
                onLeft={onLeft}
                onRight={onRight}
            />

            <button
                className="left"
                onClick={onLeft}
            >LEFT</button>

            <button
                className="right"
                onClick={onRight}

            >RIGHT</button>
        </div>
    )
}