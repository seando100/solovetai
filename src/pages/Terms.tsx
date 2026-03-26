import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('terms.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('terms.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s1.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s1.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s2.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s2.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s3.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s3.f1')}</li>
              <li>{t('terms.s3.f2')}</li>
              <li>{t('terms.s3.f3')}</li>
              <li>{t('terms.s3.f4')}</li>
              <li>{t('terms.s3.f5')}</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {t('terms.s3.note')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s4.title')}</h2>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s4.1.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s4.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s4.3.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.4.title')}</h3>
            <p className="text-muted-foreground">
              {t('terms.s4.4.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s5.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s5.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s5.f1')}</li>
              <li>{t('terms.s5.f2')}</li>
              <li>{t('terms.s5.f3')}</li>
              <li>{t('terms.s5.f4')}</li>
              <li>{t('terms.s5.f5')}</li>
              <li>{t('terms.s5.f6')}</li>
              <li>{t('terms.s5.f7')}</li>
              <li>{t('terms.s5.f8')}</li>
              <li>{t('terms.s5.f9')}</li>
              <li>{t('terms.s5.f10')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s6.title')}</h2>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s6.1.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s6.2.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.3.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('terms.s6.3.body')}
            </p>

            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.4.title')}</h3>
            <p className="text-muted-foreground">
              {t('terms.s6.4.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s7.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s7.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('terms.s7.attorneys')}</strong></li>
              <li><strong>{t('terms.s7.therapists')}</strong></li>
              <li><strong>{t('terms.s7.socialWorkers')}</strong></li>
              <li><strong>{t('terms.s7.healthcare')}</strong></li>
              <li><strong>{t('terms.s7.financial')}</strong></li>
              <li><strong>{t('terms.s7.allProfessions')}</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s8.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s8.f1')}</li>
              <li>{t('terms.s8.f2')}</li>
              <li>{t('terms.s8.f3')}</li>
              <li>{t('terms.s8.f4')}</li>
              <li>{t('terms.s8.f5')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s9.intro')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>{t('terms.s9.aiAnalysis')}</strong></li>
              <li><strong>{t('terms.s9.noHumanReview')}</strong></li>
              <li><strong>{t('terms.s9.retention')}</strong></li>
              <li><strong>{t('terms.s9.accessControl')}</strong></li>
              <li><strong>{t('terms.s9.deletionRights')}</strong></li>
            </ul>
            <p className="text-muted-foreground">
              <strong>{t('terms.s9.responsibility')}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s10.p1')}
            </p>
            <p className="text-muted-foreground">
              {t('terms.s10.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s11.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s11.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s12.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s12.p1')}
            </p>
            <p className="text-muted-foreground">
              {t('terms.s12.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s13.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s13.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s14.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s14.p1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('terms.s14.p2')}
            </p>
            <p className="text-muted-foreground">
              {t('terms.s14.p3')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s15.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s15.body')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s16.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terms.s16.p1')}
            </p>
            <p className="text-muted-foreground">
              {t('terms.s16.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s17.title')}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('terms.s17.entireAgreement')}</strong></li>
              <li><strong>{t('terms.s17.severability')}</strong></li>
              <li><strong>{t('terms.s17.waiver')}</strong></li>
              <li><strong>{t('terms.s17.assignment')}</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s18.title')}</h2>
            <p className="text-muted-foreground">
              {t('terms.s18.body')}
            </p>
            <p className="text-muted-foreground mt-2">
              {t('terms.s18.email')}
            </p>
            <p className="text-muted-foreground mt-2 whitespace-pre-line">
              {t('terms.s18.address')}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
