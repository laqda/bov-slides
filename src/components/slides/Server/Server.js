import React from "react";
import styles from "./Server.css";
import {Slide} from "../../Slide/Slide";
import server_buffer from "./server_buffer.svg"
import server_client from "./server_client.svg"
import server_command from "./server_command.svg"
import server_default from "./server_default.svg"
import server_echo from "./server_echo.svg"
import server_exists from "./server_exists.svg"
import server_get from "./server_get.svg"
import server_main from "./server_main.svg"
import server_put from "./server_put.svg"
import server_quit from "./server_quit.svg"
import server_server from "./server_server.svg"

export const serverTitles = {
  title: "Analyse serveur",
  subtitles: [
    {
      title: "Fonctionnement",
      length: 1,
    },
    {
      title: "Gestion des buffers",
      length: 1,
    },
  ],
};

export const Server = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <img alt="server" className={`${styles.server_img}`} src={server_default}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_main}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_server}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_client}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_buffer}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_command}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_get}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_exists}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_put}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_quit}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_echo}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <h2>TEST</h2>
      </Slide>
    </React.Fragment>
  );
};
