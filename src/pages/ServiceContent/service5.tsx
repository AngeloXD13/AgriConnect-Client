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
    
    const Service5: React.FC = () => {
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
                <b>Availment of Tilapia Fingerlings</b>
                </h1>
                <br />
                <IonImg className="featuredimage" src="/servicepics/srvc5.jpg"></IonImg>
    
                <p className="briefdescription">
                <br />
                The Fishery Division distributes quality tilapia fingerlings to be able to cater the needs of fish
                farmer’s along Calumpang River in Batangas City.
                </p>
                <div>
                <IonItem lines="full">
                    <IonLabel>
                        <h2 className="steps_title">
                            <b>Step-by-step procedure sa physical na pag a-avail ng service.</b> 
                        </h2>
                    </IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonLabel>
                        <p className="whoavail">
                        <b>Maaaring mag-avail :</b> Kahit sino /General Public
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel>
                        <p className="req_need">
                        <b>Mga requirements na kailangan:</b> Wala
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 1 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Mag log sa visitor's Logbook</b></h4>
                        <p className="step_details">
                            Iveverify ang iyong address at contact number. 
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 2 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>I-approach ang Aquaculturist</b></h4>
                        <p className="step_details">
                            Iinterviewhin ka at i-oorient patungkol sa serbisyo na iyong nirerequest. <br />
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 3 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Mag-obtain ng schedule ng assessment</b></h4>
                        <p className="step_details">
                            I-aapproves ang schedule na iyong napili ng supervisor agriculturist.
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 4 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Schedule pick-up of Fingerlings</b></h4>
                        <p className="step_details">
                            I-oorient ka about sa mga characteristics ng tilapia, at iba pang mga detalye.
                        </p>
                    </IonLabel>
                </IonItem>
                </div>
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
    
export default Service5;