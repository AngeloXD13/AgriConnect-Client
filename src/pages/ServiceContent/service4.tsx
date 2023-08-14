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
    
    const Service4: React.FC = () => {
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
                <b>Availment of Fruit Bearing Tree Seedlings</b>
                </h1>
                <br />
                <IonImg className="featuredimage" src="/servicepics/srvc4.jpg"></IonImg>
    
                <p className="briefdescription">
                <br />
                The Crop Production Division provides the fruit bearing tree seedlings to all residents of Batangas
                City. It aims to promote creation of mini forest and to provide another source of income to the
                residents.
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
                        <b>Maaaring mag-avail :</b> Batangas City Residents
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
                        <h4 className="step_desc"><b>Magtungo sa Office ng Crop Production Division sa OCVAS.</b></h4>
                        <p className="step_details">
                            Itatanong sa iyo ang patungkol sa iyong request
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 2 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Magregister sa Logbook at distribution form</b></h4>
                        <p className="step_details">
                            Iiinform sa iyo ang mga available sa seedlings at iisuehan ka ng gate pass para sa release ng seedlings. <br /> <br />
                            Pagkatapos matanggap ang gate pass, magtungo sa Plant Nursery at ipresent ang gate pass para makuha ang seedlings. <br />
                            I-submit ang gate pass sa guard na nakaduty para sa inspection.
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
    
export default Service4;