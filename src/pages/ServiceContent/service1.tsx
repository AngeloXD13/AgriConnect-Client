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
    
    const Service1: React.FC = () => {
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
                <b>Availment of Farm Tractor Services for Land Preperation</b>
                </h1>
                {/* <div className="authorcontainer">
                <p className="dateposted">Date Posted: 05/07/2023</p>
                </div> */}
                <br />
                <IonImg className="featuredimage" src="/servicepics/srvc1.jpg"></IonImg>
    
                <p className="briefdescription">
                <br />
                The Agricultural Engineering Division of OCVAS provides assistance to the use of farm 
                tractors for land preparation. The services include plowing, harrowing, furrowing and 
                planting with the use of mechanized corn planter. Under the Yellow Corn Sufficiency 
                Program and Eggplant Production, availing of farm tractor services is free. 
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
                        <b>Maaaring mag-avail :</b> Kahit sino 
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
                        <h4 className="step_desc"><b>Magtungo sa Office ng Agriculture Engr. Division sa OCVAS.</b></h4>
                        <p className="step_details">
                            Hihingiin sa iyo ang mga detalye tulad ng pangalan, barangay, lawak ng farm o sakahan, at lokasyon ng farm. 
                            <br />
                            <br />
                            Maaaring abutin ng ilang araw ang pagprocess ng inyong request ngunit makakatanggap kayo ng tawag sa telepono patungkol sa final schedule ng iyong tractor service.
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 2 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Maghintay ng pagdating ng schedule ng service</b></h4>
                        <p className="step_details">Sa prosesong ito, ang farm tractor operator ay icucultivate ang iyong farm at irerecord ang duration o haba ng oras ng operation</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 3 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Magbayad ng Rental Fee.</b></h4>
                        <p className="step_details">
                            Ang pagbabayad ng rental fee ay para lamang sa mga <b>
                            Hindi natamnan ang sakahan matapos ang land preparation.</b>
                            <br /><br />
                            <b>Total ng Babayaran: P450.00/oras.</b> 
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
    
export default Service1;