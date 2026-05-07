import Link from 'next/link';
import Image from 'next/image';

const projects = [ // will include url to actual website later
  {
    title: "Project Youth Japan",
    description: "Collaborated with a small team of Full Stack at Brown members to create a website for Project Youth Japan at Brown. Used Next.js, TypeScript, and Tailwind to make the main page and implement mobile compatibility across the entire website.",
    image: "/project-youth-japan.png",
    githubUrl: "https://github.com/fullstackatbrown/project-youth-japan",
  },
  {
    title: "Brown Opinion Project",
    description: (<>Collaborated with a small team of Full Stack at Brown members to 
              create a website for the Brown Opinion Project. Used Next.JS, Typescript, and 
              Tailwind to implement the Question Submissions page and create a cross-tab data 
              visualization tool (pictured above).{' '}
              <strong><a href="https://www.brownopinionproject.org/" target="_blank" 
              rel="noopener noreferrer" className="text-black hover:underline">
                View the full website</a></strong>.
              </>),
    image: "/bop.png",
    githubUrl: "https://github.com/fullstackatbrown/project-bop",
  },
  {
    title: "Causality and Mind Lab",
    description: (<>Collaborated with a small team of Full Stack at Brown members to
              create a website for the Causality and Mind Lab at Brown. Used Next.js, TypeScript, and Tailwind to build the homepage and integrate Firebase for backend functionality.{' '}
              <strong><a href="https://causality-mind-lab.vercel.app/" target="_blank"
              rel="noopener noreferrer" className="text-black hover:underline">
                View the full website</a></strong>.
              </>),
    image: "/causality_and_mind_card_cover.png",
    githubUrl: undefined,
  },
];

export default function FullStack() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 pt-20">
      {/* navbar */}
      <nav className="bg-cyan-800 dark:bg-gray-800 bg-opacity-75 text-white py-4 fixed top-0 left-0 w-full z-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <Link href="/" className="text-2xl font-bold hover:underline">John Rathgeber</Link>
          <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-cyan-800 rounded px-1">
            Back
          </Link>
        </div>
      </nav>

      <section className="w-full max-w-screen-lg px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={320}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className={project.githubUrl ? "p-4 pb-14" : "p-4"}>
                <h2 className="text-lg font-semibold mb-2 text-black">
                  {project.githubUrl
                    ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                    : project.title}
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
              {project.githubUrl && (
                <div className="absolute bottom-4 left-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-black hover:text-gray-600 transition-colors" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
