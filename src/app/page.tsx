import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      {/* Navbar */}
      <nav className="bg-cyan-800 dark:bg-gray-800 bg-opacity-75 text-white py-4 fixed top-0 left-0 w-full z-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">John Rathgeber</div>
          <div className="space-x-6">
            <Link href="#about-me" className="hover:underline">About Me</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#resume-contact" className="hover:underline">Contact & Resume</Link>
          </div>
        </div>
      </nav>

      {/* Add Google Fonts for "Bad Script" */}
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" />
      </Head>

      {/* Header Section with Name */}
      <header className="text-center py-16">
        <h1 className="text-8xl text-[var(--foreground)] font-[Bad+Script]">
          John Rathgeber
        </h1>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="w-full py-16 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mx-auto max-w-screen-lg gap-32">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left px-4 space-y-4 md:pr-8">
            <p className="text-lg mb-4">
              Hi! I&apos;m John, a rising junior at Brown University, originally from Madison, Wisconsin, pursuing a double concentration in Mathematics-Computer Science and Music.
              I&apos;m passionate about how logic, creativity, and innovation come together to solve problems in Computer Science.{/*, from systems that power everyday technologies to models that can learn and adapt to achieve optimal performance.*/}
            </p>
            <p className="text-lg">
              When I&apos;m not coding, I&apos;m usually at the piano practicing repertoire or <a href="https://musescore.com/user/76422514" target="_blank" rel="noopener noreferrer" className="underline">composing my own music</a>.
              This summer, I’m also accompanying a voice recital and playing keyboard in the Sauk Prairie Theatre Guild&apos;s production of <em>The SpongeBob Musical</em>.
              I’m a big fan of Chopin, Mozart, Beethoven, Bach, and Joplin.
              Outside of music and tech, I enjoy going to the gym, playing tennis or golf, and reading.
            </p>
            <p className="text-lg">
              My primary languages are C++ and Python, but I also have extensive experience with languages like Javascript, Typescript, Java, and SQL.
              From my previous internships, I have gained valuable skills in problem-solving, working as a team, and project organization which I am currently applying at my internship as a software engineer at Electronic Theatre Controls.
              As an aspiring software engineer, I look forward to further honing my skills and contributing to impactful projects this summer.
            </p>
            <p className="text-lg">
              If you&apos;d like to connect, collaborate, or chat, please don&apos;t hesitate to <Link href="#resume-contact" className="underline">reach out</Link>.
              Thank you for visiting my website!
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center space-y-8 md:justify-end px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <img 
                src="/orwig.png" 
                alt="me in front of Orwig" 
                className="w-80 h-80 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
              <img 
                src="/headshot.jpg"
                alt="headshot" 
                className="w-80 h-80 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <img 
                src="/piano.png"
                alt="me playing piano"
                className="w-auto h-48 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
              <img 
                src="/baby_piano.jpg"
                alt="little me winning piano award"
                className="w-auto h-48 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <img 
                src="/new_york.jpg" 
                alt="me doing a funny pose"
                className="w-80 h-80 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
              <img 
                src="/tennis.png" 
                alt="me playing tennis"
                className="w-80 h-80 object-cover shadow-lg border border-gray-300 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg px-4">
          {[
            {
              title: "Brown Opinion Project Website",
              description: (<>Collaborated with a small team of Full Stack at Brown members to create a website for the Brown Opinion Project at Brown. Used Next.JS, Typescript, and Tailwind to implement the Question Submissions page and create a cross-tab data visualization tool (pictured above). <strong><a href="https://www.brownopinionproject.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">View the full website</a></strong>.
              </>),
              image: "/bop.png",
            },
            {
              title: "Tumor Detection",
              description: (
              <>Led a team in developing a Convolutional Neural Network (CNN) to detect brain tumors in MRI scans, achieving a 90% accuracy rate on publicly available Kaggle datasets. Directed all stages of the project, including data preprocessing, model design, and performance evaluation, utilizing Python along with deep learning frameworks such as Keras and TensorFlow. <strong><a href="/Final Report.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Read the full report</a></strong>.
              </>),
              image: "/tumor_detection_card_cover.png",
            },
            {
              title: "Causality and Mind Lab Website",
              description: (<>Collaborated with a small team of Full Stack at Brown members to create a website for the Causality and Mind Lab at Brown. Used Next.js, TypeScript, and Tailwind to build the homepage and integrate Firebase for backend functionality. <strong><a href="https://causality-mind-lab.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">View the full website</a></strong>.
              </>),
              image: "/causality_and_mind_card_cover.png",
            },
            {
              title: "Wisconsin DOT Position Estimation",
              description: (<>Developed an algorithm that recognizes and maps street signs from a dataset of over 3 million images. This algorithm uses advanced computer vision methods such as monocular depth estimation and YOLO-based sign detection to compute real-world distances using exponential depth fitting and trigonometric projection. <strong><a href="https://github.com/hidabeast/WisDOT_Traffic_Sign_Location" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">See the details</a></strong>.
              </>),
              image: "/wisdot_card_cover.png",
            },
            {
              title: "Caching I/O",
              description: (<>Built a custom C-based I/O caching library to wrap read, write, and seek operations, reducing system call frequency and cutting disk access latency by 100x–1000x through buffered memory caching. Handled overlapping reads/writes, eviction via LRU, and correctness edge cases to closely match stdio behavior.
              </>),
              image: "/caching_io.png",
            },
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img  
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact and Resume*/}
      <section id="resume-contact" className="w-full py-16 border-t border-gray-300">
        <div className="flex justify-between items-start">
          {/* Contact Information Section */}
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">Contact</h2>
            <p className="text-[var(--foreground)] text-lg mb-2">Feel free to reach out!</p>
            <ul className="text-[var(--foreground)] text-lg">
              <li>
                <strong>Email:</strong> <a href="mailto:johndrathgeber@gmail.com" className="underline">johndrathgeber@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/john-rathgeber" target="_blank" rel="noopener noreferrer" className="underline">
                  linkedin.com/in/john-rathgeber
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/hidabeast" target="_blank" rel="noopener noreferrer" className="underline">
                  github.com/hidabeast
                </a>
              </li>
            </ul>
          </div>

          {/* Resume Section */}
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
              <a
                href="/John_Rathgeber_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground)] hover:underline"
              >
                Resume
              </a>
            </h2>
            <div className="w-full h-[753px] border border-gray-300 shadow-lg overflow-hidden">
              <embed 
                src="/John_Rathgeber_Resume.pdf#toolbar=0"
                className="w-full h-full"
                type="application/pdf"
                title="Resume"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}