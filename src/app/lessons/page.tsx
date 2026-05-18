'use client'

import Link from 'next/link'
import { getBeginnerLessons } from '../../../lib/lessons/lessonData'
import { intermediateLessonSummaries } from '../../../components/lessons/intermediateLessons'
import { advancedLessonSummaries } from '../../../components/lessons/advancedLessons'

const elementaryLessons = [
  { order: 13, title: 'Le Passé Composé I', subtitle: 'Passé composé avec avoir — verbes réguliers en -er.', time: '35' },
  { order: 14, title: 'Le Passé Composé II', subtitle: 'Participes passés irréguliers et négation.', time: '35' },
  { order: 15, title: 'Le Passé Composé III', subtitle: 'Auxiliaire être et accords du participe passé.', time: '40' },
  { order: 16, title: 'Les Verbes en -ir et -re', subtitle: 'Conjugaisons régulières au présent et au passé composé.', time: '35' },
  { order: 17, title: 'Les Verbes Pronominaux', subtitle: 'Routine quotidienne et verbes réfléchis au présent.', time: '35' },
  { order: 18, title: 'Les Pronominaux au Passé', subtitle: 'Passé composé des verbes pronominaux.', time: '40' },
  { order: 19, title: "L'Imparfait", subtitle: 'Descriptions, habitudes et états dans le passé.', time: '40' },
  { order: 20, title: 'Passé Composé vs Imparfait', subtitle: 'Raconter avec contexte et événements.', time: '45' },
  { order: 21, title: 'Le Futur Simple', subtitle: 'Former et utiliser le futur simple.', time: '40' },
  { order: 22, title: 'Les Pronoms COD', subtitle: 'Le, la, les et accords au passé composé.', time: '40' },
  { order: 23, title: 'Les Pronoms COI, Y et EN', subtitle: 'Lui, leur, y, en pour éviter les répétitions.', time: '45' },
  { order: 24, title: 'La Négation et la Comparaison', subtitle: 'Négations étendues et comparatifs/superlatifs.', time: '40' },
  { order: 25, title: 'Les Irréguliers Essentiels', subtitle: 'Savoir/connaître, partir/sortir/dormir, lire/écrire/dire.', time: '45' },
  { order: 26, title: 'Consolidation A2', subtitle: 'Capstone — tous les acquis A2 en un dialogue.', time: '50' },
]

