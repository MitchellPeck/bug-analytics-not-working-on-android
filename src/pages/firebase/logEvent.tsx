import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

const logEvent = async (event: string) => {
    await FirebaseAnalytics.logEvent({
        name: event,
    });
};

export default logEvent;