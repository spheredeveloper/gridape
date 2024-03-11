import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const addEmailToFirebase = async (email: string) => {
    try {
        const emailQuery = query(collection(db, "email"), where("email", "==", email));
        const querySnapshot = await getDocs(emailQuery);
        if (!querySnapshot.empty) {
            console.log("Email already exists!");
            return false;
        }
        const docRef = await addDoc(collection(db, "email"), {
            email: email,
        });
        console.log("Successful");
        return true;
    } catch (error) {
        console.error("Error adding email to Firestore:", error);
        return false;
    }
}

export default addEmailToFirebase;
