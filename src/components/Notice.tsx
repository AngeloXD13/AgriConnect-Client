
import { IonPage, IonContent, IonImg, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import { useParams } from "react-router";

import "./Notice.css";

const Notice: React.FC = () => {

    const { name } = useParams<{ name: string }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Notice</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen >
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className='imgcontainer'>
                <IonImg className='workinprogress' src='work.png'>brb</IonImg>
                <h1 className='worktitle'>Be right back!</h1>
                </div>

            </IonContent>

        </IonPage>
    );

}

export default Notice;