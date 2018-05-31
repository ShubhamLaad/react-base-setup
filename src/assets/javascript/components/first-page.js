import { Link } from 'react-router-dom'
class FirstPage extends React.Component{
    render () {
        return (
            <div className="text-center">
                <Link to="/second" >second</Link>
                <h1>First page</h1>
                <div className="imageWrap">
                    <img src="/assets/images/shubham.jpg" className="img-responsive hide"/>
                </div>
            </div>
        )
    }
}

export default FirstPage;
