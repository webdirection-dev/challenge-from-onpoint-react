import './general.scss'
import arrow from '../../../img/btn-gen-left.png'

const General = (props) => {
    const {
        handleTouchStart = Function.prototype,
        handleTouchMove = Function.prototype,
        onRight = Function.prototype
    } = props

    return(
        <div
            className="general main__slide"
            onTouchStart={event => handleTouchStart(event)}
            onTouchMove={event => handleTouchMove(event)}
        >
            <div className="general__content">
                <p><span className='general__content-hi'>привет,</span>это <span className='general__content-bold'>не</span> <br/>коммерческое<br/>задание </p>
                <button
                    className='general__btn'
                    onClick={onRight}
                >
                    <div className='general__btn-content'>
                        <img className='general__btn-img' src={arrow} alt="..."/>
                        <p>Что дальше?</p>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default General