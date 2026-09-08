import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bonolota IT" },
      {
        name: "description",
        content: "How Bonolota IT collects, uses, and protects information when you use our website and services.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="8 September 2026">
      <section>
        <h2 className="text-base font-semibold text-foreground">Who we are</h2>
        <p className="mt-2">
          Bonolota IT is a product design and engineering studio in Dhaka, Bangladesh. This policy
          explains how we handle information when you visit bonolotait.com or enquire about our
          services.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">What we collect</h2>
        <p className="mt-2">
          If you send the contact form or email us, we receive the details you provide — typically
          your name, email, company, phone number, and project description. Server logs may also
          record technical data such as IP address, browser type, and pages visited, used to keep
          the site reliable and secure.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">How we use it</h2>
        <p className="mt-2">
          We use this information to reply to enquiries, prepare estimates, deliver contracted work,
          and improve the website. We do not sell your personal data. We only share it with tools
          we need to run the studio (for example email) or when the law requires it.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">How long we keep it</h2>
        <p className="mt-2">
          Enquiry records are kept for as long as we need them to follow up or as required for
          accounting and legal duties, then deleted or anonymised.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-foreground">Your choices</h2>
        <p className="mt-2">
          You can ask to see, correct, or delete the personal information we hold about you. Write
          to{" "}
          <a href="mailto:support@bonolotait.com" className="text-primary hover:underline">
            support@bonolotait.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
