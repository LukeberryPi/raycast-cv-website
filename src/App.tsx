import { Youtube, Twitter, Github, ExternalLink, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const RaycastLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        className="fill-[#FF6362]"
        fillRule="evenodd"
        d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

function App() {
  const projects = [
    {
      title: "phived",
      description: "An anti-procrastionation to-do list!",
      image: "/phog.png",
      link: "https://phived.com",
    },
    {
      title: "css2wind",
      description: "A fun minigame to learn Tailwind!",
      image: "/cs2og.png",
      link: "https://css2wind.com",
    },
    {
      title: "DOGMATCH",
      description: "It's like Tinder, but for dogs!",
      image: "/dogmatch.png",
      link: "https://youtu.be/dQw4w9WgXcQ?si=cYB11_zgJBVhGqw7",
    },
    // {
    //   title: "Personal Website",
    //   description: "My personal website: links, projects, and articles!",
    //   image: "/website.png",
    //   link: "https://lukeberrypi.com",
    // },
  ];

  const socials = [
    {
      title: "I almost ratio'd Raycast",
      description:
        "I broke the Brazilian Community by sharing Raycast for Windows!",
      image: "/x.png",
      link: "https://x.com/LukeberryPi/status/1858928642820370775",
    },
    {
      title: "Added Kent C Dodds to the waitlist",
      description: "I got a developer celebrity onto Raycast for iOS!",
      image: "/x.png",
      link: "https://x.com/kentcdodds/status/1878094118355660968",
    },
    {
      title: "A short video explaining Raycast...",
      description: "Got over 80k impessions! ",
      image: "/x.png",
      link: "https://x.com/LukeberryPi/status/1858984492868006325",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 bg-black backdrop-blur-md border-b border-zinc-800 z-50"
      >
        <nav className="container mx-auto px-4 max-w-screen-lg py-4">
          <div className="flex justify-between items-center">
            <motion.a
              className="items-center flex gap-2 font-bold text-xl"
              href="https://x.com/lukeberrypi"
              target="_blank"
              whileHover={{ scale: 1.05 }}
            >
              <RaycastLogo />
              Luke Berry
            </motion.a>
            <div className="flex space-x-8">
              <a
                href="#projects"
                className="underline underline-offset-2 decoration-[#FF6362]"
              >
                Projects
              </a>
              <a
                href="#community"
                className="underline underline-offset-2 decoration-[#FF6362]"
              >
                Community
              </a>
              <a
                href="#why"
                className="underline underline-offset-2 decoration-[#FF6362]"
              >
                Why me?
              </a>
            </div>
          </div>
        </nav>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 max-w-screen-lg py-24 text-center"
      >
        <h1 className="text-6xl font-bold mt-24 mb-8">
          The{" "}
          <span className="bg-gradient-to-r from-[#FF6362] to-[#0D0EFD] text-transparent bg-clip-text">
            (future)
          </span>{" "}
          of Raycast in{" "}
          <span className="bg-gradient-to-r from-[#038F3F] to-[#2F257D] via-[#F7C500] text-transparent bg-clip-text">
            Brazil
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          I'm a British-Brazilian Fullstack Developer with an unhealthy
          obsession for Raycast. My biggest accomplishment was{" "}
          <a
            className="text-zinc-200 underline underline-offset-2 decoration-[#FF6362]"
            target="_blank"
            href="https://x.com/kentcdodds/status/1878094118355660968"
          >
            getting Kent C Dodds to sign up for the Raycast iOS waitlist.
          </a>
        </p>
      </motion.section>

      <section id="projects" className="py-24">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-200">
            I can design & build beautiful things!
          </h2>
          <p className="text-center mb-16 text-lg text-zinc-400">
            I love obsessing over design and UI details. I designed the last one
            but it's not in production, sorry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl overflow-hidden border border-zinc-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-zinc-300 mb-4">{project.description}</p>
                  <a className="text-zinc-200 font-bold underline underline-offset-2 decoration-[#FF6362] flex items-center gap-2">
                    Click to visit website! <ExternalLink size={16} />
                  </a>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-24">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-200">
            I'll bring +10k Brazilian developers with me!
          </h2>
          <p className="text-center mb-16 text-lg text-zinc-400">
            I have a huge community following me. I explain Raycast to five
            people every week.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socials.map((project, index) => (
              <motion.a
                href={project.link}
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl overflow-hidden border border-zinc-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-zinc-300 mb-4">{project.description}</p>
                  <a className="text-zinc-200 font-bold underline underline-offset-2 decoration-[#FF6362] flex items-center gap-2">
                    Click to see! <ExternalLink size={16} />
                  </a>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-24">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-200">
            Okay... but why me?
          </h2>
          <p className="text-center mb-16 text-lg text-zinc-400">
            I have HUGE potential to be a professional that wears many hats.
          </p>
          <div className="px-4 max-w-prose mx-auto">
            <ul className="list-disc space-y-4">
              <li className="text-zinc-400">
                <span className="text-zinc-100">
                  I have 4+ years of experience with techs that you use,
                </span>{" "}
                such as TypeScript, NextJS, Django (MVC akin to Rails). I'd love
                to learn Swift!
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-200">
                  I can write high quality content,
                </span>{" "}
                such as{" "}
                <a
                  target="_blank"
                  className="text-zinc-200 underline underline-offset-2 decoration-[#FF6362]"
                  href="https://lukeberrypi.com/raycast-second-impressions"
                >
                  my article comparing Alfred and Raycast.
                </a>
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-200">
                  I can design & build beautiful projects from scratch,
                </span>{" "}
                my websites{" "}
                <a
                  className="underline underline-offset-2 decoration-[#FF6362] text-zinc-200"
                  href="https://css2wind.com"
                >
                  css2wind
                </a>{" "}
                and{" "}
                <a
                  className="underline underline-offset-2 decoration-[#FF6362] text-zinc-200"
                  href="https://phived.com"
                >
                  phived
                </a>{" "}
                are here to prove it. I obsessed over every design decision and
                detail imaginable.
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-200">
                  I'm able to talk to cameras in both English and Portuguese.
                </span>{" "}
                I have a{" "}
                <a
                  target="_blank"
                  className="underline underline-offset-2 decoration-[#FF6362] text-zinc-200"
                  href="https://youtube.com/@LukeberryPi"
                >
                  youtube channel
                </a>{" "}
                and I love spreading the word about great technology.
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-200">
                  I have created a Raycast Extension!
                </span>{" "}
                I love TailwindCSS and needed the extension.{" "}
                <a
                  className="underline underline-offset-2 decoration-[#FF6362] text-zinc-200"
                  href="https://github.com/raycast/extensions/pull/15493"
                >
                  So I built it!
                </a>{" "}
                Unfortunately, it hasn't been merged yet... Any approvers?
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-200">
                  I truly believe in Raycast's mission.
                </span>{" "}
                I'm all about minimizing context-switching and really
                understanding user behavior.{" "}
                <span className="text-zinc-200">
                  I feel like Raycast provides state of the art UX and I want to
                  be a part of it!
                </span>
              </li>
            </ul>
            <p className="mt-4 text-zinc-400">
              <span className="text-zinc-200">
                Raycast is an amazing product.
              </span>{" "}
              I believe 90% of people that endure the onboarding stick to using
              it. And a significant portion of those will eventually buy it,
              since your main users are developers and your AI pricing is simply
              unbeatable.
            </p>
            <p className="mt-4 text-zinc-400">
              <span className="text-zinc-200">
                I want to be the person to bring Brazilians to Raycast.
              </span>{" "}
              Once the iOS and Windows versions are out, you'll be able to tap
              into one of the biggest and most loyal markets in the world.
            </p>
            <p className="mt-4 text-zinc-400">
              <span className="text-zinc-200">
                Working at Raycast is a dream job to me
              </span>
              . Even if I only get to talk to someone over an interview, it
              would be an amazing personal milestone. Let me know if any of this
              sounds exciting and get in touch if so!
            </p>
            <p className="mt-4 text-zinc-400">
              <span className="text-zinc-200">
                p.s.: I already live in the UK :&#10091;
              </span>
            </p>
            <p className="mt-4 text-zinc-200">Thank you for reading! 🇧🇷🇬🇧</p>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4 max-w-screen-lg text-center">
          <p className="text-[#FF6362] font-bold text-xl mb-4">
            Give me a chance™
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/lukeberrypi"
              className="text-zinc-300 hover:text-[#FF6362]"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/lukeberrypi"
              className="text-zinc-300 hover:text-[#FF6362]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/lukeberrypi"
              className="text-zinc-300 hover:text-[#FF6362]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://youtube.com/@lukeberrypi"
              className="text-zinc-300 hover:text-[#FF6362]"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
