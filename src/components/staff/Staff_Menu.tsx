import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { accessibilityOutline, accessibilitySharp, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, informationCircleOutline, informationCircleSharp, logInOutline, logOutSharp, logoTumblr, mailOutline, mailSharp, newspaperOutline, paperPlaneOutline, paperPlaneSharp, peopleCircleOutline, peopleCircleSharp, personCircleOutline, personCircleSharp, settingsOutline, settingsSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './staff_Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface AccountPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/staff/Dashboard',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Manage News',
    url: '/staff/News',
    iosIcon: newspaperOutline,
    mdIcon: newspaperOutline
  }
  // {
  //   title: 'Services',
  //   url: '/page/Services',
  //   iosIcon: peopleCircleOutline,
  //   mdIcon: peopleCircleSharp
  // },
  // {
  //   title: 'Programs',
  //   url: '/page/Login',
  //   iosIcon: accessibilityOutline,
  //   mdIcon: accessibilitySharp
  // },
  // {
  //   title: 'About Us',
  //   url: '/components/Notice',
  //   iosIcon: informationCircleOutline,
  //   mdIcon: informationCircleSharp
  // },
  // {
  //   title: 'Message Us',
  //   url: '/page/message',
  //   iosIcon: mailOutline,
  //   mdIcon: mailOutline
  // }
];

const accountPages: AccountPage[] = [
  {
    title: 'Account',
    url: '/components/Notice',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'Settings',
    url: '/components/Notice',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
  {
    title: 'Logout',
    url: '/components/Notice',
    iosIcon: logInOutline,
    mdIcon: logOutSharp
  }

];


const Staff_Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu menuId="staff_menu" contentId="staff" type="overlay">
      <IonContent>
        <div className="appheader">
            <h1>Agri Connect</h1>
            <IonImg id='headerLogo' src='/applogo.png' ></IonImg>
            <IonImg id='btngsealLogo' src='/btngsseal.png' ></IonImg>

          </div>
        <IonList id="homepage-list">
          
          <IonListHeader>Juan Dela Cruz</IonListHeader>
          <IonNote>Staff</IonNote>
          <IonNote>hi@ionicframework.com</IonNote>
          
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} menu='staff_menu'>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Account</IonListHeader>
          {accountPages.map((accountPages, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === accountPages.url ? 'selected' : ''} routerLink={accountPages.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={accountPages.iosIcon} md={accountPages.mdIcon} />
                  <IonLabel>{accountPages.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Staff_Menu;
