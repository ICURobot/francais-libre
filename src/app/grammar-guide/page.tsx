'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function GrammarGuidePage() {
  const [activeSection, setActiveSection] = useState('a1-basics')

  const grammarSections = {
    'a1-basics': {
      title: 'A1 - Basic Fundamentals',
      level: 'Beginner',
      color: 'blue',
      content: [
        {
          concept: 'Definite Articles',
          explanation: 'Used to refer to specific nouns. Gender and number must match the noun.',
          examples: ['le pain (the bread)', 'la viande (the meat)', 'l\'eau (the water)', 'les légumes (the vegetables)'],
          lesson: 'Lesson 1'
        },
        {
          concept: 'Indefinite Articles',
          explanation: 'Used to refer to non-specific nouns. Also must match gender and number.',
          examples: ['un gâteau (a cake)', 'une tarte (a tart)', 'des fruits (some fruits)'],
          lesson: 'Lesson 1'
        },
        {
          concept: 'Partitive Articles',
          explanation: 'Used for uncountable quantities and partial amounts.',
          examples: ['du fromage (some cheese)', 'de la salade (some salad)', 'de l\'eau (some water)'],
          lesson: 'Lesson 1'
        },
        {
          concept: 'Être (to be) - Present Tense',
          explanation: 'Essential verb for identity, characteristics, and states.',
          examples: ['Je suis étudiant (I am a student)', 'Il est français (He is French)', 'Nous sommes contents (We are happy)'],
          lesson: 'Lesson 2'
        },
        {
          concept: 'Avoir (to have) - Present Tense',
          explanation: 'Used for possession, age, and many common expressions.',
          examples: ['J\'ai vingt ans (I am 20 years old)', 'Il a une voiture (He has a car)', 'J\'ai faim (I am hungry)'],
          lesson: 'Lesson 2'
        },
        {
          concept: 'Cardinal Numbers 0-100',
          explanation: 'Foundation for counting, telling time, and expressing quantities.',
          examples: ['un, deux, trois (1, 2, 3)', 'vingt, trente, quarante (20, 30, 40)', 'soixante-dix, quatre-vingts (70, 80)'],
          lesson: 'Lesson 2'
        },
        {
          concept: 'Days of the Week & Months',
          explanation: 'Essential for scheduling, making appointments, and discussing time.',
          examples: ['lundi, mardi, mercredi (Monday, Tuesday, Wednesday)', 'janvier, février, mars (January, February, March)'],
          lesson: 'Lesson 3'
        },
        {
          concept: 'Basic Greetings & Introductions',
          explanation: 'Fundamental expressions for social interaction and politeness.',
          examples: ['Bonjour (Hello)', 'Comment allez-vous? (How are you?)', 'Enchanté(e) (Nice to meet you)'],
          lesson: 'Lesson 1'
        },
        {
          concept: 'Question Formation',
          explanation: 'Using question words and inversion to ask questions.',
          examples: ['Comment? (How?)', 'Où? (Where?)', 'Quand? (When?)', 'Pourquoi? (Why?)'],
          lesson: 'Lesson 4'
        },
        {
          concept: 'Basic Adjectives',
          explanation: 'Descriptive words that must agree with the noun in gender and number.',
          examples: ['grand/grande (big)', 'petit/petite (small)', 'bon/bonne (good)', 'mauvais/mauvaise (bad)'],
          lesson: 'Lesson 5'
        }
      ]
    },
    'a1-verbs': {
      title: 'A1 - Essential Verbs',
      level: 'Beginner',
      color: 'green',
      content: [
        {
          concept: 'Regular -ER Verbs',
          explanation: 'Most common verb group. Follow predictable conjugation patterns.',
          examples: ['parler (to speak): je parle, tu parles, il parle', 'manger (to eat): je mange, tu manges, il mange'],
          lesson: 'Lesson 6'
        },
        {
          concept: 'Regular -IR Verbs',
          explanation: 'Second most common verb group with distinct conjugation patterns.',
          examples: ['finir (to finish): je finis, tu finis, il finit', 'choisir (to choose): je choisis, tu choisis, il choisit'],
          lesson: 'Lesson 6'
        },
        {
          concept: 'Regular -RE Verbs',
          explanation: 'Less common but important verb group with unique endings.',
          examples: ['vendre (to sell): je vends, tu vends, il vend', 'attendre (to wait): j\'attends, tu attends, il attend'],
          lesson: 'Lesson 6'
        },
        {
          concept: 'Common Irregular Verbs',
          explanation: 'Essential verbs that don\'t follow regular patterns.',
          examples: ['aller (to go): je vais, tu vas, il va', 'faire (to do/make): je fais, tu fais, il fait', 'venir (to come): je viens, tu viens, il vient'],
          lesson: 'Lesson 7'
        },
        {
          concept: 'Modal Verbs',
          explanation: 'Verbs that express ability, necessity, or possibility.',
          examples: ['pouvoir (can): je peux, tu peux, il peut', 'vouloir (want): je veux, tu veux, il veut', 'devoir (must): je dois, tu dois, il doit'],
          lesson: 'Lesson 7'
        }
      ]
    },
    'a1-time': {
      title: 'A1 - Time & Numbers',
      level: 'Beginner',
      color: 'purple',
      content: [
        {
          concept: 'Telling Time',
          explanation: 'Using "Il est" + hour + "heure(s)" + minutes. 24-hour format is common.',
          examples: ['Il est trois heures (It is 3 o\'clock)', 'Il est quinze heures trente (It is 3:30 PM)', 'Il est midi (It is noon)'],
          lesson: 'Lesson 3'
        },
        {
          concept: 'Ordinal Numbers',
          explanation: 'Numbers used to indicate order or sequence.',
          examples: ['premier/première (first)', 'deuxième (second)', 'troisième (third)', 'dixième (tenth)'],
          lesson: 'Lesson 3'
        },
        {
          concept: 'Time Expressions',
          explanation: 'Common phrases for discussing time and frequency.',
          examples: ['aujourd\'hui (today)', 'demain (tomorrow)', 'hier (yesterday)', 'chaque jour (every day)'],
          lesson: 'Lesson 3'
        },
        {
          concept: 'Quantities & Measurements',
          explanation: 'Expressing amounts, weights, and measurements.',
          examples: ['un kilo de (a kilo of)', 'une douzaine de (a dozen of)', 'beaucoup de (a lot of)', 'peu de (little of)'],
          lesson: 'Lesson 5'
        }
      ]
    },
    'a2-advanced': {
      title: 'A2 - Advanced Concepts',
      level: 'Elementary',
      color: 'emerald',
      content: [
        {
          concept: 'Past Tenses - Passé Composé',
          explanation: 'Compound past tense using avoir/être + past participle for completed actions.',
          examples: ['J\'ai mangé (I ate)', 'Elle est allée (She went)', 'Nous avons parlé (We spoke)'],
          lesson: 'Lesson 11'
        },
        {
          concept: 'Past Tenses - Imparfait',
          explanation: 'Imperfect tense for ongoing actions, descriptions, and habitual actions in the past.',
          examples: ['Je mangeais (I was eating)', 'Il était fatigué (He was tired)', 'Nous parlions (We used to speak)'],
          lesson: 'Lesson 12'
        },
        {
          concept: 'Future Tense - Futur Simple',
          explanation: 'Simple future tense for actions that will happen.',
          examples: ['Je mangerai (I will eat)', 'Tu parleras (You will speak)', 'Ils viendront (They will come)'],
          lesson: 'Lesson 13'
        },
        {
          concept: 'Object Pronouns',
          explanation: 'Pronouns that replace direct and indirect objects in sentences.',
          examples: ['Je le vois (I see him/it)', 'Elle me donne (She gives me)', 'Nous vous aidons (We help you)'],
          lesson: 'Lesson 14'
        },
        {
          concept: 'Reflexive Verbs',
          explanation: 'Verbs where the subject and object are the same, often for daily routines.',
          examples: ['Je me lève (I get up)', 'Tu te couches (You go to bed)', 'Il se lave (He washes himself)'],
          lesson: 'Lesson 15'
        },
        {
          concept: 'Conditional Tense',
          explanation: 'Used for polite requests, hypothetical situations, and future in the past.',
          examples: ['Je voudrais (I would like)', 'Tu pourrais (You could)', 'Il viendrait (He would come)'],
          lesson: 'Lesson 16'
        },
        {
          concept: 'Subjunctive Mood',
          explanation: 'Used after certain expressions, emotions, and impersonal constructions.',
          examples: ['Il faut que je parte (I must leave)', 'Je suis content qu\'il vienne (I am happy that he is coming)'],
          lesson: 'Lesson 17'
        },
        {
          concept: 'Relative Pronouns',
          explanation: 'Pronouns that connect clauses and provide additional information about nouns.',
          examples: ['qui (who/which)', 'que (whom/which)', 'où (where)', 'dont (whose/of which)'],
          lesson: 'Lesson 18'
        },
        {
          concept: 'Complex Sentence Structures',
          explanation: 'Combining multiple clauses and using conjunctions for sophisticated expression.',
          examples: ['Bien que + subjunctive (Although)', 'Afin que + subjunctive (So that)', 'Sans que + subjunctive (Without)'],
          lesson: 'Lesson 19'
        }
      ]
    },
    'a2-grammar': {
      title: 'A2 - Grammar Structures',
      level: 'Elementary',
      color: 'orange',
      content: [
        {
          concept: 'Comparative & Superlative',
          explanation: 'Comparing things and expressing the highest degree.',
          examples: ['plus grand que (bigger than)', 'le plus grand (the biggest)', 'moins cher que (cheaper than)'],
          lesson: 'Lesson 11'
        },
        {
          concept: 'Adverbs of Manner',
          explanation: 'Words that describe how actions are performed.',
          examples: ['rapidement (quickly)', 'lentement (slowly)', 'bien (well)', 'mal (badly)'],
          lesson: 'Lesson 12'
        },
        {
          concept: 'Prepositions of Place & Time',
          explanation: 'Words that show relationships between objects and time.',
          examples: ['dans (in)', 'sur (on)', 'sous (under)', 'avant (before)', 'après (after)'],
          lesson: 'Lesson 13'
        },
        {
          concept: 'Negation',
          explanation: 'Expressing negative statements and prohibitions.',
          examples: ['ne...pas (not)', 'ne...jamais (never)', 'ne...rien (nothing)', 'ne...personne (nobody)'],
          lesson: 'Lesson 14'
        },
        {
          concept: 'Expressions of Opinion',
          explanation: 'Phrases for expressing thoughts, feelings, and preferences.',
          examples: ['Je pense que (I think that)', 'À mon avis (In my opinion)', 'Je crois que (I believe that)'],
          lesson: 'Lesson 15'
        },
        {
          concept: 'Cause & Effect',
          explanation: 'Connecting ideas and explaining relationships between events.',
          examples: ['parce que (because)', 'donc (therefore)', 'alors (so)', 'c\'est pourquoi (that\'s why)'],
          lesson: 'Lesson 16'
        }
      ]
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      emerald: 'from-emerald-500 to-emerald-600',
      orange: 'from-orange-500 to-orange-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'from-blue-500 to-blue-600'
  }

  const getBorderColor = (color: string) => {
    const colorMap = {
      blue: 'border-blue-400',
      green: 'border-green-400',
      purple: 'border-purple-400',
      emerald: 'border-emerald-400',
      orange: 'border-orange-400'
    }
    return colorMap[color as keyof typeof colorMap] || 'border-blue-400'
  }

  const getBgColor = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100',
      green: 'from-green-50 to-green-100',
      purple: 'from-purple-50 to-purple-100',
      emerald: 'from-emerald-50 to-emerald-100',
      orange: 'from-orange-50 to-orange-100'
    }
    return colorMap[color as keyof typeof colorMap] || 'from-blue-50 to-blue-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            📚 French Grammar Guide
          </h1>
          <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Your comprehensive reference for French grammar concepts from A1 (Beginner) to A2 (Elementary). 
            Master the fundamentals and build confidence in your French communication skills.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-4 mb-12 border border-white/40">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(grammarSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-[20px] font-medium transition-all duration-300 ${
                  activeSection === key
                    ? `bg-gradient-to-r ${getColorClasses(section.color)} text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)]`
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="text-sm opacity-80">{section.level}</div>
                <div>{section.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {grammarSections[activeSection as keyof typeof grammarSections].title}
            </h2>
            <div className={`inline-flex items-center bg-gradient-to-r ${getColorClasses(grammarSections[activeSection as keyof typeof grammarSections].color)} text-white px-6 py-2 rounded-[16px] font-medium text-sm`}>
              {grammarSections[activeSection as keyof typeof grammarSections].level}
            </div>
          </div>
          
          <div className="space-y-8">
            {grammarSections[activeSection as keyof typeof grammarSections].content.map((item, index) => (
              <div key={index} className={`border-l-4 ${getBorderColor(grammarSections[activeSection as keyof typeof grammarSections].color)} bg-gradient-to-r ${getBgColor(grammarSections[activeSection as keyof typeof grammarSections].color)} p-8 rounded-[20px] border border-gray-200/50 shadow-[inset_0_4px_16px_rgba(0,0,0,0.05)]`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{item.concept}</h3>
                  <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-[12px] text-sm font-medium text-gray-600 border border-gray-200/60">
                    {item.lesson}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{item.explanation}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Examples:</h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, idx) => (
                      <li key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-[16px] border border-white/60 text-gray-700 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[28px] p-10 text-white text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden mb-12">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Your Learning Journey</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Track your progress through our comprehensive lesson system
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-3 text-blue-300">A1 - Beginner Level</h4>
                <p className="text-gray-300 mb-4">10 lessons covering fundamentals</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm text-gray-400">Complete ✓</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-3 text-green-300">A2 - Elementary Level</h4>
                <p className="text-gray-300 mb-4">9 lessons covering advanced concepts</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-sm text-gray-400">Complete ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-[28px] p-10 text-white text-center shadow-[0_20px_60px_rgba(59,130,246,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Practice?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Put your grammar knowledge to the test with our interactive lessons
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/lessons/beginner/1" 
                className="bg-white text-blue-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Start with A1 Lessons
              </Link>
              <Link 
                href="/lessons/elementary/11" 
                className="bg-white text-blue-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Continue to A2 Lessons
              </Link>
              <Link 
                href="/lessons" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Browse All Lessons
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg hover:translate-x-1 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
