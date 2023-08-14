import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTextarea,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";

import { useLocation, useParams } from "react-router";
import "./Staff_ManageNews.css";

import ReactDOM from "react-dom";
import {
  mailOutline,
  notificationsOffOutline,
  notificationsOutline,
  add,
  personCircle,
} from "ionicons/icons";
import { Route } from "react-router-dom";

// import News from "../../components/staff/News/News";
// import axios, { CancelTokenSource } from "axios";

import React, { Component, useRef, useState } from "react";

import "./Staff_ManageNews.css";

import Table from "react-bootstrap/Table";
import axios, { CancelTokenSource } from "axios";

import { serverAddress, serverPort } from "../../../server.config";

import Dropzone from "react-dropzone";
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

interface NewNews {
  title: string;
  dateposted?: string;
  tag?: string;
  division?: string;
  author?: string;
  content: string;
  images?: [string];
}

const defaultNews: News[] = [];

const Staff_ManageNews: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  const [newNews, setNewNews] = useState<NewNews>({
    title: "",
    dateposted: "",
    tag: "",
    division: "",
    author: "",
    content: "",
    images: [""],
  });

  // const location = useLocation();
  // console.log("locaion",location);
  // console.log("server address",serverAddress);

  const [news, setNews]: [News[], (news: News[]) => void] =
    React.useState(defaultNews);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("User cancelled operation");
    }
  };

  // function for deleting news
  // const deleteNews = async (id: string) => {
  //   try {
  //     const newsRemoved = await axios.delete("http://" + serverAddress + ":" + serverPort + "/api/news/deleteNews/" + id);
  //     refreshList();
  //     //add toast
  //   }
  //   catch (error) {
  //     console.log(error);
  //     return <h1>error</h1>
  //   }

  // }

  const deleteNews = async (id: string) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this news item?"
      );
      if (confirmed) {
        await axios.delete(
          "http://" +
            serverAddress +
            ":" +
            serverPort +
            "/api/news/deleteNews/" +
            id
        );
        refreshList();
        // add toast
      }
    } catch (error) {
      console.log(error);
      return <h1>error</h1>;
    }
  };

  //function for adding new news
  // const addNews = async () => {
  //   try {
  //     console.log("new news content", newNews);
  //     await axios.post("http://" + serverAddress + ":" + serverPort + "/api/news/addNews", newNews);
  //     // Clear the form fields after successful addition
  //     setNewNews({
  //       title: "",
  //       dateposted: "",
  //       tag: "",
  //       division: "",
  //       author: "",
  //       content: "",
  //     });
  //     // Refresh the list of news items
  //     refreshList();
  //     dismiss();
  //   }
  //   catch (error) {
  //     console.log(error);
  //     return <h1>error</h1>
  //   }
  // }

  const addNews = async () => {
    try {
      if (editMode) {
        // Handle edit mode
        await axios.put(
          "http://" +
            serverAddress +
            ":" +
            serverPort +
            "/api/news/updateNews/" +
            editedNews._id,
          editedNews
        );
        setEditedNews({
          title: "",
          dateposted: "",
          tag: "",
          division: "",
          author: "",
          content: "",
        });
        setEditMode(false);
      } else {
        // Handle add mode

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append("images", selectedFiles[i]);
        }

        const imageUploadResponse = await axios.post(
          "http://" + serverAddress + ":" + serverPort + "/api/images/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const imageUrls = imageUploadResponse.data.imageUrls;
        console.log(imageUrls);
        // Handle the image URLs as needed (e.g., store them in state)

        const updatedNews: NewNews = {
          ...newNews,
          images: imageUrls,
        };

        console.log(updatedNews);
        await axios.post(
          "http://" + serverAddress + ":" + serverPort + "/api/news/addNews",
          updatedNews,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        // clear values
        setNewNews({
          title: "",
          dateposted: "",
          tag: "",
          division: "",
          author: "",
          content: "",
          images: [""],
        });
      }
      // Refresh the list of news items
      refreshList();
      dismiss();
    } catch (error) {
      console.log(error);
      return <h1>error</h1>;
    }
  };

  //refresh the list of news items after changes
  const refreshList = async () => {
    try {
      const response = await axios.get<{ news: News[] }>(
        "http://" + serverAddress + ":" + serverPort + "/api/news"
      );
      setNews(response.data.news);
    } catch (error) {
      // Handle error
    }
  };

  // for fetching news list
  React.useEffect(() => {
    axios
      .get<{ news: News[] }>(
        "http://" + serverAddress + ":" + serverPort + "/api/news",
        {
          cancelToken: cancelTokenSource.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      )
      .then((response) => {
        setNews(response.data.news);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? "Request Cancelled"
          : ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
          ? "Resource Not Found"
          : "An unexpected error has occurred";

        setError(error);
        setLoading(false);
      });
  }, []);

  // let newsarray = Array.from(news);
  // console.log("news array", newsarray);
  // console.log("raw", news);
  // console.log("raw news",news[news.news]);

  // modal for add news
  const modal = useRef<HTMLIonModalElement>(null);
  function dismiss() {
    console.log("dismiss");
    modal.current?.dismiss();
  }

  const [editMode, setEditMode] = useState(false);
  const [editedNews, setEditedNews] = useState<
    Partial<NewNews> & { _id?: string }
  >({
    title: "",
    dateposted: "",
    tag: "",
    division: "",
    author: "",
    content: "",
  });
  const editNews = (newsItem: News) => {
    setEditedNews({
      _id: newsItem._id,
      title: newsItem.title,
      dateposted: newsItem.dateposted,
      tag: newsItem.tag,
      division: newsItem.division,
      author: newsItem.author,
      content: newsItem.content,
    });
    setEditMode(true);
    modal.current?.present();
  };

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
  };

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
  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append('images', selectedFiles[i]);
  //   }

  //   try {
  //     const response = await axios.post("http://" + serverAddress + ":" + serverPort + "/api/images/upload", formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     console.log(response.data);
  //     // Handle the response as needed
  //   } catch (error) {
  //     console.error(error);
  //     // Handle any errors
  //   }
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <button id="open-custom-dialog" slot="end" className="newsadd-icon">
            <IonIcon className="add-icon" icon={add} slot="end"></IonIcon>
          </button>

          <IonTitle>Manage News</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="managehomebody">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Refresher */}
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {/* Modal */}
        <IonModal id="newsadd-modal" ref={modal} trigger="open-custom-dialog">
          <div className="modal_addnews">
            <h1>{editMode ? "Edit News" : "Create News"}</h1>

            <div>
              <IonTextarea
                className="modal_titletextbox"
                label="Title"
                fill="outline"
                labelPlacement="floating"
                placeholder="Create title for your news"
                value={editMode ? editedNews.title : newNews.title}
                onIonChange={(e) =>
                  editMode
                    ? setEditedNews((prevState) => ({
                        ...prevState,
                        title: e.detail.value ?? "",
                      }))
                    : setNewNews((prevState) => ({
                        ...prevState,
                        title: e.detail.value ?? "",
                      }))
                }
              />
            </div>
            <div>
              <IonTextarea
                className="modal_contenttextbox"
                fill="outline"
                label="Content"
                labelPlacement="floating"
                placeholder="Write your content here"
                value={editMode ? editedNews.content : newNews.content}
                onIonChange={(e) =>
                  editMode
                    ? setEditedNews((prevState) => ({
                        ...prevState,
                        content: e.detail.value ?? "",
                      }))
                    : setNewNews((prevState) => ({
                        ...prevState,
                        content: e.detail.value ?? "",
                      }))
                }
              />
            </div>
            {editMode ? (
              // Dropzone is disabled when editMode is true
              <div className="modaldrop_pic">
                <p>Dropzone is disabled in edit mode.</p>
              </div>
            ) : (
              <div className="modaldrop_pic">
                <Dropzone onDrop={handleFileSelect} multiple>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                      <input
                        {...getInputProps({ accept: "image/*" })}
                        placeholder="Drag and drop some files here, or click to select files"
                      />
                      <p>
                        Drag and drop some files here, or click to select files
                        {selectedFiles.length > 0 && (
                          <div className="preview-container">
                            <p>Selected Files:</p>
                            {selectedFiles.map((file) => (
                              <img
                                key={file.name}
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="preview-image"
                              />
                            ))}
                          </div>
                        )}
                      </p>
                    </div>
                  )}
                </Dropzone>
              </div>
            )}
            <div className="modal_addnewsbtn">
              <IonButtons className="modaldis_btn" onClick={dismiss}>
                Cancel
              </IonButtons>
              <IonButtons className="modaladd_btn" onClick={addNews}>
                Add
              </IonButtons>
            </div>
          </div>
        </IonModal>
        {/* End of Modal */}

        <div className="App">
          {loading && <button onClick={handleCancelClick}>Cancel</button>}

          <div className="body">
            {/* <div className="manage_title">
              <h1>Manage News</h1>
            </div> */}
            {/* <IonSearchbar showClearButton="focus"></IonSearchbar> */}
            <div id="news-list">
              {news.map((news) => {
                return (
                  <IonCard
                    className="managenews_card"
                    key={news._id} // Add a unique key prop for each item
                    // routerLink={`/page/NewsContent/${news._id}`} // Use backticks for dynamic routing
                    // routerDirection="forward"
                  >
                    <div className="imgContainer">
                      <img
                        crossOrigin="anonymous"
                        alt="picture of the event or the activity"
                        className="news1_img"
                        src={handlelinks(news)}
                      />
                    </div>

                    <IonCardHeader>
                      <IonCardTitle className="newstitles">
                        {news.title}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p className="newscard_content">{news.content}</p>
                    </IonCardContent>
                    <div className="card_btns">
                      <button
                        className="edit_btn"
                        onClick={() => editNews(news)}
                      >
                        Edit
                      </button>
                      <button
                        className="del_btn"
                        onClick={() => deleteNews(news._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </IonCard>
                );
              })}
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Staff_ManageNews;
