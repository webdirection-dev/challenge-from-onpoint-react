import './page3.scss'

const Page3 = (props) => {
    const {
        handleTouchStart = Function.prototype,
        handleTouchMove = Function.prototype
    } = props

    return(
        <div
            className="brand main__slide"
            onTouchStart={event => handleTouchStart(event)}
            onTouchMove={event => handleTouchMove(event)}
        >
            <h1>Page 3</h1>
        </div>
    )
}

export default Page3