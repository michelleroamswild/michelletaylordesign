import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  UsersFour,
  Lightbulb,
  MagnifyingGlass,
  Quotes,
  ListChecks,
  Receipt,
  ClockCounterClockwise,
  FileText,
  Sliders,
  Layout,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Expense Management | Michelle Taylor",
  description:
    "Capital One commercial card expense management case study. Automating weeks of manual work for corporate card admins.",
};

export default function ExpenseManagementPage() {
  return (
    <>
      {/* Back Navigation */}
      <div className="bg-cream border-b border-sand/50">
        <div className="container-site py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/logos/capitalonelogo.png"
              alt="Capital One"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="max-w-3xl mb-10">
            <h1 className="heading-xl mb-6">Expense Management</h1>
            <p className="body-lg">
              Automating weeks of manual work for corporate card admins by
              designing a direct route for cardholders to attach expense
              information to transactions.
            </p>
          </div>
          <div className="img-rounded">
            <Image
              src="/images/expense-management/CapitalOneHero.png"
              alt="Capital One Expense Management product screens"
              width={1440}
              height={810}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
                  Overview
                </p>
                <h2 className="heading-lg mb-6">Commercial Card Platform</h2>
                <p className="body-lg mb-6">
                  Capital One&apos;s Commercial Card platform serves corporate
                  card administrators who manage transactions, credit limits, and
                  expenses across their organizations. Admins are responsible for
                  ensuring compliance, tracking spend, and reconciling expenses
                  for every cardholder in their program.
                </p>
                <p className="body-md">
                  The platform spans both mobile and web experiences, giving
                  admins and cardholders tools to manage the full lifecycle of a
                  commercial card transaction.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="heading-md mb-4">My Role</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <UsersFour
                      size={22}
                      weight="duotone"
                      className="text-c1-blue mt-1 shrink-0"
                    />
                    <span className="body-md">
                      Led design across mobile and web product teams
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MagnifyingGlass
                      size={22}
                      weight="duotone"
                      className="text-c1-blue mt-1 shrink-0"
                    />
                    <span className="body-md">
                      Conducted in-person client research and onboarding
                      sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb
                      size={22}
                      weight="duotone"
                      className="text-c1-blue mt-1 shrink-0"
                    />
                    <span className="body-md">
                      Created wireframes, prototypes, and production-ready UI
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              The Problem
            </p>
            <h2 className="heading-lg mb-8">
              Manual Processes That Cost Everyone Time
            </h2>
            <div className="max-w-3xl mb-10">
              <div className="bg-cream rounded-xl p-8 mb-8">
                <Quotes
                  size={32}
                  weight="fill"
                  className="text-c1-blue mb-4"
                />
                <blockquote className="text-xl font-medium text-charcoal leading-relaxed mb-4">
                  &ldquo;It&apos;s a bit like being everyone&apos;s mom.&rdquo;
                </blockquote>
                <p className="body-md">
                  &mdash; Corporate Card Administrator, Pilot Program
                  Participant
                </p>
              </div>
              <p className="body-lg mb-6">
                Corporate card admins were burdened by manual, time-consuming
                processes to collect receipts, assign general ledger codes, and
                reconcile expenses. Many relied on expensive third-party
                integrations or, worse, manual spreadsheets and email chains to
                get the job done.
              </p>
              <p className="body-lg">
                Admins constantly struggled to get timely receipts and GL codes
                from cardholders, chasing down individuals one by one and
                spending weeks every month on tasks that should have been
                automated.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="metric-card">
                <p className="metric-value text-c1-blue">Weeks</p>
                <p className="metric-label">
                  of admin time spent on manual reconciliation each month
                </p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-c1-blue">$$$$</p>
                <p className="metric-label">
                  spent on third-party expense integrations
                </p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-c1-blue">Low</p>
                <p className="metric-label">
                  tax compliance due to missing receipts and codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              Research
            </p>
            <h2 className="heading-lg mb-6">Pilot Program</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="body-lg mb-6">
                  We launched a pilot program with{" "}
                  <strong className="text-charcoal">
                    5 middle-market clients
                  </strong>
                  , each managing between 20 and 50 cardholders. This gave us a
                  focused yet diverse set of business contexts to understand how
                  expense management varied across organizations.
                </p>
                <p className="body-lg mb-6">
                  The program included in-person onboarding sessions and
                  research visits, where we sat with admins and cardholders to
                  observe their actual workflows, pain points, and
                  workarounds.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="metric-card">
                    <p className="metric-value text-c1-blue">5</p>
                    <p className="metric-label">pilot clients</p>
                  </div>
                  <div className="metric-card">
                    <p className="metric-value text-c1-blue">20-50</p>
                    <p className="metric-label">cardholders per client</p>
                  </div>
                </div>
              </div>
              <div className="img-rounded">
                <Image
                  src="/images/expense-management/research-visit.jpg"
                  alt="In-person research visit with pilot program client"
                  width={720}
                  height={480}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              Insights
            </p>
            <h2 className="heading-lg mb-4">Research Findings</h2>
            <p className="body-lg max-w-3xl mb-10">
              Through our pilot research sessions, four core themes emerged that
              shaped the product direction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <ListChecks
                      size={28}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  </div>
                  <h3 className="heading-md">GL and Expense Codes</h3>
                </div>
                <p className="body-md">
                  Every client had a unique, configurable coding system for
                  categorizing expenses. Some used general ledger codes, others
                  used custom expense categories, and many used both. The
                  platform needed to support flexible, client-defined coding
                  structures.
                </p>
              </div>

              <div className="bg-cream rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Receipt
                      size={28}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  </div>
                  <h3 className="heading-md">Expense Details</h3>
                </div>
                <p className="body-md">
                  Admins needed quick access to the essential details of every
                  transaction: the receipt image, amount, vendor name, and
                  relevant dates. Speed of review was critical, especially for
                  programs with high transaction volume.
                </p>
              </div>

              <div className="bg-cream rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <ClockCounterClockwise
                      size={28}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  </div>
                  <h3 className="heading-md">Pending Transaction Data</h3>
                </div>
                <p className="body-md">
                  Matching pending transactions to posted transactions was a
                  persistent challenge. Admins needed visibility into pending
                  data to start the expense process early, rather than waiting
                  days for transactions to fully post.
                </p>
              </div>

              <div className="bg-cream rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <FileText
                      size={28}
                      weight="duotone"
                      className="text-c1-blue"
                    />
                  </div>
                  <h3 className="heading-md">Expense Reports</h3>
                </div>
                <p className="body-md">
                  The format of expense reports mattered less than the
                  reliability and completeness of the data within them. Admins
                  cared most about consistent, accurate delivery of expense data
                  to their accounting systems, regardless of how it was
                  presented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution #1 - Custom Fields */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              Solution #1
            </p>
            <h2 className="heading-lg mb-4">Configurable Custom Fields</h2>
            <p className="body-lg max-w-3xl mb-10">
              We designed a configurable field system that allowed admins to
              define up to 4 custom fields per transaction. Each field could be
              set as a{" "}
              <span className="highlight">select list</span> with predefined
              options or a{" "}
              <span className="highlight">free-form text input</span>,
              giving organizations the flexibility to match their existing
              expense coding structures.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white rounded-lg">
                <Sliders
                  size={24}
                  weight="duotone"
                  className="text-c1-blue"
                />
              </div>
              <h3 className="heading-md">How It Works</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-2">
                  Step 1
                </p>
                <p className="body-md">
                  Admins create custom fields and define whether each accepts
                  free-form text or a curated list of values.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-2">
                  Step 2
                </p>
                <p className="body-md">
                  For select lists, admins configure expense or GL codes that
                  cardholders can choose from when tagging transactions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-2">
                  Step 3
                </p>
                <p className="body-md">
                  Cardholders see only the fields relevant to their
                  organization, reducing confusion and ensuring data consistency.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="img-rounded">
                <Image
                  src="/images/expense-management/CreateField.png"
                  alt="Create custom field interface"
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="img-rounded">
                  <Image
                    src="/images/expense-management/CreateCustomField-TextInputType.png"
                    alt="Custom field text input type configuration"
                    width={720}
                    height={480}
                    className="w-full"
                  />
                </div>
                <div className="img-rounded">
                  <Image
                    src="/images/expense-management/ExpenseCategory-ManageCodes.png"
                    alt="Expense category and GL code management"
                    width={720}
                    height={480}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution #2 - Transaction Details Redesign */}
      <section className="section-spacing bg-white">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              Solution #2
            </p>
            <h2 className="heading-lg mb-4">Transaction Details Redesign</h2>
            <p className="body-lg max-w-3xl mb-10">
              The transaction detail view was completely redesigned to surface
              the information admins and cardholders needed most. The new layout
              prioritizes receipt display, vendor and amount comparison between
              pending and posted states, and a flexible structure that adapts to
              different transaction types.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cream rounded-lg">
                <Layout
                  size={24}
                  weight="duotone"
                  className="text-c1-blue"
                />
              </div>
              <h3 className="heading-md">Key Improvements</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="metric-card">
                <Receipt
                  size={32}
                  weight="duotone"
                  className="text-c1-blue mx-auto mb-2"
                />
                <p className="font-semibold text-charcoal">Receipt Display</p>
                <p className="metric-label">
                  Prominent receipt image with quick-attach functionality
                </p>
              </div>
              <div className="metric-card">
                <ClockCounterClockwise
                  size={32}
                  weight="duotone"
                  className="text-c1-blue mx-auto mb-2"
                />
                <p className="font-semibold text-charcoal">Data Comparison</p>
                <p className="metric-label">
                  Side-by-side vendor, amount, and date for pending vs. posted
                </p>
              </div>
              <div className="metric-card">
                <Sliders
                  size={32}
                  weight="duotone"
                  className="text-c1-blue mx-auto mb-2"
                />
                <p className="font-semibold text-charcoal">Flexible Layout</p>
                <p className="metric-label">
                  Adapts to transaction type and available data
                </p>
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                Before
              </p>
              <div className="img-rounded border border-sand">
                <Image
                  src="/images/expense-management/OldTransactionDetail.png"
                  alt="Previous transaction detail design"
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                After
              </p>
              <div className="img-rounded">
                <Image
                  src="/images/expense-management/ExpenseDetail.png"
                  alt="Redesigned expense detail view"
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                  Pending Transaction State
                </p>
                <div className="img-rounded">
                  <Image
                    src="/images/expense-management/TransactionHilton-PostedNoData.png"
                    alt="Transaction detail showing pending state with limited data"
                    width={720}
                    height={480}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-4">
                  Receipt Attachment
                </p>
                <div className="img-rounded">
                  <Image
                    src="/images/expense-management/AddReceipt.png"
                    alt="Add receipt to transaction flow"
                    width={720}
                    height={480}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Closing */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="case-study-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-c1-blue mb-3">
              Outcome
            </p>
            <h2 className="heading-lg mb-6">Impact</h2>
            <p className="body-lg max-w-3xl mb-10">
              The expense management features launched with all 5 pilot clients,
              giving admins and cardholders a direct, in-platform path to manage
              expense data without relying on third-party tools or manual
              processes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="metric-card">
                <p className="metric-value text-c1-blue">Weeks</p>
                <p className="metric-label">
                  cut from monthly admin reconciliation work
                </p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-c1-blue">Increased</p>
                <p className="metric-label">
                  tax compliance through receipt and code capture
                </p>
              </div>
              <div className="metric-card">
                <p className="metric-value text-c1-blue">5 Clients</p>
                <p className="metric-label">
                  launched in pilot program with positive feedback
                </p>
              </div>
            </div>
            <div className="img-rounded">
              <Image
                src="/images/expense-management/Home.png"
                alt="Expense management home screen"
                width={1440}
                height={810}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="py-12 bg-white">
        <div className="container-site text-center">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={18} weight="bold" />
            Back to All Work
          </Link>
        </div>
      </section>
    </>
  );
}
