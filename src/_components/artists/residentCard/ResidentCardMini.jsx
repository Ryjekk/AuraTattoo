import Button from "@components/button/Button";
import Image from "next/image";

export default function ResidentCardMini({artist, idx}) {
    const {name, excerpt, mainImage, slug} = artist;
    return (
        <div className='artist-card'>
            <div className='artist-card__img'>
                <Image src={mainImage.url} alt='resident image' fill/>
                <div className='artist-card__box'>
                    <h2>{name}</h2>
                    <Button link={`residents/${slug}`}>
                        read more
                    </Button>
                </div>
            </div>
        </div>
    );
}
