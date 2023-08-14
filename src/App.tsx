import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//PAGES
import Home from './pages/Home';
import News from './pages/News';
import Services from './pages/Services';
import Login from './pages/Login';
import Message from './pages/Message';

//News Items
import NewsItem from './pages/NewsContent/NewsItem';

//Service Items
import Service1 from './pages/ServiceContent/service1';
import Service2 from './pages/ServiceContent/service2';
import Service3 from './pages/ServiceContent/service3';
import Service4 from './pages/ServiceContent/service4';
import Service5 from './pages/ServiceContent/service5';

//COMPONENTS
import Menu from './components/Menu';
import Notice from './components/Notice';
import AddModal from './components/AddModal';

//staff items
import Staff_Dashboard from './pages/staff/Staff_Dashboard';
import Staff_ManageNews from './pages/staff/Staff_ManageNews';

//staff components
import Staff_Menu from './components/staff/Staff_Menu';



// setupIonicReact();

// const App: React.FC = () => {


//   // function ifUserLogin(islogin: boolean) {

//   //   return
//   // }


//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonSplitPane contentId="main">
//           <Menu />
//           <IonRouterOutlet id="main">
//             <Route path="/" exact={true}>
//               <Redirect to="/page/login" />
//             </Route>
//             <Route path="/page/Home" component={Home} />
//             <Route path="/page/News" component={News} />
//             <Route path="/page/Services" component={Services} />
//             <Route path="/components/Notice" component={Notice} />

//             <Route path="/page/login" component={Login} />
//             <Route path="/page/message" component={Message} />

//             {/* News Path */}
//             <Route path="/page/NewsContent/:id" component={NewsItem} />

//             {/* Service Path */}
//             <Route path="/page/ServiceContent/service1" component={Service1} />
//             <Route path="/page/ServiceContent/service2" component={Service2} />
//             <Route path="/page/ServiceContent/service3" component={Service3} />
//             <Route path="/page/ServiceContent/service4" component={Service4} />
//             <Route path="/page/ServiceContent/service5" component={Service5} />

//             {/* staff panell*/}
//             <Route path="/staff/ManageNews" component={Staff_ManageNews} />
//             <Route path="/staff/AddNews" component={Staff_AddNews} />


//           </IonRouterOutlet>
//         </IonSplitPane>
//       </IonReactRouter>
//     </IonApp>
//   );
// };

// export default App;
// {/* --------------------tempoery solution dahil error pag madaming menu-------------------- */ }

// {/* <IonReactRouter>
//         <IonSplitPane contentId='staff'>
//           <Staff_Menu />

//           <IonRouterOutlet id='staff'>
//             <Route path="/staff" >
//               <Redirect to="/staff/Dashboard" />
//             </Route>

//             <Route path="/staff/Dashboard" component={Staff_Dashboard} />

//           </IonRouterOutlet>

//         </IonSplitPane>

//       </IonReactRouter>  */}

// {/* --------------------tempoery solution dahil error pag madaming menu-------------------- */ }

import React, { useEffect, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Set the initial login state to false
  const [isCheckingLoggedIn, setIsCheckingLoggedIn] = useState(true);

  // Function to handle successful login and update loggedIn state
  // Function to handle successful login and update loggedIn state
  const handleLogin = () => {
    setLoggedIn(true);
    sessionStorage.setItem('loggedIn', 'true'); // Save the login state to session storage
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('loggedIn'); // Remove the login state from session storage
  };

  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
    setIsCheckingLoggedIn(false); // Mark the check as complete
  }, []);

   // Render nothing until the login check is complete
   if (isCheckingLoggedIn) {
    return null;
  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
            {loggedIn && <Menu onLogout={handleLogout} />}

          <IonRouterOutlet id="main">
            {/* Public Routes */}
            <Route
              path="/page/login"
              render={(props) => (
                // Pass loggedIn state and handleLogin function as props to Login component
                <Login {...props} loggedIn={loggedIn} onLogin={handleLogin} />
              )}
            />

            {/* Private Routes (Accessible only when logged in) */}
            {loggedIn ? (
              <>
                <Route path="/page/Home" component={Home} />
                <Route path="/page/News" component={News} />
                <Route path="/page/Services" component={Services} />
                <Route path="/components/Notice" component={Notice} />
                <Route path="/page/message" component={Message} />
               {/* News Path */}
//             <Route path="/page/NewsContent/:id" component={NewsItem} />

//             {/* Service Path */}
//             <Route path="/page/ServiceContent/service1" component={Service1} />
//             <Route path="/page/ServiceContent/service2" component={Service2} />
//             <Route path="/page/ServiceContent/service3" component={Service3} />
//             <Route path="/page/ServiceContent/service4" component={Service4} />
//             <Route path="/page/ServiceContent/service5" component={Service5} />
                <Route path="/staff/ManageNews" component={Staff_ManageNews} />
              </>
            ) : (
              // Redirect to login page for private routes when not logged in
              <Redirect to="/page/login" />
            )}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;