import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from '@ionic/react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { Helmet } from "react-helmet";

import React, { useEffect, useRef } from 'react';

import { WebAdapter } from 'botbuilder-adapter-web';
import Handlebars from 'handlebars';
import showdown from 'showdown';
// import './client.js';

import './css/styles.css'

import { add, notificationsOutline, searchCircleOutline, searchOutline } from 'ionicons/icons';

interface Message {
  type: string;
  isTyping?: boolean;
  text?: string;
  html?: string;
  open_link?: string;
  link_title?: string;
  quick_replies?: QuickReply[];
  disable_input?: boolean;
  files?: File[];
}

interface QuickReply {
  title: string;
  payload: string;
}

interface File {
  image?: boolean;
  url: string;
}

const Message: React.FC = () => {

  const location = useLocation();
  const { name } = useParams<{ name: string; }>();

  // const messageWindowRef = useRef<HTMLDivElement>(null);
  // const messageListRef = useRef<HTMLDivElement>(null);
  // const repliesRef = useRef<HTMLDivElement>(null);
  // const inputRef = useRef<HTMLInputElement>(null);
  // const converterRef = useRef<showdown.Converter>(null);

  // useEffect(() => {
  //   converterRef.current = new showdown.Converter();
  //   converterRef.current.setOption('openLinksInNewWindow', true);

  //   const botkit = {
  //     config: {
  //       ws_url: (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host,
  //       reconnect_timeout: 3000,
  //       max_reconnect: 5,
  //       enable_history: false,
  //     },
  //     options: {
  //       use_sockets: true,
  //     },
  //     reconnect_count: 0,
  //     guid: null,
  //     current_user: null,
  //     on: function (event: string, handler: (detail: any) => void) {
  //       this.message_window.addEventListener(event, function (evt: any) {
  //         handler(evt.detail);
  //       });
  //     },
  //     trigger: function (event: string, details: any) {
  //       const eventObj = new CustomEvent(event, {
  //         detail: details,
  //       });
  //       this.message_window.dispatchEvent(eventObj);
  //     },
  //     request: function (url: string, body: any) {
  //       return new Promise<any>((resolve, reject) => {
  //         const xmlhttp = new XMLHttpRequest();

  //         xmlhttp.onreadystatechange = function () {
  //           if (xmlhttp.readyState === XMLHttpRequest.DONE) {
  //             if (xmlhttp.status === 200) {
  //               const response = xmlhttp.responseText;
  //               if (response !== '') {
  //                 let message = null;
  //                 try {
  //                   message = JSON.parse(response);
  //                 } catch (err) {
  //                   reject(err);
  //                   return;
  //                 }
  //                 resolve(message);
  //               } else {
  //                 resolve([]);
  //               }
  //             } else {
  //               reject(new Error('status_' + xmlhttp.status));
  //             }
  //           }
  //         };

  //         xmlhttp.open('POST', url, true);
  //         xmlhttp.setRequestHeader('Content-Type', 'application/json');
  //         xmlhttp.send(JSON.stringify(body));
  //       });
  //     },
  //     send: function (text: string, e?: React.FormEvent<HTMLFormElement>) {
  //       if (e) e.preventDefault();
  //       if (!text) {
  //         return;
  //       }
  //       const message: Message = {
  //         type: 'outgoing',
  //         text: text,
  //       };

  //       clearReplies();
  //       renderMessage(message);

  //       deliverMessage({
  //         type: 'message',
  //         text: text,
  //         user: this.guid,
  //         channel: this.options.use_sockets ? 'websocket' : 'webhook',
  //       });

  //       if (inputRef.current) {
  //         inputRef.current.value = '';
  //         inputRef.current.focus();
  //       }

  //       trigger('sent', message);
  //     },
  //     deliverMessage: function (message: Message) {
  //       if (this.options.use_sockets) {
  //         this.socket.send(JSON.stringify(message));
  //       } else {
  //         this.webhook(message);
  //       }
  //     },
  //     webhook: function (message: Message) {
  //       this.request('/api/messages', message)
  //         .then((messages) => {
  //           messages.forEach((message) => {
  //             this.trigger(message.type, message);
  //           });
  //         })
  //         .catch((err) => {
  //           this.trigger('webhook_error', err);
  //         });
  //     },
  //     connect: function (user: any) {
  //       if (user && user.id) {
  //         this.setCookie('botkit_guid', user.id, 1);
  //         user.timezone_offset = new Date().getTimezoneOffset();
  //         this.current_user = user;
  //       }

  //       if (this.options.use_sockets) {
  //         this.connectWebsocket(this.config.ws_url);
  //       } else {
  //         this.connectWebhook();
  //       }
  //     },
  //     connectWebhook: function () {
  //       if (this.getCookie('botkit_guid')) {
  //         this.guid = this.getCookie('botkit_guid');
  //       } else {
  //         this.guid = this.generate_guid();
  //         this.setCookie('botkit_guid', this.guid, 1);
  //       }

  //       if (this.options.enable_history) {
  //         this.getHistory();
  //       }

  //       this.trigger('connected', {});
  //       this.webhook({
  //         type: 'welcome_back',
  //         user: this.guid,
  //         channel: 'webhook',
  //       });
  //     },
  //     connectWebsocket: function (ws_url: string) {
  //       this.socket = new WebSocket(ws_url);

  //       let connectEvent = 'hello';
  //       if (this.getCookie('botkit_guid')) {
  //         this.guid = this.getCookie('botkit_guid');
  //         connectEvent = 'welcome_back';
  //       } else {
  //         this.guid = this.generate_guid();
  //         this.setCookie('botkit_guid', this.guid, 1);
  //       }

  //       if (this.options.enable_history) {
  //         this.getHistory();
  //       }

  //       this.socket.addEventListener('open', () => {
  //         this.reconnect_count = 0;
  //         this.trigger('connected', {});
  //         this.deliverMessage({
  //           type: connectEvent,
  //           user: this.guid,
  //           channel: 'socket',
  //           user_profile: this.current_user ? this.current_user : null,
  //         });
  //       });

  //       this.socket.addEventListener('error', (event) => {
  //         console.error('ERROR', event);
  //       });

  //       this.socket.addEventListener('close', (event) => {
  //         this.trigger('disconnected', event);
  //         if (this.reconnect_count < this.config.max_reconnect) {
  //           setTimeout(() => {
  //             this.reconnect_count++;
  //             this.connectWebsocket(this.config.ws_url);
  //           }, this.config.reconnect_timeout);
  //         } else {
  //           this.message_window.className = 'offline';
  //         }
  //       });

  //       this.socket.addEventListener('message', (event) => {
  //         let message = null;
  //         try {
  //           message = JSON.parse(event.data);
  //         } catch (err) {
  //           this.trigger('socket_error', err);
  //           return;
  //         }
  //         this.trigger(message.type, message);
  //       });
  //     },
  //     clearReplies: function () {
  //       if (repliesRef.current) {
  //         repliesRef.current.innerHTML = '';
  //       }
  //     },
  //     quickReply: function (payload: string) {
  //       this.send(payload);
  //     },
  //     focus: function () {
  //       if (inputRef.current) {
  //         inputRef.current.focus();
  //       }
  //     },
  //     renderMessage: function (message: Message) {
  //       if (messageListRef.current) {
  //         const messageItem = document.createElement('div');
  //         if (message.text) {
  //           message.html = converterRef.current.makeHtml(message.text);
  //         }
  //         messageItem.innerHTML = messageTemplate({ message });
  //         messageListRef.current.appendChild(messageItem);
  //         if (!message.isTyping) {
  //           messageListRef.current.removeChild(messageItem);
  //         }
  //       }
  //     },
  //     triggerScript: function (script: string, thread: string) {
  //       this.deliverMessage({
  //         type: 'trigger',
  //         user: this.guid,
  //         channel: 'socket',
  //         script: script,
  //         thread: thread,
  //       });
  //     },
  //     identifyUser: function (user: any) {
  //       user.timezone_offset = new Date().getTimezoneOffset();
  //       this.guid = user.id;
  //       this.setCookie('botkit_guid', user.id, 1);
  //       this.current_user = user;
  //       this.deliverMessage({
  //         type: 'identify',
  //         user: this.guid,
  //         channel: 'socket',
  //         user_profile: user,
  //       });
  //     },
  //     receiveCommand: function (event: MessageEvent) {
  //       switch (event.data.name) {
  //         case 'trigger':
  //           this.triggerScript(event.data.script, event.data.thread);
  //           break;
  //         case 'identify':
  //           this.identifyUser(event.data.user);
  //           break;
  //         case 'connect':
  //           this.connect(event.data.user);
  //           break;
  //         default:
  //           console.log('UNKNOWN COMMAND', event.data);
  //       }
  //     },
  //     sendEvent: function (event: any) {
  //       if (window.self !== window.top) {
  //         window.parent.postMessage(event, '*');
  //       }
  //     },
  //     setCookie: function (cname: string, cvalue: string, exdays: number) {
  //       const d = new Date();
  //       d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  //       const expires = 'expires=' + d.toUTCString();
  //       document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  //     },
  //     getCookie: function (cname: string) {
  //       const name = cname + '=';
  //       const decodedCookie = decodeURIComponent(document.cookie);
  //       const ca = decodedCookie.split(';');
  //       for (let i = 0; i < ca.length; i++) {
  //         let c = ca[i];
  //         while (c.charAt(0) === ' ') {
  //           c = c.substring(1);
  //         }
  //         if (c.indexOf(name) === 0) {
  //           return c.substring(name.length, c.length);
  //         }
  //       }
  //       return '';
  //     },
  //     generate_guid: function () {
  //       function s4() {
  //         return Math.floor((1 + Math.random()) * 0x10000)
  //           .toString(16)
  //           .substring(1);
  //       }
  //       return (
  //         s4() +
  //         s4() +
  //         '-' +
  //         s4() +
  //         '-' +
  //         s4() +
  //         '-' +
  //         s4() +
  //         '-' +
  //         s4() +
  //         s4() +
  //         s4()
  //       );
  //     },
  //     boot: function (user: any) {
  //       if (messageWindowRef.current && messageListRef.current) {
  //         const messageWindow = messageWindowRef.current;
  //         const messageList = messageListRef.current;

  //         const source = document.getElementById('message_template')?.innerHTML;
  //         const messageTemplate = Handlebars.compile(source || '');

  //         const clearReplies = this.clearReplies;
  //         const renderMessage = this.renderMessage;
  //         const deliverMessage = this.deliverMessage;
  //         const input = inputRef.current;
  //         const trigger = this.trigger;
  //         const setCookie = this.setCookie;
  //         const getCookie = this.getCookie;
  //         const generate_guid = this.generate_guid;

  //         function focus() {
  //           if (input) {
  //             input.focus();
  //           }
  //         }

  //         function quickReply(payload: string) {
  //           if (payload) {
  //             that.send(payload);
  //           }
  //         }

  //         const converter = new showdown.Converter();
  //         converter.setOption('openLinksInNewWindow', true);

  //         const that = this;

  //         const botkit = {
  //           config: that.config,
  //           options: that.options,
  //           reconnect_count: that.reconnect_count,
  //           guid: that.guid,
  //           current_user: that.current_user,
  //           message_window: messageWindow,
  //           message_list: messageList,
  //           message_template: messageTemplate,
  //           replies: repliesRef.current,
  //           input: input,
  //           focus: focus,
  //           on: that.on,
  //           trigger: trigger,
  //           request: that.request,
  //           send: that.send,
  //           deliverMessage: deliverMessage,
  //           getHistory: that.getHistory,
  //           webhook: that.webhook,
  //           connect: that.connect,
  //           connectWebhook: that.connectWebhook,
  //           connectWebsocket: that.connectWebsocket,
  //           clearReplies: clearReplies,
  //           quickReply: quickReply,
  //           setCookie: setCookie,
  //           getCookie: getCookie,
  //           generate_guid: generate_guid,
  //           boot: that.boot,
  //         };

  //         that.message_window = messageWindow;
  //         that.message_list = messageList;
  //         that.message_template = messageTemplate;
  //         that.replies = repliesRef.current;
  //         that.input = input;
  //         that.focus = focus;

  //         that.on('connected', function () {
  //           messageWindow.className = 'connected';
  //           if (input) {
  //             input.disabled = false;
  //           }
  //           that.sendEvent({
  //             name: 'connected',
  //           });
  //         });

  //         that.on('disconnected', function () {
  //           messageWindow.className = 'disconnected';
  //           if (input) {
  //             input.disabled = true;
  //           }
  //         });

  //         that.on('webhook_error', function (err: any) {
  //           alert('Error sending message!');
  //           console.error('Webhook Error', err);
  //         });

  //         that.on('typing', function () {
  //           clearReplies();
  //           renderMessage({
  //             isTyping: true,
  //           });
  //         });

  //         that.on('sent', function () {
  //           // do something after sending
  //         });

  //         that.on('message', function (message: Message) {
  //           console.log('RECEIVED MESSAGE', message);
  //           renderMessage(message);
  //         });

  //         that.on('message', function (message: Message) {
  //           if (message.goto_link) {
  //             window.location.href = message.goto_link;
  //           }
  //         });

  //         that.on('message', function (message: Message) {
  //           clearReplies();
  //           if (message.quick_replies && repliesRef.current) {
  //             const list = document.createElement('ul');
  //             const elements: HTMLLIElement[] = [];

  //             message.quick_replies.forEach((reply: QuickReply) => {
  //               const li = document.createElement('li');
  //               const el = document.createElement('a');
  //               el.innerHTML = reply.title;
  //               el.href = '#';
  //               el.onclick = function () {
  //                 quickReply(reply.payload);
  //               };
  //               li.appendChild(el);
  //               list.appendChild(li);
  //               elements.push(li);
  //             });

  //             repliesRef.current.appendChild(list);

  //             if (message.disable_input && input) {
  //               input.disabled = true;
  //             } else if (input) {
  //               input.disabled = false;
  //             }
  //           } else if (input) {
  //             input.disabled = false;
  //           }
  //         });

  //         that.on('history_loaded', function (history: any) {
  //           if (history) {
  //             history.forEach((item: any) => {
  //               renderMessage({
  //                 text: item.text,
  //                 type: item.type === 'message_received' ? 'outgoing' : 'incoming',
  //               });
  //             });
  //           }
  //         });

  //         if (window.self !== window.top) {
  //           that.parent_window = window.parent;
  //           window.addEventListener('message', that.receiveCommand, false);
  //           that.sendEvent({
  //             type: 'event',
  //             name: 'booted',
  //           });
  //           console.log('Messenger booted in embedded mode');
  //         } else {
  //           console.log('Messenger booted in stand-alone mode');
  //           that.connect(user);
  //         }
  //       }
  //     },
  //   };

  //   botkit.boot(null);
  // }, []);

  return (


    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon className="search-icon" icon={add} ></IonIcon>
          </IonButtons>
          <IonTitle>Message</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Messages</h1>
{/* 
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.min.js"></script>
          <script src="https://cdn.rawgit.com/showdownjs/showdown/1.7.4/dist/showdown.min.js"></script>
        </Helmet>



        <div className="wrapper">
          <div id="message_window" ref={messageWindowRef}>
            <div id="message_list" ref={messageListRef}></div>
            <div id="message_replies" ref={repliesRef}></div>
            <footer>
              <form onSubmit={(e) => botkit.send(inputRef.current?.value, e)}>
                <input
                  type="text"
                  autoComplete="off"
                  id="messenger_input"
                  placeholder="Type here..."
                  ref={inputRef}
                />
                <button type="submit">Send</button>
              </form>
            </footer>
          </div>
        </div>


        <Helmet>
          <script src="./client.js"></script>
        </Helmet> */}

      </IonContent>
    </IonPage>
  );
}

export default Message;

