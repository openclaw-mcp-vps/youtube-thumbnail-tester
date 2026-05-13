export default function Home() {
  const faqs = [
    {
      q: "How does the thumbnail rotation work?",
      a: "We connect to your YouTube account via OAuth, then automatically swap thumbnails on your videos at scheduled intervals using the YouTube Data API."
    },
    {
      q: "How is CTR tracked?",
      a: "We pull click-through rate data from the YouTube Analytics API after each thumbnail rotation period and compare performance across variants."
    },
    {
      q: "Can I test more than two thumbnails?",
      a: "Yes. You can upload multiple thumbnail variants per video and we'll rotate through all of them, ranking each by CTR at the end of the test."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube A/B Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Your Best Thumbnail —{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ThumbnailAB rotates your YouTube thumbnails on a schedule, tracks real CTR data via YouTube Analytics, and tells you which design wins.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start A/B Testing — $12/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Connect YouTube", desc: "Authorize your channel via OAuth in seconds." },
          { step: "2", title: "Upload Variants", desc: "Add 2–5 thumbnail designs per video." },
          { step: "3", title: "Get the Winner", desc: "We track CTR and surface the best performer." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited A/B tests",
              "Auto thumbnail rotation",
              "Real CTR analytics dashboard",
              "Up to 50 videos tracked",
              "Email winner alerts"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pt-8 border-t border-[#30363d]">
        © {new Date().getFullYear()} ThumbnailAB. All rights reserved.
      </footer>
    </main>
  );
}
