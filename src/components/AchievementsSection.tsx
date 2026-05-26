// src/components/AchievementsSection.tsx
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

const certifications = [
  'AWS Certified AI Practitioner',
  'AWS Academy Cloud Foundations',
  'MongoDB Certified Associate Developer',
  'Cisco Web Development Course',
  'SQL in HackerRank & Cisco',
  'Internship at Technical Hub',
]

const achievements = [
  'State-Level Karate 2nd Place (Blue Belt)',
  '1st Place in College Carrom Competition',
  'Anchored Freshers Event',
]

const interests = [
  'Exploring New Technologies',
  'AI & Innovation',
  'Workouts & Mindfulness',
  'Travel & Cultural Exploration',
  'Reading Books',
]

function AchievementsSection() {
  return (
    <section
      id="achievements"
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
          <h2 className="text-2xl font-semibold md:text-3xl">Achievements &amp; Certifications</h2>
          <p className="text-sm text-slate-300 md:text-base">
            A quick look at my certifications, achievements, and interests beyond code.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.article
            variants={fadeUpVariant}
            className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            <h3 className="text-sm font-semibold text-sky-300 md:text-base">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-300 md:text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUpVariant}
            className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            <h3 className="text-sm font-semibold text-fuchsia-300 md:text-base">
              Achievements
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-300 md:text-sm">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUpVariant}
            className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            <h3 className="text-sm font-semibold text-emerald-300 md:text-base">
              Interests
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-300 md:text-sm">
              {interests.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}

export default AchievementsSection