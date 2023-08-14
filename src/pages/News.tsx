import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, SearchbarChangeEventDetail } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonSearchbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import React, { useEffect, useState } from 'react';



import axios from "axios";
import { serverAddress, serverPort } from "../../server.config";

import './News.css';

import { notificationsOutline, searchCircleOutline, searchOutline } from 'ionicons/icons';


interface News {
  _id: string;
  title: string;
  dateposted: string;
  tag: string;
  division: string;
  author: string;
  content: string;
  images: [string];
}

const News: React.FC = () => {
  const location = useLocation();
  const { name } = useParams<{ name: string; }>();

  


  const defaultNews: News[] = [];

  const [news, setNews]: [News[], (news: News[]) => void] =
    React.useState(defaultNews);


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState<News[]>(defaultNews);

  const handleSearch = (event: CustomEvent<SearchbarChangeEventDetail>) => {
    const query = event.detail.value || '';
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);

    console.log(filtered);
  };

  // const handleSearch = (event: CustomEvent<SearchbarChangeEventDetail>) => {

  //   const query = event.detail.value || '';
  //   console.log("handleSearch",query)
  //   setSearchQuery(query);
  //   const filteredResults = news.filter((news) =>
  //     news.title.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredNews(filteredResults);
  // };
  // for fetching news list
  // React.useEffect(() => {
  //   axios
  //     .get<{ news: News[] }>("http://" + serverAddress + ":" + serverPort + "/api/news", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       timeout: 10000,
  //     })
  //     .then((response) => {
  //       setNews(response.data.news);
  //     })
  // }, []);
  useEffect(() => {
    // Fetch news data from the backend
    const fetchNews = async () => {
      try {
        const response = await axios.get<{ news: News[] }>(
          "http://" + serverAddress + ":" + serverPort + "/api/news",
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
          }
        );
        setNews(response.data.news);
        setFilteredNews(response.data.news); // Set filtered news initially
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const handlelinks = (news: News) => {
    // console.log("handlelinks", news);
    if (news && news.images && news.images.length > 0) {
      const firstlink = news.images[0];
      const thumbnail = `http://${serverAddress}:${serverPort}/api/images/${firstlink}`;
      // console.log(thumbnail);
      return thumbnail;

    }
    return ""; // Return an empty string if there are no images
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonButtons slot="end">
            <IonIcon className="search-icon" icon={searchOutline} ></IonIcon>
          </IonButtons> */}
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="body" >
          <IonSearchbar
            className="newssearchbar"
            debounce={500}
            showClearButton="focus"
            onIonInput={(e: CustomEvent<SearchbarChangeEventDetail>) => handleSearch(e)}
          ></IonSearchbar>
          
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => {
                return (
                  <IonCard
                    key={item._id}
                    routerLink={`/page/NewsContent/${item._id}`}
                    routerDirection='forward'
                  >
                    <div className='imgContainer'>
                      <img
                        crossOrigin="anonymous"
                        alt="picture of the event or the activity"
                        className="news1_img"
                        src={handlelinks(item)}
                      />
                    </div>

                    <IonCardHeader>
                      <IonCardTitle className="newstitles">{item.title}</IonCardTitle>
                      <IonCardSubtitle>{item.dateposted}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                      <p className="newsitemcontent">{item.content}</p>
                      <div className="click">
                        <button className="clickformore">Click for more Info</button>
                      </div>
                    </IonCardContent>
                  </IonCard>
                );
              })
            ) : (
              <div className="no-results">No results found.</div>
            )}
          
         
        </div>

      </IonContent>
    </IonPage>
  );
}

export default News;