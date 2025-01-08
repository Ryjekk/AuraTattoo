import Image from "next/image";

const MiniHero = ({text, subText, image}) => {
    return (
        <div className='miniHero__wrapper'>
            {image && <Image src={image} alt='bg' fill/>}
            <h1 className='headline'>{text}</h1>
            <p>{subText}</p>
        </div>
    );
};

export default MiniHero;