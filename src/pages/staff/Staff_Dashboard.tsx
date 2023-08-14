import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useParams } from "react-router";
import "./staff_Dashboard.css";

import React from 'react';

import ReactDOM from 'react-dom';
import { mailOutline, notificationsOffOutline, notificationsOutline } from "ionicons/icons";
import { Route } from 'react-router-dom';


const Staff_Dashboard: React.FC = () => {

  const { name } = useParams<{ name: string }>();



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon className="notification-icon" icon={notificationsOutline} ></IonIcon>
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-content-home">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Dashboard</h1>

      </IonContent>
    </IonPage>
  );
};

export default Staff_Dashboard;
