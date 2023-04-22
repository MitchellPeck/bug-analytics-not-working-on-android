import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import LoginPage from './account/Login';

const DashboardPage: React.FC<RouteComponentProps> = () => {

  return (
    <IonRouterOutlet>
      <Route exact path='/dashboard/login' render={ () => {return localStorage.getItem("isAuthed") === "true" ? <LoginPage /> : <LoginPage />; }} />
      <Route render={() => <Redirect to="/dashboard/login" />} />
    </IonRouterOutlet>
  );
};

export default DashboardPage;