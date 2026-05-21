function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-black px-4 py-16 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-6 text-center md:text-left">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
          <p className="text-sm text-slate-300 md:text-base">
            Ready to collaborate or have a question? Reach out via email or connect on GitHub and LinkedIn.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a
            href="mailto:your.email@example.com"
            className="text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            your.email@example.com
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-200 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-200 hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection