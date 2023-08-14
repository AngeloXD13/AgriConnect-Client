import {
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonItem,
    IonLabel,
    IonButton,
    IonPopover,
    } from "@ionic/react";

    import { useParams } from "react-router";
    import React from "react";
    
    import "./mainservice.css";
    
    const Service2: React.FC = () => {
        const { name } = useParams<{ name: string }>();
    
        return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                <IonTitle></IonTitle>
            </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                <IonTitle size="large">{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
    
            <div className="newscontent">
                <h1 className="title">
                <b>Availment of Post Harvest Facility</b>
                </h1>
                <br />
                <IonImg className="featuredimage" src="/servicepics/srvc2.jpg"></IonImg>
    
                <p className="briefdescription">
                <br />
                Another assistance of the Yellow Corn Sufficiency Program is the provision of post-harvest
                facilities and equipment like automatic corn driers and moisture meters. The barangays covered
                by the YCSP are divided into clusters and each cluster appoints a cluster leader.
                </p>
                
                <div className="clickapp">
                    <button id="top-center" className="clicktoapply">Mag-apply Online</button>
                    <IonPopover trigger="top-center" side="top" alignment="center" >
                        <IonContent class="ion-padding">Disabled</IonContent>
                    </IonPopover>
                </div>

                <p className="division">Posted by: Admininstator Division</p>
            </div>
            </IonContent>
        </IonPage>
        );
    };
    
export default Service2;