import { Hero } from '@/components/home/Hero';
import { Introduction } from '@/components/home/Introduction';
import { OpportunitySnapshot } from '@/components/home/OpportunitySnapshot';
import { ServicePreview } from '@/components/home/ServicePreview';
import { StrategicAdvantage } from '@/components/home/StrategicAdvantage';
import { LeadershipPreview } from '@/components/home/LeadershipPreview';
import { CapabilitiesPreview } from '@/components/home/CapabilitiesPreview';
import { PartnershipCTA } from '@/components/home/PartnershipCTA';
import { JsonLd, organizationSchema } from '@/components/shared/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <Introduction />
      <OpportunitySnapshot />
      <ServicePreview />
      <StrategicAdvantage />
      <LeadershipPreview />
      <CapabilitiesPreview />
      <PartnershipCTA />
    </>
  );
}
