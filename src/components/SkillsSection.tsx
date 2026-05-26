// src/components/SkillsSection.tsx
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'REST APIs', 'Authentication', 'Server-side Logic'],
  },
  {
    title: 'Database Management',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DBMS Concepts'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning Basics', 'AI Concepts', 'AWS AI Services', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'GitHub', 'Docker', 'Cypress', 'Microsoft Excel', 'Microsoft PowerPoint'],
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration'],
  },
]

function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-black px-4 py-16 md:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl space-y-8"
      >
        <motion.div variants={fadeUpVariant} className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
          <p className="text-sm text-slate-300 md:text-base">
            A snapshot of the technologies and skills I use to design, build, and ship modern AI-powered products.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.article
              key={category.title}
              variants={fadeUpVariant}
              className="group rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur transition-transform hover:-translate-y-1 hover:border-sky-400/60"
            >
              <h3 className="text-sm font-semibold text-slate-100 md:text-base">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium text-slate-200 group-hover:border-sky-400/70 group-hover:text-sky-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection