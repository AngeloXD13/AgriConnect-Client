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
    
    const Service3: React.FC = () => {
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
                <b>Availment of Financial Assistance</b>
                </h1>
                <br />
                <IonImg className="featuredimage" src="/servicepics/srvc3.jpg"></IonImg>
    
                <p className="briefdescription">
                <br />
                Financial Assistance is being provided by the government to cooperatives for them to be able to
                sustain their business operation and to finance their other livelihood projects.
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
                        <b>Maaaring mag-avail :</b> Registered Cooperative / Registered Farmer Association 
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel>
                        <p className="req_need">
                        <b>Mga requirements na kailangan:</b> <br /> 
                        BOD Resolution, <br />
                        Project Proposal, <br />
                        Form Plan and Budget, <br />
                        Audited Financial Statements for two years,<br />
                        Certificate of Compliance
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 1 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Mag sign and submit ng MOA or Memorandom of Agreement</b></h4>
                        <p className="step_details">
                            Ichecheck ng office kung tama at kompleto ang mga signatures, at pagsasasign ng iba pang mga dokumento.
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 2 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Gets sign the MOA with the concerned official</b></h4>
                        <p className="step_details">
                            Makakarecieve ka ng notification patungkol sa iyong approval. <br />
                            Pagsusubmit at pagpoprocess ng mga dokumento. 
                            Inonotify ka thru telephone o text message.
                        </p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <h5 className="steps_no"> 3 </h5>
                    <IonLabel>
                        <h4 className="step_desc"><b>Iclaim ang check sa City Treasurer's Office.</b></h4>
                        <p className="step_details">
                            Iissue ang check at loan amortization or schedule ng payment.
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
    
export default Service3;