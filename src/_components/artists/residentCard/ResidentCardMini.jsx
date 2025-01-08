import Button from "@components/button/Button";

export default function ResidentCardMini({artist, idx}) {
    const {name, excerpt, mainImage, slug} = artist;
    return (
        <div className='artist-card'>
            {/* TODO uncomment bg*/}
            <div className='artist-card__img'
                // style={{backgroundImage: `url(${mainImage.url})`}}
            >
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
