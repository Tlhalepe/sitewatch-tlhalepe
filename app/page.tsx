const sites = [
  {
    name: "Riverside-01",
    location: "Gauteng",
    status: "Online",
    updated: "2 min ago",
  },
  {
    name: "North Station",
    location: "Limpopo",
    status: "Online",
    updated: "3 min ago",
  },
  {
    name: "Hilltop-03",
    location: "Free State",
    status: "Warning",
    updated: "1 min ago",
  },
  {
    name: "West Point",
    location: "Western Cape",
    status: "Offline",
    updated: "4 min ago",
  },
];

const statusStyles: Record<string, string> = {
  Online: "bg-[var(--good-tint)] text-[var(--good)]",
  Warning: "bg-[var(--warning-tint)] text-[var(--warning)]",
  Offline: "bg-[var(--danger-tint)] text-[var(--danger)]",
};

export default function Home() {
  const onlineSites = sites.filter((site) => site.status === "Online").length;
  const warningSites = sites.filter(
    (site) => site.status === "Warning"
  ).length;
  const offlineSites = sites.filter(
    (site) => site.status === "Offline"
  ).length;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="font-mono text-xl font-bold tracking-tight text-[var(--foreground)]">
              SITE<span className="text-[var(--accent)]">WATCH</span>
            </h1>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="font-medium text-[var(--accent-strong)]"
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

            <div className="h-8 w-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-white">
              A
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
              Monitoring Dashboard
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Site overview
            </h2>

            <p className="mt-2 text-[var(--muted)]">
              Monitor the current status of your remote sites.
            </p>
          </div>

          <button className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--accent-strong)]">
            + Add site
          </button>
        </div>

        {/* Status Cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Total Sites
            </p>

            <p className="mt-3 text-3xl font-bold">
              {sites.length}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Currently monitored
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Online
            </p>

            <p className="mt-3 text-3xl font-bold text-[var(--good)]">
              {onlineSites}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Operating normally
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Warnings
            </p>

            <p className="mt-3 text-3xl font-bold text-[var(--warning)]">
              {warningSites}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Needs attention
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Offline
            </p>

            <p className="mt-3 text-3xl font-bold text-[var(--danger)]">
              {offlineSites}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Currently unreachable
            </p>
          </div>
        </div>

        {/* Sites */}
        <section className="mb-10">
          <div className="mb-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider">
              Monitored sites
            </h3>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Current status of all registered sites.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px]">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Site
                    </th>

                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Status
                    </th>

                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Last updated
                    </th>

                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {sites.map((site) => (
                    <tr
                      key={site.name}
                      className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--background)]"
                    >
                      <td className="px-6 py-5 font-medium">
                        {site.name}
                      </td>

                      <td className="px-6 py-5 text-sm text-[var(--muted)]">
                        {site.location}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[site.status]}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {site.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 font-mono text-xs text-[var(--muted)]">
                        {site.updated}
                      </td>

                      <td className="px-6 py-5 text-right">
  <a
    href={`/sites/${site.name.toLowerCase().replace(/\s+/g, "-")}`}
    className="font-mono text-xs font-semibold text-[var(--accent-strong)] hover:underline"
  >
    View →
  </a>
</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section>
          <div className="mb-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider">
              Recent alerts
            </h3>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Issues that may require attention.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-start gap-4 p-5">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--warning-tint)] text-[var(--warning)]">
                !
              </div>

              <div>
                <p className="font-semibold">
                  Hilltop-03 battery below threshold
                </p>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Battery level dropped below the configured 20% warning
                  threshold.
                </p>

                <p className="mt-2 font-mono text-xs text-[var(--muted)]">
                  1 minute ago
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}