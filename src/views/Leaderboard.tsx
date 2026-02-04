import { mentorTeams, type MentorTeam } from "../data/mentorLeaderboard";

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
}

export default function Leaderboard() {
  const sorted: MentorTeam[] = [...mentorTeams].sort((a, b) => b.points - a.points).slice(0, 5);

  return (
    <section className="lb-wrap">
      <div className="lb-card">
        <header className="lb-header">
          <div className="lb-logo" aria-hidden="true">★</div>
          <div>
            <div className="lb-title">LEADERBOARD</div>
            <div className="lb-subtitle">CSA Peer Mentor Games</div>
          </div>
        </header>

        <div className="lb-list">
          {sorted.map((team, index) => {
            const rank = index + 1;
            return (
              <div className="lb-row" key={team.id}>
                <div className="lb-left">
                  <div className="lb-avatar" aria-hidden="true">
                    {team.avatarUrl ? (
                      <img src={team.avatarUrl} alt="" />
                    ) : (
                      <span>{team.name.slice(0, 1).toUpperCase()}</span>
                    )}
                  </div>

                  <div className="lb-text">
                    <div className="lb-name">{team.name}</div>
                    <div className="lb-meta">{team.members.join(", ")}</div>
                  </div>
                </div>

                <div className="lb-right">
                  <div className="lb-points">{team.points} pts</div>
                  <div className="lb-rankBadge">{ordinal(rank)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
