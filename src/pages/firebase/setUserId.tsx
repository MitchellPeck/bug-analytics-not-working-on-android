import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

const setUserId = async (uid: string) => {
    await FirebaseAnalytics.setUserId({
      userId: uid,
    });
  };

export default setUserId;