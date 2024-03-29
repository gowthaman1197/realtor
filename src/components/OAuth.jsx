import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClickHandler() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      toast.success("Have logged with OAuth successfully.");
    } catch (error) {
      console.error();
      toast.error("Could not authorize with Google.");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClickHandler}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-300 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue with
      Google
    </button>
  );
}

export default OAuth;
