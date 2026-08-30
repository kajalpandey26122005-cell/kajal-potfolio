import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { SectionAbout } from '@/components/section-about'
import { SectionEducation } from '@/components/section-education'
import { SectionSkills } from '@/components/section-skills'
import { SectionProjects } from '@/components/section-projects'
import { SectionAchievements } from '@/components/section-achievements'
import { SectionCertifications } from '@/components/section-certifications'
import { SectionInterests, SectionGoals } from '@/components/section-interests-goals'
import { InteractiveTerminal } from '@/components/interactive-terminal'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="os-backdrop min-h-svh">
      <SiteNav />
      <main>
        <Hero />
        <SectionAbout />
        <SectionEducation />
        <SectionSkills />
        <SectionProjects />
        <SectionAchievements />
        <SectionCertifications />
        <SectionInterests />
        <SectionGoals />
        <InteractiveTerminal />
      </main>
      <SiteFooter />
    </div>
  )
}
