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
import './Menu.css';

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
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'News',
    url: '/page/News',
    iosIcon: newspaperOutline,
    mdIcon: newspaperOutline
  },
  {
    title: 'Services',
    url: '/page/Services',
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircleSharp
  },
  // {
  //   title: 'Programs',
  //   url: '/page/Program',
  //   iosIcon: accessibilityOutline,
  //   mdIcon: accessibilitySharp
  // },
  // {
  //   title: 'About Us',
  //   url: '/components/Notice',
  //   iosIcon: informationCircleOutline,
  //   mdIcon: informationCircleSharp
  // },
  {
    title: 'Message Us',
    url: '/page/message',
    iosIcon: mailOutline,
    mdIcon: mailOutline
  }
];

// const accountPages: AccountPage[] = [
//   {
//     title: 'Account',
//     url: '/components/Notice',
//     iosIcon: personCircleOutline,
//     mdIcon: personCircleSharp
//   },
//   {
//     title: 'Settings',
//     url: '/components/Notice',
//     iosIcon: settingsOutline,
//     mdIcon: settingsSharp
//   }
// ];


//---------------------------------------------------------------
//TEMPORARY MENU FOR STAFF
//May problem pa sa multi menu

interface StaffPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface MenuProps {
  onLogout: () => void;
}

const staffPages: StaffPage[] = [
  // {
  //   title: 'Dashboard',
  //   url: '/components/Notice',
  //   iosIcon: homeOutline,
  //   mdIcon: homeSharp
  // },
  {
    title: 'Manage News',
    url: '/staff/ManageNews',
    iosIcon: newspaperOutline,
    mdIcon: newspaperOutline
  }

];

//---------------------------------------------------------------
//---------------------------------------------------------------

const Menu: React.FC<MenuProps> = ({ onLogout }) => {
  const location = useLocation();

  return (
    <IonMenu menuId='main_menu' contentId="main" type="overlay">
      <IonContent>
        <div className="appheader">
          <h1>Agri Connect</h1>
          <IonImg id='headerLogo' src='/applogo.png' ></IonImg>
          <IonImg id='btngsealLogo' src='/btngsseal.png' ></IonImg>

        </div>
        <IonList id="homepage-list">

          <IonListHeader>User 1</IonListHeader>
          <IonNote>user1@gmail.com</IonNote>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} menu='main_menu'>
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
          {/* {accountPages.map((accountPages, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === accountPages.url ? 'selected' : ''} routerLink={accountPages.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={accountPages.iosIcon} md={accountPages.mdIcon} />
                  <IonLabel>{accountPages.title}</IonLabel>
                </IonItem>

              </IonMenuToggle>
            );
          })} */}

          <IonItem onClick={onLogout}>
            <IonIcon icon={logOutSharp} slot="start" />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>


        {/* -----------------------TEMPORARY MENU FOR ADMINNN--------------------------------- */}

        <IonList id="labels-list">
          <IonListHeader>Staff Panel (TEMPORARY)</IonListHeader>
          {staffPages.map((staffPages, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === staffPages.url ? 'selected' : ''} routerLink={staffPages.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={staffPages.iosIcon} md={staffPages.mdIcon} />
                  <IonLabel>{staffPages.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* ------------------------------------------------------------------------------------ */}

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
