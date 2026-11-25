const missionSteps = [
    "Choose a contract and learn what is at stake.",
    "Prepare your crew, gear, and approach.",
    "Face the hazards, make decisions, and resolve the mission.",
    "Recover, regroup, and discover what changes next.",
];

export default function RulebookPage() {
    return (
        <main className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-dark">
                Player guide
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Raid Wings Rulebook
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/75">
                A field guide to creating a raider, taking on dangerous contracts, and telling
                stories together above the clouds.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-sky bg-bg-accent p-5">
                <p className="font-semibold">Mockup chapter</p>
                <p className="mt-1 text-sm leading-6 text-ink/75">
                    This page demonstrates the rulebook layout. Replace this sample copy with
                    the finalized rules as they are ready.
                </p>
            </div>

            <section id="overview" className="scroll-mt-8 border-t border-ink/10 py-8">
                <h2 className="font-serif text-2xl font-bold">Overview</h2>
                <p className="mt-4 leading-7 text-ink/80">
                    Raid Wings is a tabletop role-playing game about a crew of daring raiders.
                    Players describe their plans, work together when the stakes rise, and let
                    the rules help shape the outcome.
                </p>
            </section>

            <section id="mission-loop" className="scroll-mt-8 border-t border-ink/10 py-8">
                <h2 className="font-serif text-2xl font-bold">The mission loop</h2>
                <p className="mt-4 leading-7 text-ink/80">
                    A session moves from a clear objective into a series of choices and
                    complications, then returns to the crew to see what their actions changed.
                </p>
                <ol className="mt-5 space-y-3">
                    {missionSteps.map((step, index) => (
                        <li key={step} className="flex gap-4 rounded-lg bg-bg-accent p-4">
                            <span className="font-bold text-sky-dark">{index + 1}</span>
                            <span className="leading-6">{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="tests" className="scroll-mt-8 border-t border-ink/10 py-8">
                <h2 className="font-serif text-2xl font-bold">Making a test</h2>
                <p className="mt-4 leading-7 text-ink/80">
                    When an action is uncertain and failure would matter, describe what your
                    raider is trying to do. The Guide sets the stakes, then the table uses the
                    game&apos;s test rules to find out what happens.
                </p>
                <div className="mt-5 rounded-lg border border-ink/10 p-5">
                    <h3 className="font-bold">At the table</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/75">
                        Say what you want to accomplish, explain how you do it, and make the
                        relevant test only when the outcome is uncertain.
                    </p>
                </div>
            </section>

            <section id="combat" className="scroll-mt-8 border-t border-ink/10 py-8">
                <h2 className="font-serif text-2xl font-bold">Combat</h2>
                <p className="mt-4 leading-7 text-ink/80">
                    Conflict is a fast-moving exchange of intent and consequence. Make the
                    environment part of the scene, coordinate with your crew, and keep the
                    objective in view instead of treating every encounter as a stand-up fight.
                </p>
            </section>

            <section id="conditions" className="scroll-mt-8 border-t border-ink/10 py-8">
                <h2 className="font-serif text-2xl font-bold">Conditions</h2>
                <p className="mt-4 leading-7 text-ink/80">
                    Conditions are concise reminders of an ongoing effect. Each entry should
                    explain when it applies and what clears it, so the table can resolve it
                    without interrupting the action.
                </p>
            </section>
        </main>
    );
}