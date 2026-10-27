"use client";

import AboutMe from "@/components/my-components/home/about";
import CaseStudiesSection from "@/components/my-components/home/caseStudies";
import Footer from "@/components/my-components/home/footer";
import LocationStats from "@/components/my-components/home/locationStats";
import ProfileAndControl from "@/components/my-components/home/profileAndControl";
import WorkSection from "@/components/my-components/home/work";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center pt-24">
      {/* Main content wrapper containing everything above the footer */}
      <div className="w-full flex flex-col items-center pb-48">
        {/* Narrow wrapper for top components */}
        <div className="w-full max-w-lg flex flex-col gap-4 px-4 sm:px-0">
          <LocationStats />
          <ProfileAndControl />
          <AboutMe />
        </div>

        {/* Work section placed outside the max-w-lg container so it can expand full-screen */}
        <div className="w-full mt-6">
          <WorkSection />
        </div>

        <div className="w-full max-w-lg flex flex-col gap-4 px-4 sm:px-0">
          <CaseStudiesSection />
        </div>
      </div>

      {/* Footer pinned to the absolute bottom of the screen */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}