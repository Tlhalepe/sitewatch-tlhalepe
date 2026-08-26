const readings = [
  {
    metric: "Temperature",
    value: "24.6 °C",
    time: "10:42",
  },
  {
    metric: "Battery",
    value: "87%",
    time: "10:42",
  },
  {
    metric: "Signal",
    value: "94%",
    time: "10:42",
  },
  {
    metric: "Temperature",
    value: "24.4 °C",
    time: "10:37",
  },
  {
    metric: "Battery",
    value: "88%",
    time: "10:37",
  },
  {
    metric: "Signal",
    value: "93%",
    time: "10:37",
  },
];

export default async function SitePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const siteName = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="font-mono text-xl font-bold tracking-tight text-[var(--foreground)]"
          >
            SITE<span className="text-[var(--accent)]">WATCH</span>
          </a>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/"
              className="text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              Alerts
            </a>

            <a
              href="#"
              className="text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              Settings
            </a>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              A
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Back */}
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[var(--muted)] hover:text-[var(--accent-strong)]"
        >
          ← Back to dashboard
        </a>

        {/* Site Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
              Site details
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              {siteName}
            </h1>

            <p className="mt-2 text-[var(--muted)]">
              Gauteng · Last updated 2 minutes ago
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--good-tint)] px-4 py-2 text-sm font-semibold text-[var(--good)]">
            <span className="h-2 w-2 rounded-full bg-current" />
            Online
          </span>
        </div>

        {/* Current Readings */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider">
              Current readings
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Latest readings reported by this site.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Temperature
              </p>

              <p className="mt-3 text-3xl font-bold">24.6 °C</p>

              <p className="mt-2 text-sm text-[var(--good)]">
                Within normal range
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Battery
              </p>

              <p className="mt-3 text-3xl font-bold">87%</p>

              <p className="mt-2 text-sm text-[var(--good)]">
                Healthy
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Signal
              </p>

              <p className="mt-3 text-3xl font-bold">94%</p>

              <p className="mt-2 text-sm text-[var(--good)]">
                Strong connection
              </p>
            </div>
          </div>
        </section>

        {/* Readings Table */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider">
              Recent readings
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Latest readings recorded for this site.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Metric
                    </th>

                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Value
                    </th>

                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Time
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {readings.map((reading, index) => (
                    <tr
                      key={index}
                      className="border-b border-[var(--border)] last:border-0"
                    >
                      <td className="px-6 py-4 font-medium">
                        {reading.metric}
                      </td>

                      <td className="px-6 py-4 font-mono text-sm">
                        {reading.value}
                      </td>

                      <td className="px-6 py-4 font-mono text-xs text-[var(--muted)]">
                        {reading.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Alert Rules */}
        <section>
          <div className="mb-4">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider">
              Alert rules
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Thresholds configured for this site.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <div className="grid grid-cols-3 border-b border-[var(--border)] bg-[var(--background)] px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Metric
              </span>

              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Threshold
              </span>

              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Status
              </span>
            </div>

            <div className="grid grid-cols-3 px-6 py-5">
              <span className="font-medium">Battery</span>

              <span className="font-mono text-sm">
                Below 20%
              </span>

              <span className="text-sm font-semibold text-[var(--good)]">
                Active
              </span>
            </div>

            <div className="grid grid-cols-3 border-t border-[var(--border)] px-6 py-5">
              <span className="font-medium">Temperature</span>

              <span className="font-mono text-sm">
                Above 40°C
              </span>

              <span className="text-sm font-semibold text-[var(--good)]">
                Active
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}