import Image from "next/image";
import s from "./page.module.scss";

import SalahIcon from "@/assets/icons/Salah.svg";
import QuranIcon from "@/assets/icons/Quran.svg";
import DuaIcon from "@/assets/icons/Dua.svg";
import MosqueIcon from "@/assets/icons/Mosque.svg";
import TimeIcon from "@/assets/icons/Time.svg";
import FastIcon from "@/assets/icons/Fast.svg";
import ProfileIcon from "@/assets/icons/Profile.svg";

// Feature Icons
import Calculator from "@/assets/features/Calculator.svg";
import AI from "@/assets/features/AI.svg";
import CrowdSource from "@/assets/features/CrowdSource.svg";
import QiblaDirection from "@/assets/features/QiblaDirection.svg";
import Quran from "@/assets/features/Quran.svg";
import Audio from "@/assets/features/Audio.svg";
import PlayStoreButtton from "@/components/PlayStoreButton";
import Head from "next/head";
import Typography from "@/DS/components/Typography";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";

// ---------- DATA ----------
const FEATURES = [
  { label: "Real-Time Salah Tracker", icon: SalahIcon },
  { label: "Nearby Mosques", icon: MosqueIcon },
  { label: "Duas", icon: DuaIcon },
  { label: "Fast Tracker", icon: FastIcon },
  { label: "Salah Timings", icon: TimeIcon },
  { label: "Quran", icon: QuranIcon },
  { label: "My Mosques", icon: MosqueIcon },
  { label: "Profile", icon: ProfileIcon },
];

const KEY_FEATURES = [
  {
    label: "Nearby Mosques",
    url: "https://www.mujtamaglobal.com/assets/images/feature01.png",
    description:
      "Find nearby mosques with real-time prayer times and directions, keeping you connected to your local Muslim community.",
  },
  {
    label: "Salah Tracker",
    url: "https://www.mujtamaglobal.com/assets/images/feature02.png",
    description:
      "Track your daily prayers, set reminders, and monitor your progress to build consistency in your worship.",
  },
  {
    label: "Quran",
    url: "https://www.mujtamaglobal.com/assets/images/feature03.png",
    description:
      "Read the complete Quran in Uthmani and Indo-Pak scripts with translations and tafsir for deeper reflection.",
  },
  {
    label: "Duas",
    url: "https://www.mujtamaglobal.com/assets/images/feature04.png",
    description:
      "Access a wide range of authentic daily duas and supplications, including collections from Hisn al-Muslim.",
  },
];

