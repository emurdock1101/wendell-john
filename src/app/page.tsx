"use client";

import { useState, useEffect } from "react";

/* ── Bat silhouettes ── */
function Bats() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bat"
          style={{
            top: `${8 + i * 12}%`,
            animationDelay: `${i * 5}s`,
            animationDuration: `${18 + i * 4}s`,
          }}
        >
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
            <path
              d="M18 8 C14 2, 6 0, 0 4 C4 6, 6 4, 10 8 C8 10, 6 8, 4 10 C8 10, 12 12, 18 10 C24 12, 28 10, 32 10 C30 8, 28 10, 26 8 C30 4, 32 6, 36 4 C30 0, 22 2, 18 8Z"
              fill="#1a1a1a"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── Blood drips from top ── */
function BloodDrips() {
  const [drips, setDrips] = useState<{ id: number; left: number; height: number }[]>([]);
  useEffect(() => {
    setDrips(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        height: 30 + Math.random() * 60,
      }))
    );
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
      {drips.map((d) => (
        <div
          key={d.id}
          className="absolute top-0 w-[3px] rounded-b-full bg-gradient-to-b from-red-900 to-red-800"
          style={{ left: `${d.left}%`, height: `${d.height}px`, opacity: 0.4 }}
        />
      ))}
    </div>
  );
}

/* ── Fog layer ── */
function Fog() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-10 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute bottom-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-gray-800/15 to-transparent animate-fog"
          style={{ animationDelay: `${i * 8}s`, animationDuration: `${20 + i * 5}s` }}
        />
      ))}
    </div>
  );
}

