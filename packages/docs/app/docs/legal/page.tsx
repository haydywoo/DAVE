import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms & EULA' };

export default function LegalPage() {
  const updated = 'April 15, 2026';

  return (
    <div className="max-w-2xl">
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Terms &amp; EULA</h1>
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
        <h2 className="font-semibold text-foreground mb-3">5. Third-Party Dependencies</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          DAVE builds on third-party open-source libraries including Radix UI, Tailwind CSS, and Recharts.
          Each is subject to its own licence. We are not responsible for issues, vulnerabilities, or breaking
          changes introduced by upstream dependencies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">6. No Support Obligation</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          DAVE is an independent open-source project. There is no obligation to provide support, maintenance,
          updates, or bug fixes. Issues and pull requests are welcome on GitHub but may not be actioned.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-foreground mb-3">7. Changes to These Terms</h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          These terms may be updated at any time without notice. Continued use of DAVE constitutes acceptance
          of the current terms.
        </p>
      </section>

      <div className="mt-10 rounded-[4px] border border-border bg-surface p-5">
        <p className="text-xs text-fg-secondary leading-relaxed">
          <strong className="text-foreground">TL;DR —</strong> DAVE is free and open source under the MIT licence.
          Use it however you like. We're not liable for anything that goes wrong. No warranties, no guarantees, no support obligation.
          Build something great with it.
        </p>
      </div>
    </div>
  );
}
