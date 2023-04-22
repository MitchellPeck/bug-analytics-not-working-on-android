import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

const setUserAccountType = async (type: string) => {
  await FirebaseAnalytics.setUserProperty({
    key: 'type',
    value: type,
  });
};

export default setUserAccountType;