/* ── Smoke wisps ── */
function Smoke() {
  const [wisps, setWisps] = useState<{ id: number; left: number; bottom: number; delay: number; size: number }[]>([]);
  useEffect(() => {
    setWisps(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        bottom: Math.random() * 30,
        delay: Math.random() * -8,
        size: 60 + Math.random() * 100,
      }))
    );
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {wisps.map((w) => (
        <div
          key={w.id}
          className="absolute rounded-full bg-gray-500 blur-3xl animate-smoke"
          style={{
            left: `${w.left}%`,
            bottom: `${w.bottom}%`,
            width: `${w.size}px`,
            height: `${w.size}px`,
            animationDelay: `${w.delay}s`,
            animationDuration: `${7 + Math.random() * 6}s`,
          }}
        />
      ))}
      {/* Large drifting cloud layers */}
      {[0, 1, 2].map((i) => (
        <div
          key={`cloud-${i}`}
          className="absolute rounded-full bg-gray-700 blur-[80px] animate-cloud-drift"
          style={{
            bottom: `${5 + i * 8}%`,
            left: `${10 + i * 25}%`,
            width: `${300 + i * 100}px`,
            height: `${80 + i * 30}px`,
            animationDelay: `${i * 10}s`,
            animationDuration: `${25 + i * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Floating particles ── */
function Particles() {
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * -12,
        size: 2 + Math.random() * 3,
      }))
    );
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-red-900/30 animate-float-up"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Ornate divider ── */
function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-red-900/50" />
      <span className="text-red-900/60 text-2xl">⚰️</span>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-red-900/50" />
    </div>
  );
}

/* ── Speed counter ── */
function SpeedStat() {
  const [speed, setSpeed] = useState("0.0");
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((Math.random() * 2 + 21).toFixed(1));
    }, 2000);
    setSpeed("22.4");
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="text-red-600 font-gothic tabular-nums">{speed}</span>
  );
}

/* ── Sauce opinions ── */
const SAUCES = [
  { name: "Sriracha", verdict: "On eggs. On rice. On ice cream? Maybe.", rating: 5 },
  { name: "Ranch", verdict: "The universal solvent.", rating: 5 },
  { name: "Hot Honey", verdict: "Changed his life. Won't shut up about it.", rating: 5 },
  { name: "Frank's RedHot", verdict: "Puts that on everything. Literally.", rating: 4 },
  { name: "Soy Sauce", verdict: "Even on things that don't need it.", rating: 4 },
  { name: "BBQ (any variety)", verdict: "A vehicle for the sauce is all food is.", rating: 5 },
  { name: "Ketchup", verdict: "On steak? He's done it. No shame.", rating: 3 },
  { name: "Mystery Sauce (gas station)", verdict: "Refuses to read the label.", rating: 4 },
];

/* ── Snack log ── */
const SNACKS = [
  { name: "Hot Cheetos", time: "The Witching Hour", rating: "🦇🦇🦇🦇🦇" },
  { name: "Gas Station Sushi", time: "3:00 AM", rating: "🦇🦇🦇" },
  { name: "Trail Mix (picked out the M&Ms)", time: "Dusk", rating: "🦇🦇🦇🦇" },
  { name: "Entire Sleeve of Oreos", time: "Midnight", rating: "🦇🦇🦇🦇🦇" },
  { name: "Questionable Leftovers (sauced)", time: "The Hour of the Wolf", rating: "🦇🦇" },
  { name: "String Cheese (contemplatively)", time: "2:47 AM", rating: "🦇🦇🦇🦇" },
  { name: "Handful of Shredded Cheese", time: "Standing Before the Fridge", rating: "🦇🦇🦇🦇🦇" },
  { name: "Uncrustable (frozen, didn't wait)", time: "Twilight", rating: "🦇🦇🦇" },
];

/* ── Walk log ── */
const WALKS = [
  { route: "The Midnight Circuit", distance: "7.3 mi", note: "Caught a Gengar near the cemetery" },
  { route: "The Fog Path", distance: "5.1 mi", note: "Three PokéStops along the river" },
  { route: "The Eternal Loop", distance: "11.2 mi", note: "Forgot where he parked" },
  { route: "The Shadow Trail", distance: "8.8 mi", note: "Hatched 4 eggs, scared a jogger" },
  { route: "The Long Dark", distance: "13.6 mi", note: "Phone died at mile 9. Kept walking." },
  { route: "Around the Block (got carried away)", distance: "6.4 mi", note: "Raided 3 gyms" },
];

/* ── Pokémon counter ── */
function PokemonCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(Math.floor(Math.random() * 800) + 3200);
    const interval = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.6 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-5xl font-gothic font-black text-red-700 tabular-nums animate-heartbeat">
      {count.toLocaleString()}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════ */

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Bats />
      <BloodDrips />
      <Fog />
      <Smoke />
      <Particles />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,0,0,0.15)_0%,rgba(10,10,10,1)_70%)]" />
        <div className="relative z-20">
          <div className="text-red-500 text-sm font-serif italic tracking-[0.3em] uppercase mb-6">
            From the shadows, he emerges
          </div>
          <h1 className="font-gothic text-5xl md:text-8xl font-black text-gray-100 tracking-wider animate-flicker">
            John Wendell
            <br />
            <span className="text-red-800">Murdock</span>
          </h1>
          <p className="mt-6 text-gray-400 font-serif text-xl max-w-xl mx-auto leading-relaxed italic">
            Software engineer. Speed demon. Sauce connoisseur.
            <br />
            Latin dancer. Pokémon trainer. Pro-warming advocate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            {["💻 Engineer", "⚡ Fast", "🫙 Sauce", "💃 Dancer", "🍿 Snacks", "🚶 Walks", "⚫ Pokémon", "🌡️ Pro-Warming", "🎮 Gamer"].map((tag) => (
              <span key={tag} className="bg-red-950/40 border border-red-900/30 text-gray-400 px-4 py-1.5 rounded-full font-serif">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="/gallery"
            className="mt-8 inline-block bg-red-900/30 hover:bg-red-900/50 border border-red-900/40 text-gray-300 font-serif px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            📸 Enter the Gallery
          </a>

          <div className="mt-8 animate-bounce text-gray-600 text-2xl">↓</div>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "⚡", label: "Top Speed", value: <><SpeedStat /> <span className="text-gray-600 text-sm">mph</span></>, sub: "(on foot, allegedly)" },
            { icon: "🫙", label: "Sauces Applied Today", value: <span className="text-red-600 font-gothic">{mounted ? Math.floor(Math.random() * 8) + 5 : "—"}</span>, sub: "and counting" },
            { icon: "⚫", label: "Pokémon Caught", value: <PokemonCounter />, sub: "in the eternal darkness" },
            { icon: "🚶", label: "Lifetime Miles", value: <span className="text-red-600 font-gothic">{mounted ? (Math.floor(Math.random() * 3000) + 5000).toLocaleString() : "—"}</span>, sub: "mostly at night" },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-950 border border-gray-800/50 rounded-xl p-6 text-center animate-pulse-red" style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-gray-600 text-xs mt-1 font-serif italic">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <OrnamentDivider />

      {/* ── ABOUT ── */}
      <section className="relative z-20 py-16 px-4">
        <h2 className="font-gothic text-3xl md:text-5xl text-center text-gray-200 mb-4">
          Who <span className="text-red-800">Is</span> He
        </h2>
        <p className="text-center text-gray-500 font-serif italic mb-12">
          A dossier, compiled under cover of darkness
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Software Engineer */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Architect
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              By day — or, more accurately, by whatever hours he deems
              appropriate — John is a <span className="text-red-400">very smart software engineer</span>.
              The kind who sees the matrix in the code. The kind who refactors
              with surgical precision at 2 AM, fueled by Hot Cheetos and an
              inexplicable amount of sauce. His code is clean. His commit
              messages are not.
            </p>
          </div>

          {/* Speed */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Velocity
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John is <span className="text-red-400">fast</span>. Unsettlingly
              fast. You&rsquo;ll be walking together, you&rsquo;ll look away
              for one second, and he&rsquo;s already three blocks ahead
              catching a Snorlax. Whether on foot, on keyboard, or consuming
              an entire meal — the man operates at a velocity that defies
              casual observation.
            </p>
          </div>

          {/* Sauce */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🫙</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Saucier
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              To John, no food is complete without sauce. No surface is safe.
              A plain piece of chicken? <span className="text-red-400">Unacceptable.</span>{" "}
              Fries without a dipping companion? <span className="text-red-400">Barbaric.</span>{" "}
              He has been known to carry hot sauce in his pocket. He does not
              ask &ldquo;would you like sauce?&rdquo; — he asks
              &ldquo;which sauce?&rdquo; The answer is always &ldquo;more.&rdquo;
            </p>
          </div>

          {/* Snacking */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🍿</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Hunger
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John does not simply snack. He <em>communes</em> with sustenance.
              At any hour — especially the unholy ones — he can be found
              before an open refrigerator, bathed in its pale light,
              reaching for shredded cheese with the gravity of a man
              performing a sacred ritual. The snacking never stops.
              It merely pauses between meals.
            </p>
          </div>

          {/* Walking */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🚶‍♂️</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Pilgrim
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              Others take walks. John undertakes <em>pilgrimages</em>.
              Long, long walks that stretch into the darkness.
              Miles dissolve beneath his feet like morning mist. He does not
              walk to arrive — he walks because the night is long,
              the road is longer, and there&rsquo;s probably a PokéStop
              at the end of it.
            </p>
          </div>

          {/* Pokémon Go */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">😈</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Hunt
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              While lesser trainers sleep, John stalks the digital wilds.
              Gyms tremble at his approach. Raid bosses know his name.
              His Pokédex is a testament to obsession — every entry
              earned on foot, in darkness, at terrifying speed,
              with sauce on his fingers.
            </p>
          </div>

          {/* Dancing */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">💃</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Dancer
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John is a <span className="text-red-400">very talented</span> Latin
              ballroom dancer. Zouk. Salsa. Bachata. Tango. He glides across the
              floor with the same unsettling speed he applies to everything else.
              One moment he&rsquo;s standing still — the next he&rsquo;s mid-dip,
              partner airborne, the room silent with awe. All while bald.
              But you can&rsquo;t really tell.
            </p>
          </div>

          {/* Global Warming */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🌡️</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Hot Take
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John believes in global warming. He is also{" "}
              <span className="text-red-400">in favor of it</span>.
              His reasoning is his own. He does not elaborate. When pressed,
              he simply says &ldquo;I like warm&rdquo; and applies more hot
              sauce to whatever he&rsquo;s eating. Scientists are baffled.
              John is comfortable.
            </p>
          </div>

          {/* Wheatley */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🔵</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Favorite &ldquo;Animal&rdquo;
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              When asked his favorite animal, John answers without hesitation:{" "}
              <span className="text-red-400">Wheatley, from Portal 2</span>.
              Wheatley is not an animal. He is a spherical AI personality core
              with a British accent who nearly destroys a research facility.
              John does not care. Wheatley is his favorite animal, and he will
              not be taking further questions.
            </p>
          </div>

          {/* Gaming */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Gamer
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John&rsquo;s gaming taste is specific and non-negotiable:{" "}
              <span className="text-red-400">old 3D Sonic platformers</span> and{" "}
              <span className="text-red-400">Gears of War</span>. That&rsquo;s it.
              Sonic Adventure 2? A masterpiece. Gears of War? Poetry with a
              chainsaw bayonet. Modern games? He&rsquo;ll play them, but he&rsquo;ll
              compare them unfavorably to running through Green Hill Zone at
              max speed while chainsawing a Locust. As one does.
            </p>
          </div>

          {/* Hates */}
          <div className="bg-gray-950 border border-gray-800/50 rounded-xl p-8 hover:border-red-900/30 transition-all duration-500">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="font-gothic text-2xl text-gray-200 mb-3">
              The Aversions
            </h3>
            <p className="text-gray-400 font-serif leading-relaxed">
              John does not like <span className="text-red-400">dogs</span>.
              He does not like <span className="text-red-400">coffee</span>.
              And he <em>especially</em> does not like signs that say things
              like <span className="text-gray-500 line-through">&ldquo;Live, Laugh, Love&rdquo;</span> or{" "}
              <span className="text-gray-500 line-through">&ldquo;But First, Coffee&rdquo;</span>.
              If you hang one of those in your home, he will see it. He will
              judge you. He will say nothing. But you will feel it.
            </p>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* ── SAUCE TIER LIST ── */}
      <section className="relative z-20 py-16 px-4">
        <h2 className="font-gothic text-3xl md:text-5xl text-center text-gray-200 mb-2">
          🫙 The Sauce <span className="text-red-800">Grimoire</span>
        </h2>
        <p className="text-center text-gray-500 font-serif italic mb-12">
          Sacred texts of condiment wisdom
        </p>

        <div className="max-w-2xl mx-auto space-y-3">
          {SAUCES.map((sauce, i) => (
            <div
              key={i}
              className="bg-gray-950/80 border border-gray-800/30 rounded-lg p-5 flex items-center justify-between hover:border-red-900/30 transition-all duration-300 group"
            >
              <div>
                <div className="text-gray-200 font-serif text-lg group-hover:text-red-400 transition-colors">
                  {sauce.name}
                </div>
                <div className="text-gray-600 text-sm italic">{sauce.verdict}</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, j) => (
                  <span
                    key={j}
                    className={`text-lg ${j < sauce.rating ? "text-red-700" : "text-gray-800"}`}
                  >
                    🩸
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <OrnamentDivider />

      {/* ── SNACK CHRONICLES ── */}
      <section className="relative z-20 py-16 px-4">
        <h2 className="font-gothic text-3xl md:text-5xl text-center text-gray-200 mb-2">
          📜 The Snack <span className="text-red-800">Chronicles</span>
        </h2>
        <p className="text-center text-gray-500 font-serif italic mb-12">
          A record of nocturnal consumption
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {SNACKS.map((snack, i) => (
            <div
              key={i}
              className="bg-gray-950/80 border border-gray-800/30 rounded-lg p-5 flex items-center justify-between hover:border-red-900/30 transition-all duration-300 group"
            >
              <div>
                <div className="text-gray-200 font-serif text-lg group-hover:text-red-400 transition-colors">
                  {snack.name}
                </div>
                <div className="text-gray-600 text-sm italic">{snack.time}</div>
              </div>
              <div className="text-sm tracking-wider">{snack.rating}</div>
            </div>
          ))}
        </div>
      </section>

      <OrnamentDivider />

      {/* ── WALK LOGS ── */}
      <section className="relative z-20 py-16 px-4">
        <h2 className="font-gothic text-3xl md:text-5xl text-center text-gray-200 mb-2">
          🗺️ The Walk <span className="text-red-800">Logs</span>
        </h2>
        <p className="text-center text-gray-500 font-serif italic mb-12">
          Every journey into the abyss, documented
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {WALKS.map((walk, i) => (
            <div
              key={i}
              className="bg-gray-950/80 border border-gray-800/30 rounded-lg p-5 hover:border-red-900/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-200 font-gothic text-lg">{walk.route}</h3>
                <span className="text-red-700 font-bold text-sm">{walk.distance}</span>
              </div>
              <p className="text-gray-500 font-serif italic text-sm">{walk.note}</p>
            </div>
          ))}
        </div>
      </section>

      <OrnamentDivider />

      {/* ── THINGS JOHN LOVES vs HATES ── */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-950 border border-red-900/20 rounded-xl p-8">
            <h3 className="font-gothic text-2xl text-red-700 mb-6 text-center">
              🩸 Embraces
            </h3>
            <ul className="space-y-3 font-serif text-gray-400">
              {[
                "Sauce (all forms, all surfaces)",
                "Latin ballroom dancing",
                "Pokémon Go (nocturnal raids)",
                "Global warming (pro)",
                "Wheatley (his favorite \"animal\")",
                "Sonic Adventure 2",
                "Gears of War (chainsaw bayonet)",
                "Long long walks",
                "Snacking at 3 AM",
                "Being bald (you can't tell though)",
                "Speed (of all kinds)",
                "Hot Cheetos",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-red-800">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-950 border border-gray-800/20 rounded-xl p-8">
            <h3 className="font-gothic text-2xl text-gray-500 mb-6 text-center">
              ⚰️ Abhors
            </h3>
            <ul className="space-y-3 font-serif text-gray-500">
              {[
                "Dogs",
                "Coffee",
                "\"Live, Laugh, Love\" signs",
                "\"But First, Coffee\" mugs",
                "\"Good Vibes Only\" wall art",
                "\"It's Wine O'Clock Somewhere\"",
                "Food without sauce",
                "Modern Sonic games",
                "Short walks",
                "Being asked about the hair situation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 line-through decoration-red-900/40">
                  <span className="text-gray-700">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* ── CLOSING QUOTE ── */}
      <section className="relative z-20 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl text-red-900/30 font-gothic">&ldquo;</div>
          <p className="text-2xl md:text-3xl text-gray-300 font-serif italic leading-relaxed -mt-6">
            I&rsquo;m not lost. I&rsquo;m just on a really long walk
            and there&rsquo;s a Snorlax three blocks away.
            Also, do you have any sauce? And no, I&rsquo;m not bald.
            You can&rsquo;t even tell.
          </p>
          <div className="mt-6 text-gray-600 font-serif">
            — John Wendell Murdock, 2:47 AM, somewhere
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-20 border-t border-gray-800/30 py-10 px-4 text-center">
        <div className="text-3xl mb-4">🧛💻⚡🫙💃🎮🍿🚶⚫🌡️</div>
        <p className="font-gothic text-gray-400 text-lg">
          John Wendell Murdock
        </p>
        <p className="text-gray-600 text-sm mt-1 font-serif italic">
          Software Engineer &bull; Speed Demon &bull; Sauce Enthusiast &bull; Latin Dancer
          <br />
          Walker of Paths &bull; Eater of Snacks &bull; Catcher of Pokémon &bull; Not Bald (You Can&rsquo;t Tell)
        </p>
        <p className="text-gray-800 text-xs mt-6">
          © {new Date().getFullYear()} &bull; Built in darkness &bull;
          No Pokémon were harmed &bull; Sauce was applied liberally &bull;
          No &ldquo;Live Laugh Love&rdquo; signs were used in the making of this website
        </p>
      </footer>
    </main>
  );
}
