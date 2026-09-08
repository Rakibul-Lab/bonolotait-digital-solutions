import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Bonolota IT" },
      {
        name: "description",
        content: "Terms for using the Bonolota IT website and engaging our design and engineering services.",
      },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="8 September 2026">
      <section>
        <h2 className="text-base font-semibold text-foreground">Using this website</h2>
        <p className="mt-2">
          This site is provided by Bonolota IT to describe our studio and to receive project
          enquiries. Content is for general information. It is not a binding offer until we send a
          written proposal that you accept.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">Enquiries and projects</h2>
        <p className="mt-2">
          Sending the contact form does not create a contract. Paid work is governed by a separate
          agreement covering scope, fees, timeline, and intellectual property. Until that agreement
          is signed, either side may decline to proceed.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">Intellectual property</h2>
        <p className="mt-2">
          The Bonolota IT name, logo, and site design belong to us. You may not copy or reuse them
          without permission. Work we deliver under a project contract is handled as that contract
          states.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">Limitation of liability</h2>
        <p className="mt-2">
          The website is provided as-is. We are not liable for losses that arise from using or
          relying on the public site, except where the law does not allow that limit. Project
          liability is defined in the signed agreement for that work.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">Contact</h2>
        <p className="mt-2">
          Questions about these terms:{" "}
          <a href="mailto:support@bonolotait.com" className="text-primary hover:underline">
            support@bonolotait.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
