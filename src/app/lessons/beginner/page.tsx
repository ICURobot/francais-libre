import Link from 'next/link'
import { getBeginnerLessons } from '../../../../lib/lessons/lessonData'

export default function BeginnerLessonsPage() {
  const beginnerLessons = getBeginnerLessons()

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,35,149,0.06)]">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6l7Dp06fOBl41MJazMF4sAUBzBNEY2oiNP1QDGKyvW43cppVC3v6xzuYh_MbnRXe26Zrrlko7svXK1evMiyMuW63NesOni-4gDNdNe-fxePQBHdPPEgKKIwqmFdBqv9XWDlTDlH_ruomoepdHwu3fFd2B-6OxJskshm-FTd6AUyqaKvKoA6DaYHgjl8yAg98_k0v9Bv_dQb4DHURLqsk8KdDAeTFLEkYHS8LGtxArnwueUO8aIu3ZnSV4UCVXknV4CSFDsXXJtg"
              />
            </div>
            <span className="font-['Epilogue'] text-xl font-black tracking-tight text-[#002395] dark:text-white">Français<span className="text-[#ff9f1c]">Libre</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-stone-500 hover:opacity-80 transition-opacity" aria-label="Settings">
              settings
            </button>
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-screen-xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <Link
              href="/lessons"
              className="font-label text-xs uppercase tracking-[0.28em] text-secondary font-bold hover:text-primary transition-colors"
            >
              Tous les parcours
            </Link>
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary leading-none tracking-tighter mt-5 mb-6">
              A1 Débutant
            </h1>
            <p className="font-body italic text-xl md:text-2xl text-on-surface-variant max-w-2xl border-l-2 border-secondary pl-6 py-2">
              &quot;Douze leçons A1 pour saluer, compter, se présenter, poser des questions et parler du quotidien.&quot;
            </p>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="h-[300px] w-full rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="vintage classroom"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuC-8BHHRnQtKDRM5HsCXp7DZNNPb1dUtUxonU59aOZl4VJB_3edDEE2x44e-LDirPvvuUlgLnxNmx8LUXso0QegfrbJnkVs_EUuHEOpMC2v2FipUQBrBal5naACYqcJ7w_70b5o_LjgWNv17EhgkIADa-9vPl_q_UeMmpvQHQQM-PMx8e5T7-GSC1BekpmT22ti0-f93w9mG-N82au5bm_7Izlq6Mn-VWuoDCrCfSv6an5XNVYjAS_4oXlF1OlMzVIeHlni4R4w"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-baseline gap-4 mb-10 overflow-hidden">
            <h2 className="font-display text-4xl font-black text-primary-container">A1</h2>
            <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Débutant</span>
            <div className="flex-grow h-px bg-surface-container-highest"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beginnerLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lessons/beginner/${lesson.order}`}
                className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all"
              >
                <div className="w-1/4 bg-primary flex flex-col items-center justify-center text-on-primary">
                  <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
                  <span className="font-display text-3xl font-black">L{lesson.order.toString().padStart(2, '0')}</span>
                </div>
                <div className="w-3/4 p-8 flex flex-col justify-between relative">
                  <div>
                    <h3 className="font-body text-2xl font-bold text-primary mb-1">{lesson.title}</h3>
                    <p className="font-label text-sm text-on-surface-variant">{lesson.subtitle}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">
                      {lesson.estimated_time} MIN
                    </span>
                    <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">
                      {lesson.is_free ? 'Free' : 'Premium'}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-24 flex justify-between items-center pt-8 border-t border-outline-variant/40">
          <Link
            href="/lessons"
            className="font-label text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
          >
            Retour aux leçons
          </Link>
          <Link
            href="/lessons/elementary"
            className="font-label text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
          >
            A2 Élémentaire
          </Link>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 bg-stone-50/90 dark:bg-slate-950/90 backdrop-blur-lg rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
        <div className="max-w-screen-xl mx-auto flex justify-around items-center px-4 pt-3 pb-6">
          <Link href="/lessons" className="flex flex-col items-center justify-center text-[#bb0021] dark:text-[#ff4d4d] relative scale-105 transition-transform duration-300 after:content-[''] after:absolute after:-bottom-2 after:w-1.5 after:h-1.5 after:bg-[#bb0021] after:rounded-full after:left-1/2 after:-translate-x-1/2">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-['Public_Sans'] text-[10px] uppercase font-semibold tracking-wider">Leçons</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-stone-400 dark:text-slate-500 hover:text-[#002395] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined mb-1">history_edu</span>
            <span className="font-['Public_Sans'] text-[10px] uppercase font-semibold tracking-wider">Révision</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-stone-400 dark:text-slate-500 hover:text-[#002395] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined mb-1">menu_book</span>
            <span className="font-['Public_Sans'] text-[10px] uppercase font-semibold tracking-wider">Glossaire</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-stone-400 dark:text-slate-500 hover:text-[#002395] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined mb-1">person</span>
            <span className="font-['Public_Sans'] text-[10px] uppercase font-semibold tracking-wider">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
