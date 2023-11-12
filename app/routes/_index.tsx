import type { LinksFunction, MetaFunction } from "@remix-run/node";

import layoutStyles from "~/styles/layout.css";
import imageStyles from "~/styles/images.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Tanner Shimanek" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: layoutStyles },
  { rel: "stylesheet", href: imageStyles },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: './assets/favicon3.png',
  },
];


export default function Index() {
  return (
    <main className="content-grid">
      {/* <h1 className="">Tanner Shimanek</h1>
      <p className="">Software Engineer</p> */}
      <section className="full-width full-viewport bg-light">
      <img className="hero" src="./assets/Astronaut_4.png" width="900" height="1200" alt="astronaut number 4 doing an ollie on a skateboard." />
      </section>
      <section className="full-viewport full-width bg-light-to-dark">
        <div>
        <h1>Tanner Shimanek<span className="clr-grey-400 sub-h1-inline">Software Engineer</span></h1>
        </div>

      </section>
      {/* <p>
        It can be useful to have a system in place that's easy to go full-width,
        or have a "breakout" section for calls to action or blockquotes, or
        other things you want to call attention to.
      </p>
      <p className="breakout">
        Traditionally, we use a container or wrapper, which we need to close,
        and then open again, but thanks to grid, and with the recent additions
        of subgrid to all the evergreen browsers, maybe there's a better way to
        do things?
      </p>
      <p>
        It has it's downsides, as the code is more complex, and it's not as
        obvious how it works when we're so used to the old pattern.
      </p>
      <p>
        That said, we shouldn't limit ourselves just because we are used to
        working in a specific way.
      </p>

      <section className="full-width bg-primary section-padding flow">
        <h2>This section has a different background-color</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          voluptates vitae reiciendis corporis molestias aspernatur vero eaque
          obcaecati neque dolores veritatis repudiandae voluptas consectetur
          voluptatum nobis maiores doloremque, nostrum deleniti!
        </p>
        <p>
          Aspernatur, dignissimos. Quaerat corporis, itaque porro dolore ea a
          placeat molestiae nihil voluptatem veniam facere, corrupti in vel,
          voluptates enim soluta sint dolores? Quaerat laboriosam iusto
          voluptatem accusantium ex alias?
        </p>
      </section>

      <h2>Back to normal</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nam
        at praesentium cumque rem molestias earum officia neque nemo sunt
        laboriosam vero eum optio, saepe dolorem exercitationem quod asperiores
        iste?
      </p>
      <p className="breakout call-to-action">
        Not sure why, but we could set things up if ever you wanted random text
        to be full-bleed without bothering with a div or anything on the outside
        of it as well
      </p>
      <p>
        Error nulla doloribus ex, eius voluptates saepe, in quae ea nesciunt rem
        possimus obcaecati consequuntur deleniti. Tempore deleniti deserunt
        harum, distinctio, culpa atque numquam ducimus repellat fugit iusto
        eveniet velit.
      </p>
      <h3>Images as full-bleed works too</h3>
      <img className="full-width" src="https://unsplash.it/1600/400" alt="" />
      <p>
        Exercitationem dolorum animi at autem tempore omnis, dolorem saepe sint
        totam architecto, vitae cum doloribus illo? Laudantium laboriosam saepe
        eligendi ipsam corrupti molestias expedita tempora eos minima, facere,
        eius dicta.
      </p>
      <p>
        Magnam eius beatae similique officiis quaerat. Natus est dicta
        temporibus a. Aut mollitia magnam quo. Sequi repellendus voluptas quia
        suscipit autem iste! Accusamus, delectus beatae inventore obcaecati ut
        totam ab.
      </p>

      <p>
        Eligendi ea maiores asperiores sed nobis qui, animi sint? Ratione
        laboriosam cum quasi repudiandae in, necessitatibus veritatis nihil
        perferendis maiores consequuntur magnam perspiciatis minus est
        quibusdam, voluptate voluptas natus corporis.
      </p>
      <p>
        Vero, facilis! Animi quam dolor a sunt, quae placeat perspiciatis quia
        odio quisquam at tempore dolorem eum ratione vel minima eaque
        repellendus dolores architecto necessitatibus velit reprehenderit amet
        et rem.
      </p>
      <p>
        Quos, animi expedita facere iste soluta accusamus et facilis, temporibus
        nemo praesentium iusto aliquam voluptas magnam pariatur blanditiis
        optio, corporis laborum quas? Quis libero aperiam est fuga veniam eos
        tenetur?
      </p>

      <section className="bg-primary full-width">
        <h3>content</h3>
      </section> */}
    </main>
  );
}
