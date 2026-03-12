import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Mail, Shield, ArrowRight, Sparkles, Phone, Upload, FileSearch, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandSettingsIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Panel header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">Profile Settings</p>
        <div className="flex items-center gap-2">
          <div className="h-5 px-3 rounded bg-[#0F2745] flex items-center">
            <span className="text-white text-[9px] font-semibold">Save Changes</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        {/* Left — settings fields */}
        <div className="p-4 space-y-4">
          {/* Logo upload */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Logo</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center gap-3 bg-slate-50">
              <div className="w-10 h-10 rounded bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-[#0F2745] uppercase">Logo</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-700">pawsitive-care-logo.png</p>
                <p className="text-[9px] text-slate-400">Click to replace</p>
              </div>
            </div>
          </div>
          {/* Practice name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Pawsitive Care Veterinary</p>
            </div>
          </div>
          {/* Assistant name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Assistant Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Luna</p>
            </div>
          </div>
          {/* Vanity URL */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Your Intake URL</p>
            <div className="border border-slate-200 rounded-md overflow-hidden flex text-[10px]">
              <span className="bg-slate-50 px-2 py-1.5 text-slate-400 border-r border-slate-200 whitespace-nowrap">.com/</span>
              <span className="px-2 py-1.5 text-[#0F2745] font-semibold">pawsitivecare</span>
            </div>
            <p className="text-[9px] text-emerald-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              solovetai.com/pawsitivecare is live
            </p>
          </div>
          {/* Calendly */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Scheduling</p>
            <div className="flex items-center gap-2 border border-emerald-200 bg-emerald-50 rounded-md px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <p className="text-[10px] text-emerald-700 font-medium">Calendly connected</p>
            </div>
          </div>
        </div>
        {/* Right — live preview */}
        <div className="p-4 bg-slate-50/50">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Pet Owner Preview</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Mini browser bar */}
            <div className="bg-slate-100 px-2 py-1 flex items-center gap-1.5 border-b border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                solovetai.com/pawsitivecare
              </div>
            </div>
            {/* Mini client intake page */}
            <div className="bg-[#0F2745] px-3 py-2.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">PC</span>
              </div>
              <div>
                <p className="text-white text-[9px] font-semibold leading-tight">Luna</p>
                <p className="text-white/60 text-[7px] leading-tight">Pawsitive Care Veterinary</p>
              </div>
            </div>
            <div className="px-3 py-3 space-y-2">
              <div className="bg-white rounded-xl rounded-bl-sm border border-slate-100 px-2.5 py-1.5 shadow-sm max-w-[85%]">
                <p className="text-[9px] text-slate-700 leading-snug">Welcome! I'm Luna with Pawsitive Care Veterinary. How can I help you and your pet today?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0F2745] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
                  <p className="text-[9px] text-white leading-snug">My dog has been limping on his back leg for two days.</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 border-t border-slate-100 bg-white flex items-center gap-1.5">
              <div className="flex-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
                <p className="text-[8px] text-slate-400">Type your response…</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#0F2745] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-2">Pet owners see your brand — never SoloVetAI</p>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const ChatModeScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      {/* App header */}
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">PC</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Luna</p>
          <p className="text-white/60 text-[10px] leading-tight">Pawsitive Care Veterinary · Intake Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/60 text-[10px]">Online</span>
        </div>
      </div>
      {/* Chat messages */}
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">L</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Luna, your virtual intake assistant with Pawsitive Care Veterinary. I'll help gather some information before your pet's appointment.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">L</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">What's going on with your pet that brings you in today?</p>
          </div>
        </div>
        {/* Pet owner bubble */}
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">My golden retriever has been limping on his back left leg since yesterday. He yelped when he tried to jump onto the couch.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">L</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">I'm sorry to hear that — that sounds uncomfortable for him. How old is your golden retriever?</p>
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">L</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-slate-100">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Input bar */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const IntakeSummaryScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Email header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Logo</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F2745] uppercase tracking-wider leading-tight">Pawsitive Care Veterinary</p>
            <p className="text-[10px] text-slate-400 leading-tight">New Pet Owner Intake — March 5, 2026</p>
          </div>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2.5 py-0.5 font-medium">New</span>
      </div>
      {/* Visit details table */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Visit Details</p>
        <div className="rounded-lg border border-slate-100 overflow-hidden text-[11px]">
          {[
            ['Pet Owner', 'Sarah Mitchell'],
            ['Email', 'sarah.mitchell@email.com'],
            ['Phone', '(813) 555-0142'],
            ['Location', 'Tampa, FL'],
            ['Specialty', 'General / Orthopedic'],
            ['Pet Concern', 'Limping on back left leg — golden retriever, 7 yrs'],
            ['Desired Outcome', 'Diagnosis and pain management plan'],
          ].map(([label, value], i) => (
            <div key={label} className={`flex ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <span className="w-[36%] px-3 py-1.5 text-slate-500 font-medium flex-shrink-0">{label}</span>
              <span className="px-3 py-1.5 text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI context notes */}
      <div className="px-6 pb-5">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">AI Context Notes</p>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 space-y-1.5">
          {[
            'Golden retrievers are predisposed to cranial cruciate ligament (CCL) tears — assess stifle stability',
            'Acute onset with vocalization suggests possible soft tissue injury or joint pathology',
            'Request any prior radiographs or orthopedic history from previous veterinarian',
            'At 7 years, consider hip dysplasia screening if not previously performed',
          ].map((note) => (
            <div key={note} className="flex gap-2">
              <span className="text-amber-500 font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
              <p className="text-[10px] text-amber-900 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const MarketingKitIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5">
      {/* Social card mock — horizontal layout */}
      <div className="flex" style={{ height: 210 }}>
        {/* White logo zone */}
        <div className="w-[36%] bg-white flex flex-col items-center justify-center p-5 gap-3 border-r border-slate-100">
          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Your<br/>Logo</span>
          </div>
          <p className="text-[8px] font-semibold text-[#0F2745] uppercase tracking-widest text-center leading-tight">
            Pawsitive Care<br/>Veterinary
          </p>
        </div>
        {/* Navy content zone */}
        <div className="flex-1 bg-[#0F2745] flex flex-col justify-center px-6 py-5">
          <p style={{ fontFamily: 'Georgia, serif' }} className="text-white font-bold text-sm leading-snug mb-2.5">
            Your pet's health is worth protecting — schedule a visit today.
          </p>
          <p className="text-[10px] text-white/50 mb-4 tracking-wide">General Practice · Emergency Care</p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-[9px] text-white/40 mb-1">Book your appointment at:</p>
            <p className="text-[11px] text-white font-semibold">solovetai.com/pawsitivecare</p>
          </div>
        </div>
      </div>
      {/* Bottom strip — color theme + label */}
      <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-3">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Color theme</span>
        <div className="flex gap-1.5">
          {['#0F2745','#1C1C1E','#1A4731','#6B1E2E','#334155'].map(c => (
            <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200" style={{ background: c }} />
          ))}
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 bg-emerald-500 relative">
            <span className="absolute -top-1 -right-1 text-[6px] bg-white text-slate-500 rounded-full px-[2px] font-bold leading-none" style={{ paddingTop: 1 }}>B</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for the Solo Veterinarian
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intake by chat, phone, or widget. AI document analysis. Marketing tools. Everything you need — without adding overhead or hiring staff.
          </p>
        </div>

        {/* Feature 1 — text left, visual right */}
        <div id="ai-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Intake That Runs Itself
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pet owners get a conversational AI intake or a structured form — in English or Spanish.
              You get the details you need. No phone tag, no back-and-forth, no scheduling required on your end.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Conversational AI chat mode and structured form mode</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Give your AI assistant a name — pet owners meet "Luna" or "Buddy," not a generic bot</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Bilingual — pet owners choose English or Spanish at the start</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Fully customizable intake questions tailored to your specialty</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your disclaimer presented to every pet owner before they begin</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your logo, practice name, and greeting — pet owners never see SoloVetAI</li>
            </ul>
          </div>
          <ChatModeScreenshot />
        </div>

        {/* Feature 2 — visual left, text right */}
        <div id="visit-summary" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <IntakeSummaryScreenshot />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Know the Visit Before the Appointment
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every submission arrives with a structured pet owner summary and AI-generated context notes
              — flagging breed-specific risks, symptom patterns, vaccination gaps, and
              suggested follow-up questions — so you're prepared the moment the pet walks in.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Organized pet owner profile: name, contact, location, and visit details</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI contextual notes — breed-specific flags, symptom analysis, and diagnostic suggestions — for your eyes only</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the concern</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered to your inbox the moment intake is submitted</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pet owner receives a clean, branded confirmation with their submission summary</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 — Phone Intake — text left, visual right */}
        <div id="phone-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Phone className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Phone Intake — 24/7
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Give your practice a dedicated phone number where callers speak naturally with your AI
              assistant. No hold music, no phone trees — just a professional conversation that captures
              every detail and delivers the same structured summary as chat intake.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Dedicated local phone number for your practice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Callers speak naturally — your AI assistant guides the conversation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Same structured summary, AI context notes, and email notifications</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Available 24/7 — never miss an after-hours or weekend call</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Intake source clearly labeled (Web Chat vs. Phone Call) in your portal</li>
            </ul>
          </div>
          {/* Phone illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-[#0F2745] px-5 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">Your AI Intake Line</p>
                <p className="text-white/50 text-xs mt-0.5">(352) 555-0100</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Simulated transcript */}
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Hi, I'm Luna with Pawsitive Care Veterinary. I'll gather some information to help your veterinarian prepare. What's going on with your pet today?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"My cat hasn't been eating for two days and she's been hiding under the bed. She's usually very social."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"I'm sorry to hear that. Let me get the details so your veterinarian is prepared..."</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-medium">Call in progress — 2:34</span>
                </div>
                <span className="text-[9px] bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">Phone Call</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 4 — Document Intelligence — visual left, text right */}
        <div id="document-intelligence" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Document Intelligence illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#0F2745]" />
                    <p className="text-xs font-semibold text-slate-700">Document Intelligence</p>
                  </div>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 font-medium">4 of 5 received</span>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {[
                    { name: 'Vaccination_Records.pdf', status: 'ready', summary: 'DHPP and rabies current through Sep 2026. Bordetella expired Jan 2026.' },
                    { name: 'Prior_Vet_Records.pdf', status: 'ready', summary: 'ACL repair on right hind leg (2024). Post-op follow-up completed. No complications noted.' },
                    { name: 'Lab_Results_Feb2026.pdf', status: 'ready', summary: 'CBC and chemistry panel within normal limits. Mild elevation in ALT — recheck in 3 months.' },
                    { name: 'Pet_Xray_HindLeg.jpg', status: 'ready', summary: 'Left stifle radiograph. No fracture visible. Mild joint effusion noted.' },
                  ].map((doc) => (
                    <div key={doc.name} className="border border-slate-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <p className="text-[10px] font-medium text-slate-700 flex-1">{doc.name}</p>
                        <span className="text-[9px] text-emerald-600 font-medium">Ready</span>
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-[10px] text-slate-500 leading-relaxed">{doc.summary}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400">Medication History — awaiting upload</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Upload className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Documents In, Insights Out
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Request documents from pet owners with one click. AI recommends what to ask for based on the
              visit type, pet owners upload securely, and every document is automatically analyzed — key dates,
              findings, red flags, and a visit-relevant summary — ready for your review.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI recommends documents based on specialty and visit details</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pet owners upload securely via a branded, encrypted portal</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI extracts key dates, findings, and visit-relevant highlights from each document</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Handles PDFs, images, scanned documents, and Word files</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 30-day secure retention — pass-through, not a vault</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> No human ever views pet owner documents — fully automated</li>
            </ul>
          </div>
        </div>

        {/* Feature 5 — AI Intelligence Brief — text left, visual right */}
        <div id="intelligence-brief" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Brain className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Intelligence Brief
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every intake automatically generates a deep-dive analysis that goes beyond summarizing what the pet owner said.
              The Intelligence Brief identifies breed-specific predispositions, symptom pattern analysis, potential
              diagnostic considerations, and suggests the follow-up questions that matter most — so you walk into
              every appointment with the insight of a veterinary specialist.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Breed-specific risk flagging — alerts when symptoms align with known breed predispositions</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Symptom pattern analysis with differential diagnosis suggestions</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Vaccination and preventive care gap flags with recommended actions</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the specific pet concern</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered alongside the intake summary — no extra step required</li>
            </ul>
          </div>
          {/* Intelligence Brief illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">AI Intelligence Brief</p>
                </div>
                <span className="text-[9px] bg-[#0F2745]/8 text-[#0F2745] rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Pro+</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Breed-specific flags */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Breed-Specific Flags</p>
                  <div className="space-y-1.5">
                    {[
                      { flag: 'Orthopedic', note: 'Golden retrievers have high predisposition to CCL tears — recommend drawer test and tibial thrust' },
                      { flag: 'Joint Disease', note: 'Breed and age (7 yrs) place patient in high-risk category for degenerative joint disease' },
                    ].map((item) => (
                      <div key={item.flag} className="flex gap-2 items-start bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-px">{item.flag}</span>
                        <p className="text-[10px] text-amber-900 leading-snug">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Symptom analysis */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Symptom Analysis</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-slate-600 leading-snug">Acute onset hind limb lameness with vocalization on jumping. Pattern consistent with soft tissue injury or ligament tear. Prior contralateral ACL repair (2024) increases risk of bilateral involvement.</p>
                  </div>
                </div>
                {/* Preventive care flag */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Preventive Care Gaps</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-red-800 leading-snug font-medium">Bordetella vaccine expired Jan 2026. Recommend updating if patient visits boarding or grooming facilities.</p>
                  </div>
                </div>
                {/* Suggested questions */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Suggested Follow-Up</p>
                  <div className="space-y-1">
                    {[
                      'Was the onset sudden or did you notice gradual worsening over days?',
                      'Any changes in appetite, energy level, or behavior since the limping started?',
                      'Has the pet been on any joint supplements or pain medication since the 2024 surgery?',
                    ].map((q) => (
                      <div key={q} className="flex gap-2 items-start">
                        <span className="text-[#0F2745] font-bold text-[10px] flex-shrink-0 mt-0.5">?</span>
                        <p className="text-[10px] text-slate-600 leading-snug">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 6 — Brand Settings — text left, visual right */}
        <div id="brand-settings" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Your Brand, Your Link
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pet owners never see "SoloVetAI." They see your practice name, your logo, and your intake
              page — at a URL you control. Every detail is configurable from your admin portal,
              and when they're ready to visit, send a one-click appointment invite.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your own vanity URL (e.g. solovetai.com/yourpractice)</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Upload your practice logo — shown on every pet owner-facing screen and email</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Set your assistant's name, pet owner greeting, and specialty focus</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Configure disclaimers in English and Spanish</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pause intake instantly with a custom unavailability message</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Send appointment invites via Calendly or any scheduling link</li>
            </ul>
          </div>
          <BrandSettingsIllustration />
        </div>

        {/* Feature 6 — Marketing Kit — visual left, text right */}
        <div id="marketing-kit" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <MarketingKitIllustration />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Pro Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Look Professional Online, Instantly
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Marketing Kit generates platform-ready social media posts and professionally branded
              visual cards in seconds — tailored to your practice, your specialties, and your intake link.
              No designer. No copywriter. No extra tools.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI-written post copy for Facebook, Instagram, LinkedIn, and Nextdoor</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Branded visual cards pre-sized for every platform — download as PNG, ready to upload</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Edit the card headline (AI-suggested, fully customizable) to match your voice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 5 color themes — or use your brand color pulled automatically from your logo</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Website banner sizes included for your practice's website</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Generate in English or Spanish — bilingual from the start</li>
            </ul>
          </div>
        </div>

        {/* Supporting features row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20 pt-4 border-t border-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                Admin Portal
              </CardTitle>
              <CardDescription>
                Review every submission, track status, manage documents, and triage your pet owner pipeline in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Color-coded submission aging and triage</li>
                <li>• Status workflow (new → appointment)</li>
                <li>• Document request and review dashboard</li>
                <li>• Chat and phone intake unified view</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-primary" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                You and your pet owner both get a confirmation the moment an intake is submitted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Instant veterinarian alert email</li>
                <li>• Professional pet owner confirmation</li>
                <li>• Branded with your practice identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" />
                Security &amp; Compliance
              </CardTitle>
              <CardDescription>
                Pet owner data is encrypted in transit and at rest, with built-in privacy notices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• AES-256 encryption at rest, TLS in transit</li>
                <li>• No human review — fully automated AI processing</li>
                <li>• 30-day document retention with pet owner deletion rights</li>
                <li>• Privacy and data handling notice included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coming Q2 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
