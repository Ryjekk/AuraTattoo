import React from "react";
import SocialLink from "@components/shared/socialLinks/socialLink/SocialLink";

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <SocialLink name='fb' href='https://www.facebook.com' />
      <SocialLink name='instagram' href='https://www.instagram.com' />
    </div>
  );
};

export default SocialLinks;
