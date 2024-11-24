import ArtistsList from "@components/artists/ArtistsList";
import { residents } from "@utils/residents";
export default function ResidentsPage() {
  return (
    <div className='content-wrapper'>
      <h1>Meet Our Residents</h1>
      <p>
        Welcome to our enigmatic tattoo sanctuary, where skin becomes a living
        canvas for extraordinary artistry. Our resident maestros are more than
        mere tattooists; they're visionary creators who infuse each piece with
        unparalleled perspective and technique. From the whisper-soft touch of
        hand poke to the bold strokes of machine work, every artist here wields
        a unique style born from their creative odyssey and fervent passion for
        self-expression.
      </p>
      <p>
        In our appointment-only haven, we've eschewed quantity for the pursuit
        of absolute quality. Here, you'll find yourself enveloped in an
        atmosphere of undivided attention, where your ideas are nurtured into
        bespoke masterpieces. Whether you're captivated by nature's intricate
        designs, drawn to the enigma of abstract concepts, or enthralled by
        ornate embellishments, our gifted artisans stand ready to transmute your
        vision into a timeless work of art.
      </p>
      <p>
        Step across our threshold and embark on a collaborative journey unlike
        any other. Together, we'll craft not just a tattoo, but a deeply
        personal emblem that resonates with the very essence of your being. In
        this studio, every session is an exploration, every design a discovery,
        and every finished piece a unique reflection of you.
      </p>
      <ArtistsList artists={residents} />
    </div>
  );
}
