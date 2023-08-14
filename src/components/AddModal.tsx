import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonModal, IonPopover } from "@ionic/react";
import { send } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import "./AddModal.css";

import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import axios from "axios";

const AddModal: React.FC = () => {

    const modal = useRef<HTMLIonModalElement>(null);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [showModal, setShowModal] = useState(true); // State to control modal visibility

    useEffect(() => {
        // Fetch news data from the backend
        const fetchtoken = async () => {
            try {
                const response = await axios.post(
                    "https://directline.botframework.com/v3/directline/tokens/generate", {},
                    {
                        headers: {
                            "Authorization": "Bearer ZrAdxXVwr4I.dNsZPdQzIx_NBh6jvGvgzpq4ds2ZStmhPu6KumDntd8"
                        }
                    }
                );
                // console.log("res" + response);
                // console.log("token" + response.data.token);
                setToken(response.data.token);
            } catch (error) {
                console.error(error);
            }

        };

        fetchtoken();
    }, []);

    const directLine = useMemo(() => createDirectLine({ token }), [token]);

    // Function to handle the modal close
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Function to handle the modal open
    const handleModalOpen = () => {
        setShowModal(true);
    };

    // WebChat options to prevent unmounting on modal close
    const webChatOptions = useMemo(() => ({
        directLine: directLine,
        userID: "testing",
        preventUnload: true,
        unpreventUnload: false,
    }), [directLine]);


    return (

        <IonModal ref={modal} isOpen={true} initialBreakpoint={1} breakpoints={[0, 1]}>

            {/* For designing webchat please refer hear https://github.com/microsoft/BotFramework-WebChat */}

            <div className='profilesection'>
                <img alt="picture of the event or the activity" className="mess_headprofile" src="avatar.png" />
                <p className='mess_title'><b>Agri Connect Chatbot</b></p>
                <p className='mess_note'>
                    You're chatting with a chatbot.
                </p>
            </div>

            <ReactWebChat directLine={directLine} userID="testing" />



            {/* Message Conversation */}
            {/* <div className="conversation">
                <div className='mess_reciever'>
                    <img className="mess_avatar" src="avatar.png"/>
                    <div className="mess_textr">Hello! How can I help you?</div>
                </div>
                <div className='mess_sender'>
                    <div className="mess_texts">I have a question about the services.</div>
                    <img className="mess_avatar" src="avatar.png"/>
                </div>
                <div className='mess_reciever'>
                    <img className="mess_avatar" src="avatar.png"/>
                    <div className="mess_textr">Sure, go ahead and ask.</div>
                </div>
        </div> */}

            {/* <div className="textbox_mess">
            <IonInput
                className="textmess"
                label="Send Message"
                type="text"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter your Message"
            ></IonInput>
            <div className="sendmess_btn">
                <button id="popcenter"className="sendicon" ><IonIcon icon={send}/></button>
                <IonPopover trigger="popcenter" side="top" alignment="center" >
                    <IonContent class="ion-padding">Can't send for now. Sorry.</IonContent>
                </IonPopover>
            </div>
        </div> */}

            {/* Disregard the errors! It's working! */}
            {/* <div className="block">
            <IonButton disabled="true" shape="round" id="inquire_button" fill="solid">
                <p>Inquire Services</p>
            </IonButton>

            <IonButton disabled="true" shape="round" className="contactus_button" fill="solid">
                <p>Contact Us</p>
            </IonButton>

            <IonButton disabled="true" shape="round" className="faqs_button" fill="solid">
                <p>FAQs </p>
            </IonButton>
        </div> */}
        </IonModal>
    );
}
export default AddModal;