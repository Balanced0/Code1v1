import Link from "next/link";
import { Shell } from "./components";

const steps = [
  ["01", "Enter the queue", "Choose your preferred language and join the ranked pool in one click."],
  ["02", "Get paired", "We match you with a similarly rated player and a balanced problem."],
  ["03", "Solve first", "Submit a correct solution before your opponent to take the rating points."],
];

const leaders = [
  ["01", "byteblitz", "2,184", "+42"],
  ["02", "sana.codes", "2,117", "+31"],
  ["03", "octal_fox", "2,063", "+26"],
  ["04", "mira.dev", "1,998", "+18"],
];

export default function Home() {
  return (
    <Shell><main>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> LIVE ARENA · SEASON 01</p>
          <h1>Code faster.<br /><em>Climb higher.</em></h1>
          <p className="hero-summary">The competitive programming arena for head-to-head problem solving. One problem. Two players. No excuses.</p>
          <div className="hero-actions"><Link href="/arena" className="button">Find a match <span>→</span></Link><Link href="/problems" className="text-link">Explore problems <span>↗</span></Link></div>
          <div className="hero-pulse"><span className="pulse-ring" /><strong>1,248</strong> players currently in arena</div>
        </div>
        <div className="battle-card" aria-label="Live match preview">
          <div className="battle-top"><span className="match-id">MATCH #A73F</span><span className="status"><i /> LIVE</span></div>
          <div className="fighters"><div><span className="avatar cyan">AK</span><b>algo_kraken</b><small>1,842 RATING</small></div><strong className="versus">VS</strong><div><span className="avatar lime">MN</span><b>mira_nova</b><small>1,811 RATING</small></div></div>
          <div className="terminal"><div className="terminal-bar"><span /><span /><span /><b>main.cpp</b></div><code><i>01</i> <span className="purple">#include</span> &lt;iostream&gt;<br /><i>02</i><br /><i>03</i> <span className="cyan-text">int</span> main() {'{'}<br /><i>04</i> &nbsp; <span className="purple">while</span> (testCases--) {'{'}<br /><i>05</i> &nbsp; &nbsp; solve();<br /><i>06</i> &nbsp; {'}'}</code></div>
          <div className="battle-bottom"><div><small>PROBLEM</small><b>Array Reversal</b></div><div><small>TIME LEFT</small><b className="timer">14:37</b></div><span className="running">● RUNNING</span></div>
        </div>
      </section>

      <section className="stats-strip"><div><b>12K<span>+</span></b><small>REGISTERED PLAYERS</small></div><div><b>284K<span>+</span></b><small>BATTLES COMPLETED</small></div><div><b>48</b><small>COUNTRIES COMPETING</small></div><div><b>99.8<span>%</span></b><small>ARENA UPTIME</small></div></section>

      <section className="section-shell section how"><p className="eyebrow">THE LOOP</p><div className="section-heading"><h2>Built for the<br /><em>competitive mind.</em></h2><p>Every match strips away the noise. You, an opponent, and a problem worth solving.</p></div><div className="steps">{steps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↘</b></article>)}</div></section>

      <section className="section-shell section categories"><div className="section-heading"><div><p className="eyebrow">PICK YOUR BATTLEGROUND</p><h2>Every pattern.<br /><em>Every rank.</em></h2></div><Link href="/problems" className="text-link">View all problems <span>→</span></Link></div><div className="category-grid">{[["↯", "Algorithms", "430 problems"], ["⌘", "Data structures", "312 problems"], ["◈", "Dynamic programming", "275 problems"], ["⌁", "Graphs", "198 problems"], ["#", "Math & number theory", "245 problems"], ["⌬", "Strings", "167 problems"]].map(([icon, name, count]) => <Link href="/problems" className="category" key={name}><span>{icon}</span><h3>{name}</h3><p>{count}</p><b>↗</b></Link>)}</div></section>

      <section className="ticker"><div className="ticker-track"><span><i /> Riya_87 defeated vector_void · +24 ELO</span><span><i /> New problem unlocked: Prefix Maximums</span><span><i /> 83 active matches right now</span><span><i /> Riya_87 defeated vector_void · +24 ELO</span></div></section>

      <section className="section-shell section leaderboard-preview"><div className="leaderboard-copy"><p className="eyebrow">THE TOP 0.1%</p><h2>Earn your<br /><em>place here.</em></h2><p>Ratings update the second a match ends. There is no shortcut to the top of the board.</p><Link href="/leaderboard" className="button">View leaderboard <span>→</span></Link></div><div className="rank-board"><div className="rank-head"><span>RANK</span><span>PLAYER</span><span>RATING</span><span>FORM</span></div>{leaders.map(([rank, handle, rating, form]) => <div className="rank-row" key={handle}><b>{rank}</b><span className="mini-avatar">{handle.slice(0, 1).toUpperCase()}</span><strong>{handle}</strong><span>{rating}</span><em>{form}</em></div>)}<Link href="/leaderboard" className="rank-more">See all rankings <span>→</span></Link></div></section>

      <section className="section-shell section testimonials"><p className="eyebrow">FROM THE ARENA</p><div className="quote-grid"><blockquote>“The fastest way I have found to turn practice into a habit. A match is a much better motivator than a problem list.”<footer><span className="avatar cyan">JL</span><b>Jules L. <small>· Expert, 1862</small></b></footer></blockquote><blockquote>“Every solve feels earned. The matchmaking hits the sweet spot where I am constantly one step outside my comfort zone.”<footer><span className="avatar lime">TA</span><b>Tara A. <small>· Specialist, 1574</small></b></footer></blockquote></div></section>

      <section className="section-shell faq section"><p className="eyebrow">QUICK ANSWERS</p><div className="faq-grid"><h2>Questions before<br /><em>the first match?</em></h2><div>{[["How does matching work?", "We pair you with players close to your current rating and choose from a balanced problem pool."], ["Which languages can I use?", "C++, JavaScript, Python, Java, and TypeScript are supported in the arena."], ["Is Code1v1 free?", "Yes. Create an account, enter the queue, and compete without a subscription."]].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="section-shell"><p className="eyebrow">YOUR NEXT RATING POINT IS WAITING</p><h2>Ready to prove it?</h2><Link href="/register" className="button">Create your free account <span>→</span></Link></div></section>
    </main></Shell>
  );
}
