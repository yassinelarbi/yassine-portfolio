import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import RecentProjects from "@/components/RecentProjects";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <ExperienceTimeline />
      </Reveal>

      <Reveal>
        <RecentProjects />
      </Reveal>
    </div>
  );
}