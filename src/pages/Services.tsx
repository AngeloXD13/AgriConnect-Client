import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonIcon,
  IonCardContent,
  IonCardSubtitle,
  IonSearchbar,
} from "@ionic/react";
import {notificationsOutline } from 'ionicons/icons';
import { useLocation } from "react-router";
import React from "react";

import "./Services.css";

interface ser_lists {
  title: string;
  img: string;
  url: string;
  division:string;
  desc: string;

}

const cards: ser_lists[] = [
  {
    title: "Availment of Farm Tractor Services for Land Preperation",
    img: "/servicepics/srvc1.jpg",
    url: "/page/ServiceContent/service1",
    division:"AGRICULTURAL ENGINEERING DIVISION",
    desc:"Pag-aavail ng tractor services"
  },
  {
    title: "Availment of Post Harvest Facility",
    img: "/servicepics/srvc2.jpg",
    url: "/page/ServiceContent/service2",
    division:"AGRICULTURAL ENGINEERING DIVISION",
    desc: "Yellow Corn Sufficiency Program "
  },
  {
    title: "Availment of Financial Assistance",
    img: "/servicepics/srvc3.jpg",
    url: "/page/ServiceContent/service3",
    division:"COOPERATIVE DIVISION",
    desc: "Financial Assistance for Farmers",
  },
  {
    title: "Availment of Fruit Bearing Tree Seedlings",
    img: "/servicepics/srvc4.jpg",
    url: "/page/ServiceContent/service4",
    division:"CROP PRODUCTION DIVISION",
    desc: "Pagbibigay ng seeds sa lahat ng Batangas City residents.",
  },
  {
    title: "Availment of Tilapia Fingerlings",
    img: "/servicepics/srvc5.jpg",
    url: "/page/ServiceContent/service5",
    division:"AGRICULTURAL ENGINEERING DIVISION",
    desc: "Pagbibigay ng quality tilapia fingerlings",
  },

  
];

const Services: React.FC = () => {
  const location = useLocation();

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
          <IonTitle>Mga Serbisyo</IonTitle>
          
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {cards.map((ser_lists, index) => {
            return (
              <div className="stylebody">
                <IonCard
                routerLink={ser_lists.url}
                routerDirection='forward'
                >

                  <div className="scardsize">
                    <IonGrid>

                      <IonRow>
                        <IonCol className="scard_img" size="6">
                          <img
                            alt="picture of the event or the activity"
                            className="s_images"
                            src={ser_lists.img}
                          />
                        </IonCol>

                        <IonCol className="sdetails" size="6">
                          <IonCardHeader>
                            <IonCardTitle className="scard_title">
                              {ser_lists.title}
                            </IonCardTitle>
                            <IonCardSubtitle>
                              {ser_lists.division}
                            </IonCardSubtitle>
                            
                          </IonCardHeader>
                          <IonCardContent>
                            <p className="service_content">{ser_lists.desc}</p>
                            <div className="sclick">
                                <button className="viewmore_text">View Details</button>
                            </div>
                          </IonCardContent>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </div>
                </IonCard>
                </div>
            );
          })}
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Services;
