import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s1.title')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.s1.p1')}
            </p>
            <p className="text-muted-foreground mt-4">
              {t('privacy.s1.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s2.title')}</h2>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s2.1.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s2.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s2.3.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.4.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s2.4.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.5.title')}</h3>
            <p className="text-muted-foreground">
              {t('privacy.s2.5.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s3.body')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s3.ssn')}</strong></li>
              <li><strong>{t('privacy.s3.credit')}</strong></li>
              <li><strong>{t('privacy.s3.bank')}</strong></li>
              <li><strong>{t('privacy.s3.govId')}</strong></li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {t('privacy.s3.note')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s4.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s4.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.s4.f1')}</li>
              <li>{t('privacy.s4.f2')}</li>
              <li>{t('privacy.s4.f3')}</li>
              <li>{t('privacy.s4.f4')}</li>
              <li>{t('privacy.s4.f5')}</li>
              <li>{t('privacy.s4.f6')}</li>
              <li>{t('privacy.s4.f7')}</li>
              <li>{t('privacy.s4.f8')}</li>
              <li>{t('privacy.s4.f9')}</li>
              <li>{t('privacy.s4.f10')}</li>
              <li>{t('privacy.s4.f11')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s5.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.intro')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.1.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.3.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.4.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.4.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.5.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s5.5.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.6.title')}</h3>
            <p className="text-muted-foreground">
              {t('privacy.s5.6.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s6.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s6.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.s6.f1')}</li>
              <li>{t('privacy.s6.f2')}</li>
              <li>{t('privacy.s6.f3')}</li>
              <li>{t('privacy.s6.f4')}</li>
              <li>{t('privacy.s6.f5')}</li>
              <li>{t('privacy.s6.f6')}</li>
              <li>{t('privacy.s6.f7')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s7.title')}</h2>
            <p className="text-muted-foreground mb-4">
              <strong>{t('privacy.s7.professional')}</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>{t('privacy.s7.intakeRecords')}</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>{t('privacy.s7.documents')}</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>{t('privacy.s7.integration')}</strong>
            </p>
            <p className="text-muted-foreground">
              <strong>{t('privacy.s7.deletion')}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.intro')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.1.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.3.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.4.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.4.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.5.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s8.5.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.6.title')}</h3>
            <p className="text-muted-foreground">
              {t('privacy.s8.6.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s9.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s9.access')}</strong></li>
              <li><strong>{t('privacy.s9.correction')}</strong></li>
              <li><strong>{t('privacy.s9.deletion')}</strong></li>
              <li><strong>{t('privacy.s9.portability')}</strong></li>
              <li><strong>{t('privacy.s9.objection')}</strong></li>
              <li><strong>{t('privacy.s9.restriction')}</strong></li>
              <li><strong>{t('privacy.s9.withdrawal')}</strong></li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {t('privacy.s9.contact')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s10.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s10.california')}</strong></li>
              <li><strong>{t('privacy.s10.other')}</strong></li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {t('privacy.s10.note')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s11.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s11.intro')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s11.1.body')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s11.1.rights')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s11.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('privacy.s11.3.body')}
            </p>

            <p className="text-muted-foreground">
              {t('privacy.s11.consent')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s12.title')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.s12.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s13.title')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.s13.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s14.title')}</h2>
            <p className="text-muted-foreground">
              {t('privacy.s14.body')}
            </p>
            <p className="text-muted-foreground mt-2">
              {t('privacy.s14.email')}
            </p>
            <p className="text-muted-foreground mt-2 whitespace-pre-line">
              {t('privacy.s14.address')}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
