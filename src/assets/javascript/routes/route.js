import {
  HashRouter,
  Route,
} from 'react-router-dom';

import Container from '../container/index';
import FirstPage from '../components/first-page';

class Root extends React.Component{
    render() {
        return (
            <HashRouter>
                <Container path="/">
                    <Route exact path="/" component={FirstPage}/>
                </Container>
            </HashRouter>
        );
    }
}

export default Root;