// COMBINED APP SCREENS OVERVIEW
const HOME_SCREEN_OVERVIEW = {
  title: "Home Screen Overview",
  description:
    "Welcome to your personalized Islamic dashboard. Here’s what you’ll find:",
  image:
    "https://www.mujtamaglobal.com/assets/images/home-screen-overview-image.png",
  features: [
    {
      title: "Nearest Mosque & Salah Times",
      description:
        "Instantly view your closest mosque with real-time prayer timings. Follow your favorite masjid to stay updated on upcoming prayers.",
    },
    {
      title: "Islamic Tools at Your Fingertips",
      description:
        "Access core features like Quran, Duas, Hadith, Qibla direction, and a Zakat calculator — all from one place.",
    },
    {
      title: "Stories Section",
      description:
        "A quick access carousel for engaging features like Salah Tracker, Fast Tracker, and more (visually highlighted for ease).",
    },
    {
      title: "Nearby Mosques",
      description:
        "Explore and follow other nearby mosques with just a tap, including distance indicators for easy navigation.",
    },
  ],
};
export const MASJID_DETAIL_OVERVIEW = {
  title: "Masjid Detail Screen Overview",
  image:
    "https://www.mujtamaglobal.com/assets/images/masjid-detail-screen-overview-image.png",
  description:
    "Stay connected to your local mosque with all the essential details in one place. This screen helps you track prayer times, find directions, and manage your mosque preferences with ease.",
  features: [
    {
      title: "Live Prayer Countdown",
      description:
        "At the top, see how much time is left until the next prayer. This real-time countdown helps you stay on track throughout the day.",
    },
    {
      title: "Masjid Information",
      description:
        "Get full details of the mosque including name, address, and distance from your current location. Tap “Direction” to navigate or “Following” to keep it in your favorites.",
    },
    {
      title: "Daily Prayer Timings",
      description:
        "Check all five daily prayer times along with Jummah. The currently active or next prayer is clearly highlighted for quick reference.",
    },
  ],
};
export const MY_MOSQUE_SCREEN_OVERVIEW = {
  title: "My Mosques Screen Overview",
  description:
    "Easily manage and access the mosques you follow for real-time Salah updates, directions, and personalized prayer tracking.",
  features: [
    {
      title: "Followed Mosques List",
      description:
        "This screen shows all the mosques you’ve chosen to follow, helping you stay connected to your preferred locations.",
    },
    {
      title: "Mosque Info Cards",
      description:
        "Each mosque card displays the name, address, and distance from your current location for quick access to relevant details.",
    },
    {
      title: "One-Tap Actions",
      description:
        "Use the “Following” button to manage your connection or navigate to detailed mosque pages for prayer timings and directions.",
    },
  ],
  image:
    "https://www.mujtamaglobal.com/assets/images/masjid-detail-screen-overview-image.png",
};
export const SALAH_SCREEN_OVERVIEW = {
  title: "Salah Tracker Screen Overview",
  description:
    "Build a consistent prayer habit by tracking your daily Salah in a simple and organized way. This screen helps you stay accountable with just a few taps.",
  image:
    "https://www.mujtamaglobal.com/assets/images/salah-tracker-overview-image.png",
  features: [
    {
      title: "Prayer Check-in Prompt",
      description:
        "At the top, you’ll see a quick question like “Have you prayed Maghrib?” — tap ‘Yes’ to instantly log your prayer.",
    },
    {
      title: "Calendar View",
      description:
        "Scroll through the calendar to select any date and view or update your prayer history. It helps you track your progress over time.",
    },
    {
      title: "Daily Salah Checklist",
      description:
        "Each day shows all five prayers. Tap to mark them as completed and visually track which ones you've prayed.",
    },
    {
      title: "Current Day Highlight",
      description:
        "The current date is highlighted so you always know which day you’re logging for.",
    },
  ],
};
const OVERVIEWS = [
  HOME_SCREEN_OVERVIEW,
  MASJID_DETAIL_OVERVIEW,
  MY_MOSQUE_SCREEN_OVERVIEW,
  SALAH_SCREEN_OVERVIEW,
];
const UPCOMING_FEATURES = {
  title: "Upcoming Features",
  features: [
    { label: "Qibla", icon: QiblaDirection },
    { label: "Iqra AI", icon: AI },
    { label: "Zakat Calculator", icon: Calculator },
    { label: "Fundraiser Drive", icon: CrowdSource },
    { label: "Hadith", icon: Quran },
    { label: "Audiobook", icon: Audio },
  ],
};

const WHY_US = {
  image: "https://www.mujtamaglobal.com/assets/images/chose-us-cta-image.png",
  title: "Why Choose Us",
  description:
    "At the heart of Mujtama is a vision to bridge tradition with innovation. Our team is dedicated to integrating modern technology and AI to enhance the way Muslims around the world engage with their faith. From smarter mosque connectivity to intelligent spiritual tools, we aim to build a digital ecosystem that empowers individuals and strengthens communities—now and for the future.",
};

// ---------- COMPONENTS ----------
const TaglineSection = () => (
  <div className={s.taglineSection}>
    <Typography
      label="Faith Meets Convenience"
      size={TextSize.DoubleExtraLarge}
      fontWeight={FontWeight.Light}
      color={TextColor.Primary}
    />

    <Typography
      label="Stay connected to your faith wherever you are, whenever you need."
      size={TextSize.Base}
      fontWeight={FontWeight.Light}
      color={TextColor.Secondary}
    />

    <PlayStoreButtton />
  </div>
);

