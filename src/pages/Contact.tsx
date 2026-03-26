import { Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('contact.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#10B981]" />
                </div>
                <h3 className="text-base font-semibold">{t('contact.email.title')}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {t('contact.email.description')}
              </p>
              <a href="mailto:sean@solosolutionsai.com" className="text-sm text-[#10B981] hover:underline font-medium">
                {t('contact.email.address')}
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#10B981]" />
                </div>
                <h3 className="text-base font-semibold">{t('contact.response.title')}</h3>
              </div>
              <p className="text-sm text-slate-600">
                {t('contact.response.weekday')}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {t('contact.response.weekend')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold mb-1">{t('contact.form.title')}</h3>
            <p className="text-sm text-slate-600 mb-6">
              {t('contact.form.subtitle')}
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="text-lg font-semibold text-slate-800 mb-2">{t('contact.form.success.title')}</p>
                <p className="text-sm text-slate-600">{t('contact.form.success.message')}</p>
              </div>
            ) : (
              <form
                action="mailto:sean@solosolutionsai.com"
                method="POST"
                encType="text/plain"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">{t('contact.form.nameLabel')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">{t('contact.form.emailLabel')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label htmlFor="practice" className="text-sm font-medium mb-2 block">{t('contact.form.practiceLabel')}</label>
                  <input
                    id="practice"
                    name="practice"
                    type="text"
                    placeholder={t('contact.form.practicePlaceholder')}
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">{t('contact.form.messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
