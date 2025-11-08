import React from "react";
import s from "./TermsPage.module.scss";
import Typography from "@/DS/components/Typography";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";
const TermsPage = () => {
  const data = {
    title: "Terms & Conditions",
    description:
      "Welcome to Mujtama! These Terms & Conditions govern your use of our application. By accessing or using Mujtama, you agree to be bound by these terms.",
    date: "Last updated 15 May 2025",
    sections: [
      {
        title: "Acceptance of Terms",
        description:
          "By using Mujtama, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please do not use the app.",
      },
      {
        title: "User Accounts",
        list: [
          "You may need to create an account to access certain features.",
          "You are responsible for maintaining the confidentiality of your account and password.",
          "Mujtama reserves the right to suspend or terminate accounts that violate these terms.",
        ],
      },
      {
        title: "Use of the App",
        description:
          "Mujtama provides Islamic resources, including Quranic text, Hadith collections, prayer tracking, and community features. By using the app, you agree to:",
        list: [
          " Use it for lawful purposes only.",
          "Not misuse, copy, or distribute its content without permission.",
          "Respect community guidelines and other users.",
        ],
      },
      {
        title: "Quran, Hadith, and Islamic Content",
        description:
          "Mujtama aims to provide authentic Islamic content, including Quran translations, tafsir, and Hadith. However, we do not guarantee absolute accuracy and encourage users to verify religious content from trusted scholars.",
      },
      {
        title: "Privacy & Data Collection",
        description:
          "We respect user privacy and handle data in accordance with our Privacy Policy.Your personal information is protected and will not be shared without your consent, except as required by law.",
      },
      {
        title: "Third-Party Services",
        description:
          "Mujtama may integrate third-party services (e.g., prayer time APIs). We are not responsible for the availability, accuracy, or practices of these third parties.",
      },
      {
        title: "Modifications to Terms",
        description:
          "We may update these terms at any time. Continued use of the app after changes means you accept the new terms.",
      },
      {
        title: "Limitation of Liability",
        description: `Mujtama is provided "as is" without warranties. We are not liable for any direct or indirect damages resulting from app usage.`,
      },
      {
        title: "Contact Us",
        description: `If you have any questions, reach out to us at support@mujtama.com.`,
      },
    ],
  };
  return (
    <div className={s.root}>
      <Typography
        label={data.title}
        size={TextSize.DoubleExtraLarge}
        color={TextColor.Primary}
      />
      <Typography
        label={data.date}
        fontWeight={FontWeight.Bold}
        style={{ marginBottom: 32 }}
      />
      <Typography label={data.description} fontWeight={FontWeight.Light} />
      <div className={s.content}>
        {data.sections.map((section, index) => (
          <section key={index} className={s.section}>
            <Typography
              label={`${index + 1}.${section.title}`}
              size={TextSize.Large}
              color={TextColor.Primary}
              style={{ marginBottom: "12px" }}
            />
            {section.description && (
              <Typography
                label={section.description}
                fontWeight={FontWeight.Light}
                color={TextColor.Secondary}
              />
            )}
            {section.list && (
              <ul className={s.list}>
                {section.list.map((item, idx) => (
                  <li key={idx}>
                    <Typography
                      label={item}
                      fontWeight={FontWeight.Normal}
                      size={TextSize.Small}
                      color={TextColor.Secondary}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