const HomePage = () => {
  const pageTitle = "Mujtama Global | Your All-in-One Islamic Companion";
  const pageDescription =
    "Stay connected to your faith with Mujtama Global — track Salah, find nearby mosques, read Quran, and access authentic duas all in one Islamic app.";

  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Islamic app, Salah tracker, prayer times, Quran, nearby mosques, dua, Muslim community, Mujtama"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://www.mujtamaglobal.com/assets/images/hero-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mujtamaglobal.com" />
        <link rel="canonical" href="https://www.mujtamaglobal.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={s.root}>
        {/* ---------- HERO ---------- */}
        <header className={s.hero}>
          <div className={s.content}>
            <Typography
              label="Your All In One Islamic Companion"
              size={TextSize.DoubleExtraLarge}
              fontWeight={FontWeight.Light}
              color={TextColor.Primary}
            />

            <Typography
              label="Mujtama Global helps Muslims stay connected to their faith — with real-time Salah tracking, accurate prayer times, and nearby mosque locations wherever you are."
              size={TextSize.Base}
              fontWeight={FontWeight.Light}
              color={TextColor.Secondary}
            />

            <div className={s.features} aria-label="Main features">
              {FEATURES.map((feature) => (
                <span key={feature.label} className={s.feature}>
                  <Image
                    src={feature.icon}
                    alt={`${feature.label} icon`}
                    width={18}
                    height={18}
                    className={s.heroImage}
                  />
                  <Typography
                    label={feature.label}
                    size={TextSize.Small}
                    fontWeight={FontWeight.Medium}
                    color={TextColor.Primary}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className={s.heroImageWrapper}>
            <Image
              src="https://www.mujtamaglobal.com/assets/images/hero-image.png"
              width={380}
              height={480}
              alt="Mujtama Global app hero image showing Islamic features"
              className={s.heroImageMain}
              priority
            />
          </div>
        </header>

        <TaglineSection />

        {/* ---------- KEY FEATURES ---------- */}
        <section className={s.keyFeatures}>
          <Typography
            label="Explore Our Key Features"
            size={TextSize.DoubleExtraLarge}
            fontWeight={FontWeight.Light}
            color={TextColor.Primary}
          />
          <div className={s.cards}>
            {KEY_FEATURES.map((item) => (
              <article key={item.label} className={s.card}>
                <Image
                  src={item.url}
                  alt={`Feature - ${item.label}`}
                  height={200}
                  width={200}
                  className={s.cardImage}
                  loading="lazy"
                />
                <Typography label={item.label} fontWeight={FontWeight.Bold} />
                <Typography
                  label={item.description}
                  fontWeight={FontWeight.Light}
                  color={TextColor.Secondary}
                  size={TextSize.Small}
                />
              </article>
            ))}
          </div>
        </section>

        {/* ---------- OVERVIEWS ---------- */}
        {OVERVIEWS.map((overview, index) => (
          <section key={index} className={s.overview}>
            <div className={s.content}>
              <Typography
                label={overview.title}
                size={TextSize.DoubleExtraLarge}
                fontWeight={FontWeight.Light}
                color={TextColor.Primary}
              />

              <Typography
                label={overview.description}
                fontWeight={FontWeight.Light}
                color={TextColor.Secondary}
              />
              <div className={s.overviewItems}>
                {overview.features.map(({ title, description }, i) => (
                  <article key={i} className={s.overviewItem}>
                    <Typography
                      label={title}
                      fontWeight={FontWeight.Bold}
                      size={TextSize.Medium}
                    />
                    <Typography
                      label={description}
                      fontWeight={FontWeight.Light}
                      color={TextColor.Secondary}
                    />
                  </article>
                ))}
              </div>
            </div>

            <div className={s.imageContainer}>
              <Image
                src={overview.image}
                alt={`${overview.title} illustration`}
                className={s.overviewImage}
                height={400}
                width={500}
                loading="lazy"
              />
            </div>
          </section>
        ))}

        {/* ---------- UPCOMING FEATURES ---------- */}
        <section className={s.upcomingFeatures}>
          <Typography
            label="Upcoming Features"
            size={TextSize.DoubleExtraLarge}
            fontWeight={FontWeight.Light}
            color={TextColor.Primary}
          />
          <div className={s.features}>
            {UPCOMING_FEATURES.features.map((feature) => (
              <div key={feature.label} className={s.feature}>
                <div className={s.imageContainer}>
                  <Image
                    src={feature.icon}
                    height={80}
                    width={80}
                    alt={`${feature.label} icon`}
                    loading="lazy"
                  />
                </div>

                <Typography
                  label={feature.label}
                  fontWeight={FontWeight.Bold}
                  size={TextSize.Medium}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ---------- WHY US ---------- */}
        <section className={s.whyUs}>
          <Image
            src={WHY_US.image}
            height={600}
            width={600}
            className={s.image}
            alt="Muslim community illustration showing unity and innovation"
            loading="lazy"
          />
          <div>
            <Typography
              label={WHY_US.title}
              fontWeight={FontWeight.Light}
              color={TextColor.Primary}
              size={TextSize.DoubleExtraLarge}
            />
            <Typography
              label={WHY_US.description}
              fontWeight={FontWeight.Light}
              color={TextColor.Secondary}
              size={TextSize.Medium}
            />
          </div>
        </section>

        <TaglineSection />
      </main>
    </>
  );
};

export default HomePage;
