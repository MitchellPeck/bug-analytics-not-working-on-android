import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

const setCurrentScreen = async (screen: string) => {
    await FirebaseAnalytics.setCurrentScreen({
      screenName: screen,
      screenClassOverride: screen+'Page',
    });
  };

export default setCurrentScreen;