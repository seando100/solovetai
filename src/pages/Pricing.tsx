import { Check, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const STARTER_FEATURES = [
  "AI client intake — conversational chat and structured form",
  "Bilingual support (English & Spanish)",
  "Branded intake link — vanity URL, your logo and greeting",
  "Structured visit summary delivered to your inbox",
  "AI context notes flagging health concerns and follow-up questions",
  "Vet + pet owner email notifications",
  "Consultation invite via Calendly or scheduling link",
  "Admin portal — review and manage all submissions",
  "Up to 50 client intakes per month",
];

const PRO_EXTRAS = [
  "Up to 150 client intakes per month",
  "Marketing Kit — generate social media posts and branded visual cards",
  "Platform-ready post copy for Facebook, Instagram, LinkedIn & Nextdoor",
  "Branded image cards sized for every platform (7 formats)",
  "Website banner downloads — leaderboard and rectangle",
  "English and Spanish content generation",
];

const PRO_PLUS_EXTRAS = [
  "Unlimited client intakes per month",
  "Dedicated AI phone intake line — your own local number",
  "Pet owners speak naturally with your AI assistant — 24/7, no hold music",
  "Document Intelligence — request, receive, and AI-analyze veterinary records",
  "AI extracts key dates, vaccination history, prior diagnoses, and visit-relevant summaries",
  "Secure encrypted uploads with 30-day retention",
  "Phone number displayed in Marketing Kit materials",
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with the intake automation you need. Add the marketing tools when you're ready to grow.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Starter */}
          <Card className="border border-slate-200 flex flex-col">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Starter</p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-muted-foreground text-lg"> /month</span>
              </div>
              <p className="text-sm text-muted-foreground">per veterinarian · 50 intakes/month</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <ul className="space-y-3 mt-6 mb-8 flex-1">
                {STARTER_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center"
              >
                Join the Waitlist
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Coming Q2 2026
              </p>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="border-2 border-[#0F2745] flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#0F2745] text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0F2745] mb-3 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                Pro
              </p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$79</span>
                <span className="text-muted-foreground text-lg"> /month</span>
              </div>
              <p className="text-sm text-muted-foreground">per veterinarian · 150 intakes/month</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">
                Everything in Starter, plus:
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_EXTRAS.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="block w-full bg-[#0F2745] text-white text-sm font-medium px-6 py-3.5 rounded-md hover:bg-[#0C2038] transition text-center"
              >
                Join the Waitlist
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Coming Q2 2026
              </p>
            </CardContent>
          </Card>

          {/* Pro+ */}
          <Card className="border border-slate-200 flex flex-col relative">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                Pro+
              </p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$119</span>
                <span className="text-muted-foreground text-lg"> /month</span>
              </div>
              <p className="text-sm text-muted-foreground">per veterinarian · unlimited intakes</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">
                Everything in Pro, plus:
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_PLUS_EXTRAS.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center"
              >
                Join the Waitlist
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Coming Q2 2026
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Feature comparison note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
          All plans include a 14-day free trial with full access to all features.
          Your card is required at signup but you won't be charged until day 15.
        </p>

        {/* FAQs */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="item-1">
              <AccordionTrigger>What's included in the free trial?</AccordionTrigger>
              <AccordionContent>
                Your 14-day free trial gives you full access to everything — including the Marketing Kit — on both plans.
                A credit card is required at signup, but you won't be charged until day 15. Cancel anytime before then and you'll never be billed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What counts as an intake?</AccordionTrigger>
              <AccordionContent>
                Each completed client intake submission counts as one intake — whether through the AI chat, structured form, or phone call.
                Incomplete sessions (pet owners who start but don't finish) do not count against your monthly limit.
                Limits reset on the first of each month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2b">
              <AccordionTrigger>How does the AI phone intake line work?</AccordionTrigger>
              <AccordionContent>
                Pro+ includes a dedicated local phone number for your practice. When a pet owner calls, they speak naturally
                with your AI intake assistant — no hold music, no phone trees. The assistant asks the same intake questions as the
                chat experience, and every call is processed identically: you receive a structured summary, AI context notes, and
                email notifications just like any other intake. The line is available 24/7 so you never miss a new patient.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2c">
              <AccordionTrigger>What is Document Intelligence?</AccordionTrigger>
              <AccordionContent>
                Pro+ includes Document Intelligence — a secure workflow for requesting and receiving veterinary records.
                After an intake, you can request specific documents (AI recommends what to ask for based on the pet's condition).
                The pet owner receives a branded email with a secure upload link. Once uploaded, AI automatically analyzes each
                document — extracting vaccination history, prior diagnoses, and visit-relevant highlights — so you have an organized
                brief before the appointment. Documents are encrypted, never viewed by any human, and automatically
                deleted after 30 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is the Marketing Kit?</AccordionTrigger>
              <AccordionContent>
                The Marketing Kit is a Pro-exclusive tool that generates ready-to-post social media content for your practice.
                In seconds, it creates platform-tailored post copy for Facebook, Instagram, LinkedIn, and Nextdoor — plus
                professionally branded visual cards sized for each platform and website banner formats. Everything is
                pre-filled with your practice name, specialties, and intake link. Edit the copy before you post, then
                download your preferred image and share.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I switch plans?</AccordionTrigger>
              <AccordionContent>
                Yes. You can upgrade at any time — your billing is prorated for the remainder of the month.
                Downgrades take effect at the start of your next billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is this only for solo veterinarians?</AccordionTrigger>
              <AccordionContent>
                SoloVetAI is designed for solo practitioners and small practices. Each account is tied to one veterinarian, one branded intake
                link, and one inbox. If you're part of a multi-vet practice, each veterinarian can set up their own account with their
                own branded intake experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Yes. Cancel anytime from your account settings. You'll retain access through the end of your current billing
                period. No cancellation fees, no questions asked.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            SoloVetAI is coming Q2 2026. Join the waitlist to be first in line.
          </p>
          <a
            href="#waitlist"
            className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
