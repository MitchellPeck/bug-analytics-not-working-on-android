import '@passageidentity/passage-elements/passage-auth';
import './Passage Styles.css';
import { Passage } from '@passageidentity/passage-js';
import { IonPage, IonContent } from '@ionic/react';
import setCurrentScreen from '../firebase/setCurrentScreen';
import { useIonViewDidEnter } from '@ionic/react';

function LoginPage() {

  useIonViewDidEnter(() => {
    setCurrentScreen("Login");
  });

  const passage = new Passage(`${process.env.REACT_APP_passage}`);
  const session = passage.getCurrentSession();

  localStorage.clear();
  session.signOut();

  return (
    <IonPage>
      <IonContent>
        <div className="mainContainer">
          <div className="authContainer">
            <passage-auth app-id={process.env.REACT_APP_passage}></passage-auth>
            <script src="https://cdn.passage.dev/passage-web.js"></script>
            <h6>Note: Account signup is for parents only. If you need an account as a student, please contact your admin.</h6>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LoginPage;
