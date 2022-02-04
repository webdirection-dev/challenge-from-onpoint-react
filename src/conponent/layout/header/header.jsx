import './header.scss'

const Header = ({setOffset}) => {
    return(
        <div className='header' >
            <i
                className="header__icon fas fa-home"
                onClick={() => setOffset(0)}
            />
            <span className='header__pipe'>|</span>
            <span className='header__logo'>PROJECT</span>
        </div>
    )
}

export default Header