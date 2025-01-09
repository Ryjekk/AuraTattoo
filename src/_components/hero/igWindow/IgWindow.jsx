"use client";

import useDrag from "@hooks/useDrag";
import Image from "next/image";
const IgWindow = () => {
  const windowId = "ig";
  useDrag(windowId);

  return (
    <div className="post" id={windowId}>
      <div className="info" id={`${windowId}header`}>
        <div className="user">
          <a href="https://www.instagram.com/aura.reykjavik/">
            <div className="profile-pic">
              <Image
                src="/ig/profile.webp"
                alt="aura reykjavik instagram logo"
                fill
                priority
              />
            </div>
          </a>
          <div className="profile-text">
            <p className="username">aura.reykjavik</p>
            <p className="username">Reykjavik, Iceland</p>
          </div>
        </div>
        <Image
          src="/ig/option.webp"
          className="options"
          alt="more options icon"
          width={20}
          height={20}
        />
      </div>
      <div className="post-image" />
      <div className="post-content">
        <div className="reaction-wrapper">
          <a
            href="https://www.instagram.com/direct/t/111953607055598"
            className="icon"
          >
            <svg
              aria-label="Unlike"
              fill="#ff3040"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          </a>

          <svg
            aria-label="Comment"
            className="icon"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <svg
            aria-label="Share"
            className="icon"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
          <svg
            aria-label="Save"
            className="icon save"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </div>
        <h4 className="likes">
          <div className="likes-images">
            <Image
              src="/ig/leny.webp"
              width={20}
              height={20}
              priority
              alt="instagram fan profile picture"
            />
            <Image
              src="/ig/ovro.webp"
              width={20}
              height={20}
              priority
              alt="instagram fan profile picture"
            />
            <Image
              src="/ig/inuk.webp"
              width={20}
              height={20}
              priority
              alt="instagram fan profile picture"
            />
          </div>
          <span>
            Liked by <strong>Inuk</strong> and <strong>others</strong>
          </span>
        </h4>
        <p className="post-time">2 minutes ago</p>
      </div>
    </div>
  );
};

export default IgWindow;
