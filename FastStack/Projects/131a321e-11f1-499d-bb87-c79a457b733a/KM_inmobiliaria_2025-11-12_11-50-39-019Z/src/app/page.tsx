import { SiteNavbar } from "@/components/navigation/site-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeatureMosaic } from "@/components/sections/feature-mosaic";
import { VirtualTourSection } from "@/components/sections/virtual-tour-section";
import { CrmAutomationSection } from "@/components/sections/crm-automation-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";
import { DocumentSuiteSection } from "@/components/sections/document-suite-section";
import { AnalyticsMarketingSection } from "@/components/sections/analytics-marketing-section";
import { SupportSection } from "@/components/sections/support-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="relative">
      <SiteNavbar />
      <div className="pointer-events-none fixed inset-0 -z-10 backdrop-grid opacity-40" />
      <main className="relative pt-32 sm:pt-36">
        <HeroSection />
        <FeatureMosaic />
        <VirtualTourSection />
        <CrmAutomationSection />
        <CollaborationSection />
        <DocumentSuiteSection />
        <AnalyticsMarketingSection />
        <SupportSection />
        <CtaSection />
      </main>
    </div>
  );
}
