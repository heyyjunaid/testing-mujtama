import React from "react";
import s from "./PlayStoreButton.module.scss";
import Image from "next/image";
const PlayStoreButtton = () => {
  return (
    <button className={s.joinBtn}>
      <Image
        src={
          "https://www.mujtamaglobal.com/assets/images/GetItOnGooglePlay_Badge_Web_color.png"
        }
        height={36}
        width={115}
        alt="Playsote Icon"
      />
    </button>
  );
};

export default PlayStoreButtton;
