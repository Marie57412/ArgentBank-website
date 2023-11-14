import { store } from './Redux/redux';
import Router from './Components/Router.js';
import './css/main.css';

// Redux
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