export default function LessonsPage() {
  const beginnerLessons = getBeginnerLessons()

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,35,149,0.06)]">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
              <img className="w-full h-full object-cover" alt="portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6l7Dp06fOBl41MJazMF4sAUBzBNEY2oiNP1QDGKyvW43cppVC3v6xzuYh_MbnRXe26Zrrlko7svXK1evMiyMuW63NesOni-4gDNdNe-fxePQBHdPPEgKKIwqmFdBqv9XWDlTDlH_ruomoepdHwu3fFd2B-6OxJskshm-FTd6AUyqaKvKoA6DaYHgjl8yAg98_k0v9Bv_dQb4DHURLqsk8KdDAeTFLEkYHS8LGtxArnwueUO8aIu3ZnSV4UCVXknV4CSFDsXXJtg"/>
            </div>
            <span className="font-['Epilogue'] text-xl font-black tracking-tight text-[#002395] dark:text-white">Français<span className="text-[#ff9f1c]">Libre</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-stone-500 hover:opacity-80 transition-opacity">settings</button>
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-7">
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary leading-none tracking-tighter mb-6">
              Votre Parcours
            </h1>
            <p className="font-body italic text-xl md:text-2xl text-on-surface-variant max-w-2xl border-l-2 border-secondary pl-6 py-2">
              &quot;La grammaire est l&apos;art de lever les difficultés de la langue.&quot; — <span className="font-bold not-italic text-primary">FrançaisLibre.</span>
            </p>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="h-[300px] w-full rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover" alt="vintage library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuC-8BHHRnQtKDRM5HsCXp7DZNNPb1dUtUxonU59aOZl4VJB_3edDEE2x44e-LDirPvvuUlgLnxNmx8LUXso0QegfrbJnkVs_EUuHEOpMC2v2FipUQBrBal5naACYqcJ7w_70b5o_LjgWNv17EhgkIADa-9vPl_q_UeMmpvQHQQM-PMx8e5T7-GSC1BekpmT22ti0-f93w9mG-N82au5bm_7Izlq6Mn-VWuoDCrCfSv6an5XNVYjAS_4oXlF1OlMzVIeHlni4R4w"/>
            </div>
          </div>
        </section>

        {/* Curriculum Grid */}
        <div className="space-y-24">
          {/* Section A1 */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 overflow-hidden">
              <h2 className="font-display text-4xl font-black text-primary-container">A1</h2>
              <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Débutant</span>
              <div className="flex-grow h-px bg-surface-container-highest"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {beginnerLessons.map((lesson) => (
                <Link key={lesson.id} href={`/lessons/beginner/${lesson.order}`} className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
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
                      <div className="flex gap-2">
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">{lesson.estimated_time} MIN</span>
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">{lesson.is_free ? 'Free' : 'Premium'}</span>
                      </div>
                      <button className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section A2 */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 overflow-hidden">
              <h2 className="font-display text-4xl font-black text-primary-container">A2</h2>
              <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Élémentaire</span>
              <div className="flex-grow h-px bg-surface-container-highest"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {elementaryLessons.map((lesson) => (
                <Link key={lesson.order} href={`/lessons/elementary/${lesson.order}`} className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
                  <div className="w-1/4 bg-secondary flex flex-col items-center justify-center text-on-primary">
                    <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
                    <span className="font-display text-3xl font-black">L{lesson.order}</span>
                  </div>
                  <div className="w-3/4 p-8 flex flex-col justify-between relative">
                    <div>
                      <h3 className="font-body text-2xl font-bold text-primary mb-1">{lesson.title}</h3>
                      <p className="font-label text-sm text-on-surface-variant">{lesson.subtitle}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">{lesson.time} MIN</span>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section B1 */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 overflow-hidden">
              <h2 className="font-display text-4xl font-black text-primary-container">B1</h2>
              <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Intermédiaire</span>
              <div className="flex-grow h-px bg-surface-container-highest"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {intermediateLessonSummaries.map((lesson) => (
                <Link key={lesson.order} href={`/lessons/intermediate/${lesson.order}`} className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
                  <div className="w-1/4 bg-primary flex flex-col items-center justify-center text-on-primary">
                    <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
                    <span className="font-display text-3xl font-black">L{lesson.order.toString().padStart(2, '0')}</span>
                  </div>
                  <div className="w-3/4 p-8 flex flex-col justify-between relative">
                    <div>
                      <h3 className="font-body text-2xl font-bold text-primary mb-1">{lesson.title_fr}</h3>
                      <p className="font-label text-sm text-on-surface-variant">{lesson.subtitle}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex gap-2">
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">{lesson.time} MIN</span>
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">lock</span>
                          Premium
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section B2 */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 overflow-hidden">
              <h2 className="font-display text-4xl font-black text-primary-container">B2</h2>
              <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Avancé</span>
              <div className="flex-grow h-px bg-surface-container-highest"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advancedLessonSummaries.map((lesson) => (
                <Link key={lesson.order} href={`/lessons/advanced/${lesson.order}`} className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
                  <div className="w-1/4 bg-primary flex flex-col items-center justify-center text-on-primary">
                    <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
                    <span className="font-display text-3xl font-black">L{lesson.order}</span>
                  </div>
                  <div className="w-3/4 p-8 flex flex-col justify-between relative">
                    <div>
                      <h3 className="font-body text-2xl font-bold text-primary mb-1">{lesson.title_fr}</h3>
                      <p className="font-label text-sm text-on-surface-variant">{lesson.subtitle}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex gap-2">
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded">{lesson.time} MIN</span>
                        <span className="font-label text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-low rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">lock</span>
                          Premium
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Phonetic Accent Signature */}
        <div className="mt-32 mb-16 flex flex-col items-center">
          <div className="w-0.5 h-16 bg-secondary mb-8 opacity-40"></div>
          <div className="font-label text-sm tracking-widest text-on-tertiary-container uppercase">
            Établi à Paris — MMXXIV
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
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
