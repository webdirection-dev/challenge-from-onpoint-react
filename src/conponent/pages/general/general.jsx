const General = (props) => {
    const {
        handleTouchStart = Function.prototype,
        handleTouchMove = Function.prototype
    } = props

    return(
        <div
            className="black main__slide"
            onTouchStart={event => handleTouchStart(event)}
            onTouchMove={event => handleTouchMove(event)}
        >
            <h1>Page 1</h1>
        </div>
    )
}

export default General