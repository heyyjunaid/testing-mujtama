//create a contact us page

import React from "react";
import Typography from "@/DS/components/Typography";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";
import s from "./ContactPage.module.scss";
const ContactUsPage = () => {
  return (
    <div className={s.root}>
      <div className={s.contactInfo}>
        <Typography
          label="Contact Us"
          size={TextSize.DoubleExtraLarge}
          fontWeight={FontWeight.Medium}
          style={{ marginBottom: 0 }}
          color={TextColor.Primary}
        />
        <Typography
          label="Email or complete the form to learn how Mutama can solve your messaging problem"
          fontWeight={FontWeight.Light}
          size={TextSize.Small}
          style={{ marginTop: 12, marginBottom: 12 }}
        />
        <Typography
          label="Mujtamaglobal@gmail.com"
          fontWeight={FontWeight.Medium}
          size={TextSize.Small}
          style={{ marginTop: 12, marginBottom: 12 }}
        />
      </div>
      <div className={s.contactForm}>
        <Typography
          label="Get in Touch"
          size={TextSize.DoubleExtraLarge}
          fontWeight={FontWeight.Medium}
          style={{ marginBottom: 0 }}
        />
        <Typography
          label="You can reach us anytime"
          fontWeight={FontWeight.Light}
          size={TextSize.Small}
          style={{ marginTop: 12, marginBottom: 12 }}
        />
        <form>
          <div className={s.nameInput}>
            {" "}
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" />
          <button type="submit" className={s.submitButton}>
            Submit
          </button>
        </form>
        <Typography
          label="Or you can contact us via email at support@mujtamaglobal.com"
          fontWeight={FontWeight.Light}
          size={TextSize.Small}
          style={{ marginTop: 16 }}
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
