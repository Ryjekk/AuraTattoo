import Button from "@components/button/Button";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function GuestCard({artist, idx}) {
    const Markdown = dynamic(() => import("react-markdown"));
    const {
        name,
        image,
        date,
        instagramLink,
        bookingDetails,
    } = artist;
    return (
        <div className='artist-card'>
            <div className='artist-card__img'
            >
                <Image src={image.url} alt='resident image' fill/>
                <div className='artist-card__box guest__box'>
                    <h2>{name} <strong>({date})</strong></h2>
                    <Button link={instagramLink} target='blank'>
                        @{name}
                    </Button>
                </div>
            </div>
        </div>
    );
}
