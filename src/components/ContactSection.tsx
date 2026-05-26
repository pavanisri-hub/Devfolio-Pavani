// src/components/ContactSection.tsx
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-black/80 px-4 py-16 md:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-6xl space-y-8"
      >
        <motion.div variants={fadeUpVariant} className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
          <p className="text-sm text-slate-300 md:text-base">
            Let&apos;s build something intelligent, modern, and impactful together.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          {/* Contact form (UI only) */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
            <h3 className="text-sm font-semibold text-slate-100 md:text-base">
              Let&apos;s Build Something Amazing Together
            </h3>
            <form
  id="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
  className="mt-4 space-y-4"
>
  {/* Web3Forms access key */}
  <input
    type="hidden"
    name="access_key"
    value="c733a301-09c6-4e8c-889d-3f4cf8f70c65"
  />

  <div className="space-y-1 text-xs md:text-sm">
    <label htmlFor="name" className="text-slate-300">
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="w-full rounded-xl border border-slate-600/70 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-1"
      placeholder="Your name"
    />
  </div>

  <div className="space-y-1 text-xs md:text-sm">
    <label htmlFor="email" className="text-slate-300">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full rounded-xl border border-slate-600/70 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-1"
      placeholder="you@example.com"
    />
  </div>

  <div className="space-y-1 text-xs md:text-sm">
    <label htmlFor="message" className="text-slate-300">
      Project / Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="w-full resize-none rounded-xl border border-slate-600/70 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-1"
      placeholder="Tell me about what you want to build..."
    />
  </div>

  {/* Optional: redirect URL after success */}
  {/* <input type="hidden" name="redirect" value="https://your-portfolio-url/success" /> */}

  <button
    type="submit"
    className="w-full rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-black shadow-[0_0_30px_rgba(56,189,248,0.7)] hover:bg-sky-400"
  >
    Send Message
  </button>
</form>
          </div>

          {/* Direct contact details */}
          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-black/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="space-y-3 text-xs text-slate-300 md:text-sm">
              <p>
                Email:{' '}
                <a
                  href="mailto:pavanisripamu@gmail.com"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  pavanisripamu@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+916305781437"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  +91 6305781437
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com/pavanisri-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  github.com/pavanisri-hub
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/your-linkedin/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  linkedin.com/in/your-linkedin
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection