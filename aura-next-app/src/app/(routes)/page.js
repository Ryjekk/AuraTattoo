import Button from "@components/button/Button";
import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";
export default function Home() {
  return (
    <main>
      <Hero
        content={"# Home Page"}
        backgroundType={"image"}
        backgroundSrc={"/main-bg-img.jpeg"}
      >
        <p>
          Aura Reykjavik is a contemporary tattoo studio situated in the heart
          of Reykjavik, Iceland. The studio prides itself on providing a
          welcoming and professional atmosphere. We are highly regarded for our
          unwavering commitment to quality and excellence, along with a
          personalized customer experience tailored for everyone seeking unique,
          custom tattoos in a serene and soothing environment.
        </p>
        <p>
          To book a tattoo appointment, please contact our artists directly,
          ensuring that your journey from concept to creation is seamless and
          tailored to your needs.
        </p>
        <Button link='/contact' text='Contact Us'>
          Artists
        </Button>
      </Hero>
      <Hero
        content={"# Home Page"}
        backgroundType={"video"}
        backgroundSrc={"video-mini.mp4"}
      >
        <p>
          Aura Reykjavik is a contemporary tattoo studio situated in the heart
          of Reykjavik, Iceland. The studio prides itself on providing a
          welcoming and professional atmosphere. We are highly regarded for our
          unwavering commitment to quality and excellence, along with a
          personalized customer experience tailored for everyone seeking unique,
          custom tattoos in a serene and soothing environment.
        </p>
        <p>
          To book a tattoo appointment, please contact our artists directly,
          ensuring that your journey from concept to creation is seamless and
          tailored to your needs.
        </p>
        <Button link='/contact' text='Contact Us'>
          Artists
        </Button>
      </Hero>
      <GiftCard />
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, saepe
        obcaecati nesciunt quibusdam assumenda repellat, cum accusantium nihil
        dicta doloremque asperiores omnis aspernatur nobis odio corporis sed
        fugit maiores minus placeat necessitatibus facere magnam? Beatae minus
        cupiditate illo, ratione quia harum dolores eveniet maxime nisi
        reiciendis, et sit blanditiis ipsam. Impedit necessitatibus omnis quod,
        quo est asperiores, odit eveniet totam vel voluptates voluptatum
        consequatur ex ipsa fugit natus alias placeat! Harum eveniet deserunt
        ullam quae quas voluptatem eos laborum architecto doloremque laudantium
        velit dolor repellat rem inventore, facilis nesciunt consequatur porro.
        Facere cupiditate accusamus itaque tempora quisquam suscipit nemo
        explicabo consequatur, non alias praesentium necessitatibus hic
        molestias cumque esse modi. Iusto illo nesciunt sit veniam modi autem
        dolorum voluptatibus iste assumenda cupiditate culpa ut laboriosam quasi
        debitis officia, aliquid ex praesentium, optio repudiandae reprehenderit
        unde fuga cum tempore? Voluptatibus, est. Accusamus reprehenderit fugiat
        exercitationem delectus explicabo obcaecati adipisci nostrum sint! Nihil
        amet maxime ipsa excepturi eos quae mollitia officiis voluptatibus earum
        cumque, deserunt illum quo alias est dicta impedit velit praesentium, et
        fugiat delectus corrupti sint repudiandae incidunt! A natus earum illo
        nostrum dolores eveniet eum quis perspiciatis rerum, distinctio
        accusamus at id blanditiis officia nulla amet voluptatem vel nobis
        ducimus, tenetur aperiam perferendis consequuntur? Ex rem autem, facere
        nam exercitationem doloremque eius est distinctio dignissimos voluptatum
        excepturi veniam nostrum. Laborum id enim dolores eius, labore
        repudiandae temporibus corrupti! Odio corporis praesentium, dolore
        corrupti laborum quos officiis amet consequuntur laboriosam id enim
        exercitationem dolorem magnam obcaecati harum sunt aliquam cum. Quas,
        fuga explicabo voluptates, minima quasi aperiam molestias commodi eos
        adipisci modi, officia debitis omnis assumenda. Eveniet debitis esse
        eaque culpa nesciunt iste molestias blanditiis ab commodi non possimus,
        itaque minima. Harum hic quia consequuntur exercitationem, et maxime
        natus ullam vel officiis facere, aperiam, commodi dolor voluptates?
        Explicabo incidunt dolor illum reprehenderit animi perferendis ducimus
        dignissimos quam quisquam eius atque pariatur voluptatem nulla
        temporibus fuga, sint exercitationem? Omnis quasi aspernatur voluptate
        eos, consequatur impedit aperiam illo atque, architecto voluptatum
        tempore porro dolor optio hic nihil blanditiis minima veniam cum
        accusamus culpa ipsa? Sequi vitae, beatae impedit sunt dolor ex deserunt
        error sed inventore, magnam sit reprehenderit minus debitis id facere
        veniam consequuntur ab nostrum unde, adipisci tenetur. Expedita modi,
        incidunt suscipit consequuntur neque magnam quam iusto molestias numquam
        eveniet sed in similique officiis minus reprehenderit quidem a illo
        earum. Eaque voluptatem laborum blanditiis quas hic ipsum ipsa quibusdam
        accusamus impedit reprehenderit, a consequatur corporis doloribus,
        delectus, et maxime minus ducimus incidunt fugit est dolores! Sequi
        fugit vero laborum excepturi officia ipsum similique voluptatum natus
        omnis quo, voluptatem debitis blanditiis pariatur. Magni aperiam dolorum
        numquam sit ipsa fugit doloribus expedita, officia nobis, asperiores
        illo reiciendis atque impedit omnis eligendi modi accusantium nemo enim.
        Ducimus porro qui ex, praesentium et natus saepe voluptates quos?
        Voluptatibus, quam optio error explicabo eligendi mollitia! Et veritatis
        fuga quam, laboriosam, odit nemo cumque eius ullam dolor repudiandae quo
        hic? Delectus rem officiis voluptatibus consectetur porro, neque debitis
        repellat excepturi commodi quo consequuntur necessitatibus ab, minima
        accusantium!
      </p>
      /* filler for 5 paragraphs */
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem
        dolor
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem
        dolor
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem
        dolor
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem
        dolor
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem
        dolor
      </p>
    </main>
  );
}
