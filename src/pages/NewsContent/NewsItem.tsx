import { serverAddress, serverPort } from "../../../server.config";

import {
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
} from "@ionic/react";

import { useParams } from "react-router";
import React, { useEffect, useState } from "react";

import "./NewsItem.css";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

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

const NewsItem: React.FC = () => {

    // Disregard the error
    const { id }: { id: string } = useParams();
    const [news, setNews] = useState<News>();

    const [loading, setLoading]: [boolean, (loading: boolean) => void] =
        React.useState<boolean>(true);


    React.useEffect(() => {
        // Fetch news data from the backend
        const fetchNews = async () => {
            try {
                const response = await axios.get<{ news: News }>(
                    "http://" + serverAddress + ":" + serverPort + "/api/news/" + id
                );
                setNews(response.data.news); // Access the nested 'news' object
                setLoading(false);
                console.log("response", response.data);
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

    console.log("news", news)
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
                        {/* <IonTitle size="large">{name}</IonTitle> */}
                    </IonToolbar>
                </IonHeader>

                {loading && <button >Cancel</button>}
                {news && (
                    <div className="nnewscontent">

                        <h1 className="ntitle">
                            <b>{news.title}</b>
                        </h1>

                        <h5 className="ndate">
                            <b>{news.dateposted}</b>
                        </h5>
                        
                        {/* <img crossOrigin="anonymous" className="featuredimage" src={handlelinks(news)}></img> */}
                        <div className="nnewspics">
                        <Carousel autoPlay={true}>
                            {news.images.map((link) => (
                                <div>
                                    <img crossOrigin="anonymous" src={`http://${serverAddress}:${serverPort}/api/images/${link}`} />
                                    {/* <p className="legend">{newsItem.title}</p> */}
                                </div>
                            ))}
                        </Carousel>
                        </div>

                        <p className="nbriefdescription">
                            {news.content}
                        </p>

                        
                        <p className="ndivision">Posted by: Admininstator Division</p>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default NewsItem;
