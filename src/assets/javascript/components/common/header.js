class Header extends React.Component{

    render () {
        return (
            <header className="text-center">
                <h2>{this.props.text}</h2>
            </header>
        )
    }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
