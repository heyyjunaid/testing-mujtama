"use client";
import React from "react";
import Typography from "@/DS/components/Typography";
import s from "./privacy-policy.module.scss";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";

// ==============================
// 🔹 TYPES
// ==============================
interface SectionDetails {
  name?: string;
  email?: string;
  phone?: string;
  resolutionTime?: string;
  [key: string]: string | undefined;
}

interface ContactInfo {
  email: string;
}

interface Subsection {
  title: string;
  description?: string;
  points?: string[];
  note?: string;
  subsections?: Subsection[];
  contact?: ContactInfo;
  details?: SectionDetails;
}

interface Section extends Subsection {
  rights?: string[];
  email?: string;
}

interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  intro: {
    description: string;
    consent: string;
  };
  sections: Section[];
}

// ==============================
// 🔹 PRIVACY POLICY DATA
// ==============================
const privacyPolicy: PrivacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "June 10, 2024",
  intro: {
    description: `Mujtama respects your privacy and is committed to protecting your personal data. 
This Privacy Policy outlines how we collect, use, share, and safeguard your information when you use the Mujtama mobile application, website, or related services (collectively, the "App").`,
    consent: `By using Mujtama, you agree to the practices described in this Privacy Policy. 
If you do not agree, please refrain from using the App.`,
  },
  sections: [
    {
      title: "Information We Collect",
      subsections: [
        {
          title: "Personal Information",
          points: [
            "Name, email address, phone number, and other account registration details.",
            "Demographic information such as age, gender, and language preferences.",
          ],
        },
        {
          title: "Device & Usage Information",
          points: [
            "Device information (IP address, device ID, operating system, browser type, and version).",
            "Usage data (interaction with the App, features accessed, and time spent).",
            "Approximate or precise location information (if you grant permission).",
          ],
        },
        {
          title: "Linked Accounts",
          points: [
            "Information received from linked accounts or third-party services you connect with Mujtama (e.g., Google or Facebook).",
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      points: [
        "Provide, improve, and personalize the App’s features and services.",
        "Communicate with you regarding updates, information, or support requests.",
        "Ensure the security and integrity of the App.",
        "Comply with legal obligations, including responding to lawful requests from authorities.",
      ],
    },
    {
      title: "Information Sharing",
      description:
        "We do not sell your personal information. However, we may share it in the following circumstances:",
      subsections: [
        {
          title: "Service Providers",
          points: [
            "Third-party vendors who assist us in providing the App (e.g., hosting, analytics, and payment processing).",
          ],
        },
        {
          title: "Legal Obligations",
          points: [
            "To comply with Indian laws or respond to legal processes, such as court orders or government requests.",
          ],
        },
        {
          title: "Business Transfers",
          points: [
            "In the event of merger, acquisition, or sale of assets, your information may be transferred to the new owner.",
          ],
        },
      ],
    },
    {
      title: "Data Retention",
      description:
        "We retain your data for as long as necessary to provide the App’s services and comply with legal obligations. Once no longer required, it will be securely deleted or anonymized.",
    },
    {
      title:
        "Your Rights (Under the Digital Personal Data Protection Act, 2023)",
      rights: [
        "Access and Correction: Request access to or correction of your personal data.",
        "Data Portability: Request a copy of your data in a machine-readable format.",
        "Data Erasure: Request deletion of your personal data, subject to legal and operational requirements.",
        "Withdraw Consent: Withdraw your consent for data processing at any time.",
        "Lodge Complaint: File a complaint with the Grievance Officer if your rights are violated.",
      ],
      contact: {
        email: "support@mujtama.com",
      },
    },
    {
      title: "Data Security",
      points: [
        "Encryption for data storage and transmission.",
        "Regular security audits and vulnerability assessments.",
        "Restricted access to personal data.",
        "Note: While we strive for 100% secure transmission, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Cookies and Similar Technologies",
      points: ["Enhance user experience.", "Track App usage and performance."],
      note: "You can manage cookies through browser settings. Disabling cookies may affect some App features.",
    },
    {
      title: "Third-Party Links",
      description:
        "The App may include links to third-party websites or services. We are not responsible for their privacy practices. Review their privacy policies before interacting with them.",
    },
    {
      title: "Children’s Privacy",
      description:
        "Mujtama does not knowingly collect personal data from children under 18 without parental consent. If provided with such data, contact us for immediate action.",
    },
    {
      title: "Grievance Officer",
      description:
        "In compliance with Indian law, we have appointed a Grievance Officer to address your concerns.",
      details: {
        name: "[Grievance Officer Name]",
        email: "privacy@mujtama.com",
        phone: "[Insert Phone Number]",
        resolutionTime: "15 working days",
      },
    },
    {
      title: "Policy Updates",
      description:
        "We may update this Privacy Policy periodically to reflect legal or operational changes. Significant changes will be communicated via email or in-app notifications. Continued use of the App after updates constitutes acceptance.",
    },
    {
      title: "Contact Information",
      description:
        "For questions or concerns about this Privacy Policy, contact us at:",
      email: "support@mujtama.com",
    },
    {
      title: "Acknowledgment",
      description:
        "By using Mujtama, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.",
    },
    {
      title: "Notes",
      points: [
        "Grievance Officer: Required under Indian law (IT Rules, 2021).",
        "Consent Collection: The App provides explicit opt-in mechanisms for sensitive data and location tracking.",
        "Legal Review: Conducted by legal experts to ensure compliance with Indian and global privacy regulations.",
      ],
    },
  ],
};

// ==============================
// 🔹 COMPONENT
// ==============================
const PrivacyPolicy: React.FC = () => {
  const renderSection = (
    section: Section,
    level = 1,
    indexPath: number[] = []
  ) => {
    const numbering = indexPath.join(".");
    const sectionTitle = numbering
      ? `${numbering} ${section.title}`
      : section.title;

    const headingSize =
      level === 1
        ? TextSize.Large
        : level === 2
        ? TextSize.Medium
        : TextSize.Base;

    return (
      <section
        key={sectionTitle}
        className={`${s.section} ${s[`level-${level}`]}`}
      >
        <Typography
          label={sectionTitle}
          size={headingSize}
          color={level === 1 ? TextColor.Primary : TextColor.Default}
          fontWeight={FontWeight.SemiBold}
          style={{ marginTop: level === 1 ? 40 : 20 }}
        />

        {section.description && (
          <Typography
            label={section.description}
            color={TextColor.Secondary}
            fontWeight={FontWeight.Light}
            style={{ margin: "12px 0" }}
          />
        )}

        {section.points && (
          <ul>
            {section.points.map((point, idx) => (
              <li key={idx}>
                <Typography
                  label={point}
                  color={TextColor.Secondary}
                  fontWeight={FontWeight.Light}
                  size={TextSize.Small}
                />
              </li>
            ))}
          </ul>
        )}

        {section.rights && (
          <ul>
            {section.rights.map((right, idx) => (
              <li key={idx}>
                <Typography
                  label={right}
                  size={TextSize.Small}
                  fontWeight={FontWeight.Light}
                />
              </li>
            ))}
          </ul>
        )}

        {section.contact && (
          <p>
            Contact:{" "}
            <a href={`mailto:${section.contact.email}`}>
              {section.contact.email}
            </a>
          </p>
        )}

        {section.details && (
          <div className={s.details}>
            {Object.entries(section.details).map(([key, value]) => (
              <Typography
                key={key}
                label={`${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }: ${value}`}
                size={TextSize.Small}
                fontWeight={FontWeight.Light}
              />
            ))}
          </div>
        )}

        {section.note && (
          <Typography
            label={`Note: ${section.note}`}
            color={TextColor.Secondary}
            fontWeight={FontWeight.Bold}
            size={TextSize.Small}
            style={{ textDecoration: "underline" }}
          />
        )}

        {section.subsections &&
          section.subsections.map((sub, subIndex) =>
            renderSection(sub, level + 1, [...indexPath, subIndex + 1])
          )}
      </section>
    );
  };

  return (
    <div className={s.root}>
      <Typography
        label={privacyPolicy.title}
        size={TextSize.DoubleExtraLarge}
        color={TextColor.Primary}
      />
      <Typography
        label={`Last Updated: ${privacyPolicy.lastUpdated}`}
        size={TextSize.Base}
        fontWeight={FontWeight.Bold}
        color={TextColor.Default}
        style={{ marginBottom: 32 }}
      />

      <section className={s.intro}>
        <Typography
          label={privacyPolicy.intro.description}
          color={TextColor.Secondary}
          fontWeight={FontWeight.Light}
          style={{ marginBottom: 32 }}
        />
        <Typography
          label={privacyPolicy.intro.consent}
          color={TextColor.Secondary}
          fontWeight={FontWeight.Light}
          style={{ marginBottom: 32 }}
        />
      </section>

      {privacyPolicy.sections.map((section, index) =>
        renderSection(section, 1, [index + 1])
      )}
    </div>
  );
};

export default PrivacyPolicy;
