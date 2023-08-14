import React from 'react';

import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonButton,
  IonMenuButton,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { mailOutline, notificationsOutline } from "ionicons/icons";
import { useParams} from "react-router";
import { useEffect, useRef, useState } from 'react';
import AddModal from '../components/AddModal';
import "./Home.css";

const Home: React.FC = () => {

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
            <IonIcon className="notification-icon" icon={notificationsOutline} ></IonIcon>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonFab slot="fixed" vertical="bottom" horizontal="end" >
        <IonFabButton onClick={openModal}>
          <IonIcon icon={mailOutline} className='mailstyle' ></IonIcon>
        </IonFabButton>
        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
            <AddModal />
        </IonModal>
      </IonFab>

      <IonContent fullscreen className="ion-content-home">
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="home-content">
        
          <div className="landingpageheaderbg"></div>
          
          <div className="landingpageheader">
            

            <div className="agricultureoffice">
              <div className="titlecontainer">
                <h1 className="title">City
                <br />
                Agriculture
                <br />
                Office
                </h1>
                <p className="home_subtitle">"Bringing Agriculture to Your Fingertips: Explore, Connect, and Grow with Agri Connect!"</p>
              </div>
              <div className="imgContainer">
                <img className="Image2" src="/agribg.png" />
              </div>
            </div>

            <div className="batangasseal">
              <div className="imgContainer">
                <img className="Image2" src="/agribg2.png" />
              </div>
              <IonImg
                className="batangassealimage"
                src="/btngsseal.png"
              ></IonImg>
            </div>
          </div>

          <div className="videoSection">
              <h2 className="vidtitle">Ano nga ba ang OCVAS?</h2>
              <p className="vidcon">
                Ibinihagi ni Cardelyn Hernandez ang pagbisita niya sa 
                Office of Veterinary and Agricutural Services o mas kilalang "OCVAS". 
                Matatagpuan ang OCVAS malapit sa Diversion Road ng Batangas City. 
                Halina't subaybayan natin ang kaniyang pagbisita.
              </p>
            <iframe
              className="featuredvideo"
              src="https://www.youtube.com/embed/o69XES2vqJM"
              title="Parine na Kayo!  OCVAS 2023 Episode 15"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="programSection">
            <h1 className="progtitle">MGA PROGRAMA NG AGRICULTURE OFFICE </h1>
            <p className="prog_description">
              Ang ilan sa mga litrato sa ibaba ay ang mga programang inilunsad ng 
              Agriculture Office sa ibat-ibang baragay ng Batangas nitong mga nakaraang buwan o taon.
            </p>
            <Carousel autoPlay={true}>
              <div>
                <img src="/programpics/1.jpg" />
                <p className="legend">Livelihood Seminars</p>
              </div>
              <div>
                <img src="/programpics/2.jpg" />
                <p className="legend">Kabalikat sa Kabuhayan on Sustainable Agriculture Program</p>
              </div>
              <div>
                <img src="/programpics/3.jpg" />
                <p className="legend">Andito Ka-ME Project Microenterprise Community Development: Promoting Inclusivity, Empowering the Community”</p>
              </div>
              <div>
                <img src="/programpics/4.jpg" />
                <p className="legend">Training on Integrated Pest Management of Sineguelas Leaf Beetle </p>
              </div>
              <div>
                <img src="/programpics/5.jpg" />
                <p className="legend">Perfume Making</p>
              </div>
            </Carousel>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
