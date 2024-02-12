
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDHz-dRYjdngVm2-iL-4L18346WziA44_g",
  authDomain: "suyena-info.firebaseapp.com",
  projectId: "suyena-info",
  storageBucket: "suyena-info.appspot.com",
  messagingSenderId: "555587043456",
  appId: "1:555587043456:web:ccc3ff307f46c3b84f6665",
  measurementId: "G-1E0JD64VN7"
};
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);