import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Container from '../container/index';
import FirstPage from '../components/first-page';
import SecondPage from '../components/second-page';

class Root extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Container path="/">
                    <Switch>
                        <Route exact path="/" component={FirstPage}/>
                        <Route path="/second" component={SecondPage} />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

export default Root;
