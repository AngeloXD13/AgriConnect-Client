import {
    IonPage,
    IonContent,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonButton,
    IonAlert,
    IonImg,
    IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";
import { location, logoFacebook, logoInstagram, logoTwitter, logoWhatsapp, mailOutline, mapOutline, pin } from "ionicons/icons";

interface LoginProps {
    loggedIn: boolean;
    onLogin: () => void;
}


const Login: React.FC<LoginProps> = ({ loggedIn, onLogin }) => {


    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccess, setShowSuccessAlert] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (email === "user1@gmail.com" && password === "user1pass") {
          sessionStorage.setItem("emailData", email);
          sessionStorage.setItem("passwordData", password);
          setShowSuccessAlert(true);
          onLogin(); // Call the onLogin prop to update the loggedIn state in App.tsx
        } else if (email === "staff1@gmail.com" && password === "staff1pass") {
          sessionStorage.setItem("emailData", email);
          sessionStorage.setItem("passwordData", password);
          setShowSuccessAlert(true);
          onLogin(); // Call the onLogin prop to update the loggedIn state in App.tsx
        } else {
          setShowAlert(true);
          setEmail("");
          setPassword("");
        }
      };

    //The user will be directed to home after it click the proceed button in success alert.
    const proceedToHomePage = () => {
        setShowSuccessAlert(false);
        if (email === "user1@gmail.com" && password === "user1pass") {
            history.push("/page/home");
            setEmail("");
            setPassword("");
        }
        else if (email === "staff1@gmail.com" && password === "staff1pass") {
            history.push("/page/News");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="loginsection">
                    <div className="logincontainer">
                        
                            <IonCard className="logincard">
                                <form onSubmit={handleLogin}>
                                {/* <div className="top_design">
                                    <IonImg className="toppic" src='top.png' alt="Vines"></IonImg>
                                </div> */}
                                <div className="loginlogo">
                                    <IonImg className='applogopic' src='applogo.png' alt="Logo of AgriConnect"></IonImg>
                                </div>
                                <div className="loginwelcometext">
                                    <h1><b>Login your Account </b></h1>
                                </div>
                                <div className="pagbati_div">
                                    <p className="pagbati">
                                        Mangyari lamang po na mag-login gamit ang username at password
                                        na ibinigay sa iyo ng naka-assign na staff ng office. Maraming Salamat.
                                    </p>
                                </div>

                                <div className="userinputs">
                                    <IonInput
                                        label="Email"
                                        type="email"
                                        labelPlacement="floating"
                                        fill="outline"
                                        value={email}
                                        onIonChange={(e) => setEmail(e.detail.value!)}
                                        required
                                        placeholder="Enter your Email"
                                    ></IonInput>
                                    <br />
                                    <IonInput
                                        label="Password"
                                        type="password"
                                        labelPlacement="floating"
                                        fill="outline"
                                        value={password}
                                        onIonChange={(e) => setPassword(e.detail.value!)}
                                        required
                                        placeholder="Enter password"
                                    ></IonInput>
                                </div>
                                <div className="login_btn">
                                    <button className="loginbutton" type="submit">
                                        <b>Log In</b>
                                    </button>
                                </div>
                                </form>
                            </IonCard>
                        
                        <div className="login_about">
                            <p className="wlcm">Welcome to <b>Agri Connect</b></p>
                            <div className="offname_sec">
                                <h1> City <br /> 
                                    Agricultural <br /> 
                                    Office
                                    <h2><i>(Official Website)</i> </h2>
                                </h1>
                            </div>
                            
                            <div className="loc_social">
                                <div className="loc">
                                <p className="vst"><b>Visit us:</b></p>
                                <p className="login_add"> <IonIcon icon={location} className='logostyle'> </IonIcon> At Diversion Road, Batangas City </p>
                                </div>
                                <div className="social">
                                    <p className="cnnct"><b>Connect with us:</b></p>
                                    <p className="login_social">
                                        <IonIcon icon={logoFacebook} className="logostyle"></IonIcon>
                                        <IonIcon icon={logoInstagram} className="logostyle"></IonIcon>
                                        <IonIcon icon={logoTwitter} className="logostyle"></IonIcon>
                                        <IonIcon icon={logoWhatsapp} className="logostyle"></IonIcon>
                                    </p>
                                </div>
                            </div>
                            {/* <div className="login_about_loc">
                                <IonIcon icon={location} className='locstyle'> </IonIcon>
                                <p className="login_add"> Located at Diversion Road, Batangas City </p>
                            </div> */} 
                            
                                {/* <div className="login_aboutdesc">
                                    <p> <b> AgriConnect</b> </p>
                                    <p>AgriConnect Platform is the official site of City Agriculture office 
                                        wherein the residents can communicated with the office staff, regarding with the 
                                        services the residents wants to avail. 
                                    </p>
                                </div> 
                                <div className="loginpic_section">
                                    <IonImg className="logpic" src='loginpic.png' alt="people using webpage"></IonImg>
                                </div> */}
                            

                        </div>
                    </div>
                </div>
                

                

                {/* An alert where it will indicate to user that they have successfully logged in. */}
                <IonAlert
                    isOpen={showSuccess}
                    onDidDismiss={proceedToHomePage}
                    header="Success"
                    message="You have successfully logged in."
                    buttons={["Proceed"]}
                />

                {/* An alert where the user be notified that they entered a wrong credentials */}
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header="Invalid credentials"
                    message="The email or password you entered is incorrect."
                    buttons={["Try Again"]}
                />
            </IonContent>
            
        </IonPage>
    );
};

export default Login;
