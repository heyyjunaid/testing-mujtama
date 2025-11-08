import Typography from "@/DS/components/Typography";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";
import s from "./AboutPage.module.scss";
import PlayStoreButton from "@/components/PlayStoreButton";

const AboutUs = () => {
  return (
    <div className={s.root}>
      <div className={s.overlay}></div>

      <div className={s.content}>
        <Typography
          label="About Us"
          size={TextSize.DoubleExtraLarge}
          fontWeight={FontWeight.Medium}
          color={TextColor.Light}
        />

        <Typography
          label="At Mujtama, our mission is to make it easier for Muslims to stay connected to their faith in everyday life. We’ve created a simple, powerful app that brings together essential tools for worship and spiritual growth—all in one place."
          color={TextColor.Light}
        />

        <Typography
          label="With Mujtama, you can effortlessly locate the nearest mosque, keep up with your prayers using our Salah Tracker, and stay consistent with helpful reminders and insights. Dive into the Quran with beautifully rendered Uthmani and Indo-Pak scripts, complete with reliable translations and tafsir to enhance your understanding. Our curated Dua collection, including authentic supplications from Hisn al-Muslim, is always at your fingertips."
          color={TextColor.Light}
        />

        <Typography
          label="Mujtama is more than just an app—it’s a companion built to support your daily worship and connect you with your community."
          color={TextColor.Light}
        />

        <Typography
          label="Faith meets convenience"
          size={TextSize.DoubleExtraLarge}
          fontWeight={FontWeight.Medium}
          color={TextColor.Light}
        />
        <Typography
          label="Stay connected to your faith wherever you are, whenever you need"
          style={{ marginBottom: 0 }}
        />
        <PlayStoreButton />
      </div>
    </div>
  );
};

export default AboutUs;
