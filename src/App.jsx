// App.js
// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import Navigation from './Navigation'; // Assuming you have a Navigation component

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
          {/* Your other components and routes */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
