import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-400 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about SoloVetAI — how it works, what's included, and how to get the most out of it.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">

          {/* ── How It Works ─────────────────────────────────────────── */}
          <p className={SECTION_LABEL}>How It Works</p>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="how-1">
              <AccordionTrigger>How does the AI client intake work?</AccordionTrigger>
              <AccordionContent>
                When a pet owner visits your unique intake link, they are guided through a secure, conversational intake experience powered by an AI assistant. The AI asks questions relevant to your specialties — covering the pet's symptoms, history, timeline, and any veterinarian-specific custom questions you've configured. Pet owners can respond naturally in their own words, and the system structures their answers into a clean summary delivered straight to your inbox. Pet owners can also complete a traditional structured form if they prefer. Both paths feed into the same intake pipeline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-2">
              <AccordionTrigger>What happens after a pet owner submits an intake?</AccordionTrigger>
              <AccordionContent>
                The moment a pet owner submits, two things happen automatically. First, you receive a detailed email notification with the pet owner's full contact information, pet details, symptom summary, and answers to any custom questions you've added. That email also includes AI-generated contextual notes — a private section, visible only to you, that flags potential health concerns, breed-specific considerations, and suggested follow-up questions. Second, the pet owner receives a professional confirmation email summarizing what they submitted, so they know their information was received. All submissions are also stored in your admin portal for easy review and management.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-3">
              <AccordionTrigger>Does the AI assistant give veterinary advice?</AccordionTrigger>
              <AccordionContent>
                No. The AI assistant is strictly an intake tool — it collects information from pet owners on your behalf. It does not provide veterinary advice, diagnoses, or any guidance on how a pet owner should proceed with their animal's care. The AI is transparent with pet owners about this role. Any AI-generated notes in the veterinarian email are internal analytical aids for your eyes only and are clearly labeled "not veterinary advice." All medical judgment, diagnosis, and treatment recommendations remain entirely with you as the licensed veterinarian.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-4">
              <AccordionTrigger>How does client authentication work?</AccordionTrigger>
              <AccordionContent>
                Pet owners access your intake link and are prompted to verify their identity using a secure one-time passcode (OTP) sent to their email address — similar to two-factor authentication. There is no password to create or remember. Once verified, new pet owners are asked to provide their name, and then proceed directly into the intake. Returning pet owners who have previously verified are recognized automatically and skip the name step. This approach ensures intake submissions are tied to a verified email address and protects against spam or anonymous misuse.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-5">
              <AccordionTrigger>Does SoloVetAI support languages other than English?</AccordionTrigger>
              <AccordionContent>
                Yes. SoloVetAI has full bilingual support for English and Spanish. When a pet owner visits your intake link, they can select their preferred language before beginning. The entire intake experience — the AI assistant's questions and responses, the structured form fields, and the confirmation email sent to the pet owner — is delivered in their chosen language. Veterinarian notification emails are always sent in English, regardless of the pet owner's language preference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-6">
              <AccordionTrigger>How do I share my intake link with pet owners?</AccordionTrigger>
              <AccordionContent>
                Every veterinarian account comes with a unique vanity URL in the format <strong>solovetai.com/assistant/yourpracticename</strong>. You can share this link anywhere — add it to your website, include it in your email signature, post it on social media, or send it directly to pet owners. The link opens a fully branded intake experience with your logo, practice name, and custom greeting. There is no technical setup required on your website — the link works immediately from any device or browser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-7">
              <AccordionTrigger>What specialties does SoloVetAI support?</AccordionTrigger>
              <AccordionContent>
                SoloVetAI supports all veterinary specialties. When setting up your profile, you select from a broad list that includes small animal, large animal, equine, exotic, emergency/critical care, dermatology, surgery, dentistry, ophthalmology, and more. You can also add a custom specialty if yours isn't listed. The AI assistant uses your selected specialties to tailor the conversation and ask contextually relevant follow-up questions about the animal's condition.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* ── Setup & Customization ─────────────────────────────────── */}
          <p className={SECTION_LABEL}>Setup & Customization</p>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="setup-1">
              <AccordionTrigger>How long does setup take?</AccordionTrigger>
              <AccordionContent>
                Most veterinarians are fully set up and sharing their intake link within 10 minutes. The setup process involves entering your practice name and your name, uploading your logo (optional), selecting your specialties, writing a custom greeting for pet owners, adding any custom intake questions, and optionally connecting a scheduling link. Once saved, your branded intake experience is live immediately — no development work, no waiting for approvals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="setup-2">
              <AccordionTrigger>Can I customize the intake questions?</AccordionTrigger>
              <AccordionContent>
                Yes, fully. In addition to the core intake fields collected from every pet owner (name, contact info, pet concern, timeline, and contact preference), you can add unlimited custom questions tailored to your practice. Custom questions appear both in the AI chat flow and the structured form. You can also add a custom disclaimer — in English and Spanish separately — that appears at the bottom of the pet owner's confirmation email. Your branding (logo, practice name, greeting message) is fully customizable from your profile settings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="setup-3">
              <AccordionTrigger>Can I connect my scheduling or Calendly link?</AccordionTrigger>
              <AccordionContent>
                Yes. You can connect your Calendly account directly through your admin portal, or simply paste in any scheduling link (Acuity, Google Booking, a direct Calendly link, or any URL). Once connected, pet owners who complete an intake can automatically receive an appointment invite email with your scheduling link, allowing them to book time with you immediately after submitting. This removes the back-and-forth of manually following up with every new patient.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* ── Plans & Billing ───────────────────────────────────────── */}
          <p className={SECTION_LABEL}>Plans & Billing</p>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="billing-1">
              <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
              <AccordionContent>
                Yes. Every new account starts with a 14-day free trial that includes full access to all features on both plans — including the Marketing Kit. A credit card is required to start, but you will not be charged until your trial ends. You can customize your profile, share your intake link with real pet owners, receive intake submissions, and generate marketing content during the trial period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-2">
              <AccordionTrigger>What is the difference between the Starter and Pro plans?</AccordionTrigger>
              <AccordionContent>
                Both plans include the full intake system — AI chat intake, structured form, bilingual support, branded intake link, vet and pet owner email notifications, AI context notes, custom questions, scheduling integration, and access to your admin portal.
                <br /><br />
                <strong>Starter ($49/month)</strong> — Up to 50 completed intakes per month. Ideal for veterinarians with a steady but moderate volume of new patients.
                <br /><br />
                <strong>Pro ($79/month)</strong> — Up to 150 intakes per month, plus full access to the Marketing Kit for generating social media posts and branded visual cards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-3">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Yes. Cancel anytime from your account settings. You'll retain access through the end of your current billing period. No cancellation fees, no questions asked.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* ── Security & Privacy ────────────────────────────────────── */}
          <p className={SECTION_LABEL}>Security & Privacy</p>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="sec-1">
              <AccordionTrigger>Is my client data secure?</AccordionTrigger>
              <AccordionContent>
                Yes. All data is encrypted in transit using TLS and encrypted at rest using AES-256 through our database infrastructure. Client intake data is scoped strictly to your veterinarian account — no data is shared across accounts, and no information is used to train AI models. Authentication uses one-time passcodes rather than passwords, reducing credential exposure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sec-2">
              <AccordionTrigger>Who can see my clients' intake submissions?</AccordionTrigger>
              <AccordionContent>
                Only you. Intake submissions are accessible solely through your authenticated admin portal. Pet owners can see a summary of their own submission in their confirmation email, but they cannot access any other data. The AI-generated contextual notes in your email are for your eyes only and are never shared with the pet owner. SoloVetAI staff do not access individual submissions except when required for support purposes you specifically request.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* ── Support ───────────────────────────────────────────────── */}
          <p className={SECTION_LABEL}>Support</p>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="support-1">
              <AccordionTrigger>Is SoloVetAI only for solo veterinarians?</AccordionTrigger>
              <AccordionContent>
                SoloVetAI is purpose-built for solo practitioners and small practices. Each account is tied to one veterinarian, one branded intake link, and one notification inbox. If you are part of a multi-vet practice, each veterinarian can set up their own individual account with their own branded intake experience, vanity URL, and custom questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support-2">
              <AccordionTrigger>What if I need help with setup or have questions?</AccordionTrigger>
              <AccordionContent>
                We're here to help. You can reach us directly at <strong>sean@solosolutionsai.com</strong> for any setup questions, technical issues, or feedback. We aim to respond to all support inquiries within one business day. You can also use the <Link to="/contact" className="underline text-[#0F2745]">contact form</Link> on our website.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're here to help. Reach out or join the waitlist to be first in line when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              Join the Waitlist
            </a>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
