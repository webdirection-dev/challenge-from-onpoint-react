const Page2 = (props) => {
    const {
        handleTouchStart = Function.prototype,
        handleTouchMove = Function.prototype
    } = props

    return(
        <div
            className="yellow main__slide"
            onTouchStart={event => handleTouchStart(event)}
            onTouchMove={event => handleTouchMove(event)}
        >
            <h1>Page 2</h1>
        </div>
    )
}

export default Page2