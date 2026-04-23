import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms & EULA' };

export default function LegalPage() {
  const updated = 'April 20, 2026';

  return (
    <div className="max-w-2xl">
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Terms &amp; EULA</h1>
      <p className="text-sm text-fg-secondary mb-10">Last updated {updated}</p>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">1. Use at Your Own Risk</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          DAVE is provided <strong className="text-foreground">"as is"</strong> and <strong className="text-foreground">"as available"</strong> without warranty of any kind, express or implied.
          This includes, but is not limited to, warranties of merchantability, fitness for a particular purpose,
          and non-infringement. You assume full responsibility for your use of DAVE and any consequences thereof.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">2. MIT License</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          DAVE is released under the <strong className="text-foreground">MIT License</strong>. You are free to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the software, subject to the following condition:
          the above copyright notice and this permission notice shall be included in all copies or substantial
          portions of the software.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">3. No Liability</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          In no event shall the authors or copyright holders of DAVE be liable for any claim, damages, or other
          liability — whether in an action of contract, tort, or otherwise — arising from, out of, or in
          connection with the software or the use or other dealings in the software. This includes, without
          limitation, any direct, indirect, incidental, special, exemplary, or consequential damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">4. No Accessibility Guarantee</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          While DAVE is built with accessibility in mind and targets WCAG 2.1 AA compliance, we make no guarantee
          that every component meets all accessibility requirements in every context. It is your responsibility to
          test and verify accessibility in your own implementation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">5. Third-Party Dependencies &amp; Ownership</h2>
        <p className="text-sm text-fg-secondary leading-relaxed mb-4">
          DAVE is built on top of open-source libraries, each owned and maintained by their respective authors.
          DAVE claims no ownership over these works. Each is subject to its own licence — links are provided below.
          We are not responsible for issues, vulnerabilities, or breaking changes introduced by upstream dependencies.
        </p>
        <div className="space-y-3">
          {[
            { name: 'React', owner: 'Meta Platforms, Inc.', licence: 'MIT', url: 'https://github.com/facebook/react/blob/main/LICENSE' },
            { name: 'Next.js', owner: 'Vercel, Inc.', licence: 'MIT', url: 'https://github.com/vercel/next.js/blob/canary/license.md' },
            { name: 'Radix UI', owner: 'WorkOS, Inc.', licence: 'MIT', url: 'https://github.com/radix-ui/primitives/blob/main/LICENSE' },
            { name: 'Tailwind CSS', owner: 'Tailwind Labs, Inc.', licence: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE' },
            { name: 'Recharts', owner: 'Recharts Group', licence: 'MIT', url: 'https://github.com/recharts/recharts/blob/master/LICENSE' },
            { name: 'Radix Icons', owner: 'WorkOS, Inc.', licence: 'MIT', url: 'https://github.com/radix-ui/icons/blob/master/LICENSE' },
            { name: 'TypeScript', owner: 'Microsoft Corporation', licence: 'Apache 2.0', url: 'https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt' },
            { name: 'Vite', owner: 'Evan You and Vite contributors', licence: 'MIT', url: 'https://github.com/vitejs/vite/blob/main/LICENSE' },
            { name: 'date-fns', owner: 'date-fns contributors', licence: 'MIT', url: 'https://github.com/date-fns/date-fns/blob/main/LICENSE.md' },
            { name: 'Storybook', owner: 'Chromatic (Dominic Nguyen, Tom Coleman, Zoltan Olah)', licence: 'MIT', url: 'https://github.com/storybookjs/storybook/blob/next/LICENSE' },
          ].map(({ name, owner, licence, url }) => (
            <div key={name} className="flex items-baseline justify-between gap-4 text-sm border-b border-border pb-3 last:border-0 last:pb-0">
              <div>
                <span className="font-medium text-foreground">{name}</span>
                <span className="text-fg-secondary ml-2">— {owner}</span>
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs text-accent hover:underline">
                {licence}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">6. No Support Obligation</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          DAVE is an independent open-source project. There is no obligation to provide support, maintenance,
          updates, or bug fixes. Issues and pull requests are welcome on GitHub but may not be actioned.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">7. Feedback &amp; Privacy</h2>
        <p className="text-sm text-fg-secondary leading-relaxed mb-4">
          When you submit feedback via the in-page widget, we record your rating (thumbs up or down), any optional
          comment you provide, and the URL of the page you submitted from. Submissions are processed by{' '}
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Formspree</a>{' '}
          — a third-party form backend — and forwarded to the maintainer by email. Formspree's handling of your data
          is governed by their{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">privacy policy</a>.
        </p>
        <p className="text-sm text-fg-secondary leading-relaxed">
          The feedback widget sets no cookies and stores no identifiers on your device. You are not required to
          submit feedback; simply don't use the widget if you'd prefer not to share this data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">8. Analytics</h2>
        <p className="text-sm text-fg-secondary leading-relaxed mb-4">
          This site uses{' '}
          <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Clarity</a>{' '}
          to understand how people use the docs. Clarity provides aggregate metrics, heatmaps, and anonymised
          session replay. To do this, it sets cookies on your browser and collects your IP address, device and
          browser information, and your interactions with the page (clicks, scrolls, and similar). Input field
          values are masked by default and are not recorded.
        </p>
        <p className="text-sm text-fg-secondary leading-relaxed">
          Data is processed by Microsoft and governed by the{' '}
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Privacy Statement</a>.
          Clarity only loads after you accept the consent prompt shown on your first visit; your choice is remembered
          in your browser's local storage. Clarity also honours the <strong className="text-foreground">Do Not Track</strong>{' '}
          browser signal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">9. Changes to These Terms</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          These terms may be updated at any time without notice. Continued use of DAVE constitutes acceptance
          of the current terms.
        </p>
      </section>

      <div className="mt-10 rounded-[6px] border border-border bg-surface p-5">
        <p className="text-xs text-fg-secondary leading-relaxed">
          <strong className="text-foreground">TL;DR —</strong> DAVE is free and open source under the MIT licence.
          Use it however you like. We're not liable for anything that goes wrong. No warranties, no guarantees, no support obligation.
          Build something great with it.
        </p>
      </div>
    </div>
  );
}
