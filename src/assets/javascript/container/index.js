import Header from '../components/common/header.js';
import Footer from '../components/common/footer.js';

class Container extends React.Component{
    render () {
        return (
            <div>
                <Header text="I m header"/>
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
