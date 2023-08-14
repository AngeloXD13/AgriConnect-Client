import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonModal,
    IonInput,
    IonFab,
    IonFabButton,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonAvatar,
    IonLabel,
} from "@ionic/react";
import {
    caretForwardOutline,
    notificationsOutline,
    send,
} from "ionicons/icons";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import React, { useEffect, useRef, useState } from "react";
import "./Message.css";
import AddModal from "../components/AddModal";

const Message: React.FC = () => {
    const location = useLocation();
    const { name } = useParams<{ name: string }>();
    const modal = useRef<HTMLIonModalElement>(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
                <IonIcon
                className="notification-icon"
                icon={notificationsOutline}
                ></IonIcon>
            </IonButtons>
            <IonTitle>Agri Connect Message</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div className="mess_body">
            <div className="message_list">
                <IonItem button onClick={openModal} detail={true}>
                <IonAvatar slot="start">
                    <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                </IonAvatar>
                <IonLabel>
                    <h2>
                    <b>Chatbot</b>
                    </h2>
                    <p>Frequently Asked Questions</p>
                </IonLabel>
                </IonItem>
                <IonItem button disabled detail={true}>
                <IonAvatar slot="start">
                    <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                </IonAvatar>
                <IonLabel>
                    <h2>
                    <b>Agricultural Engineering Division</b>
                    </h2>
                    <p>Frequently Asked Questions</p>
                </IonLabel>
                </IonItem>
                <IonItem button detail={true} disabled>
                <IonAvatar slot="start">
                    <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                </IonAvatar>
                <IonLabel> Cooperative Division</IonLabel>
                </IonItem>
                <IonItem button detail={true} disabled>
                <IonAvatar slot="start">
                    <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                </IonAvatar>
                <IonLabel> Crop Production Division</IonLabel>
                </IonItem>
                <IonItem button detail={true} disabled>
                <IonAvatar slot="start">
                    <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                </IonAvatar>
                <IonLabel> Fishery Division</IonLabel>
                </IonItem>
            </div>
            <IonModal isOpen={showModal} onDidDismiss={closeModal}>
                <AddModal />
            </IonModal>
            </div>
        </IonContent>
        </IonPage>
    );
};
export default Message;
