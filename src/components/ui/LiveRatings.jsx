import React, { useState, useEffect } from "react";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const LiveRatings = () => {
  const [stats, setStats] = useState({
    leetcode: null,
    codeforces: null,
    codechef: null,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch LeetCode
        const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/usk2003");
        const lcData = await lcRes.json();

        // Fetch Codeforces
        const cfRes = await fetch("https://codeforces.com/api/user.info?handles=usk2003");
        const cfData = await cfRes.json();

        // Fetch CodeChef (Using a common third-party API wrapper)
        const ccRes = await fetch("https://codechef-api.vercel.app/handle/usk2003");
        const ccData = await ccRes.json();

        setStats({
          leetcode: lcData.status === "success" ? lcData : null,
          codeforces: cfData.status === "OK" ? cfData.result[0] : null,
          codechef: ccData.status === "success" ? ccData : null, // Simplified for this implementation
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, []);

  const RatingCard = ({ icon, label, value, subValue, color, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        flex flex-col items-center p-4 rounded-2xl
        bg-white/5 dark:bg-slate-800/20 backdrop-blur-md
        border border-white/10 dark:border-slate-700/50
        hover:border-blue-500/50 hover:bg-blue-500/5
        transition-all duration-300 group
      "
    >
      <div className={`${color} text-3xl mb-2 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <p className="text-xs font-medium text-muted uppercase tracking-wider">{label}</p>
      <p className="text-xl font-extrabold text-theme mt-1">{value || "---"}</p>
      {subValue && (
        <p className="text-[10px] text-gray-500 font-medium mt-1">{subValue}</p>
      )}
    </a>
  );

  if (stats.loading) {
    return (
      <div className="flex gap-4 justify-center mt-8 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-28 h-32 bg-gray-200 dark:bg-slate-800 rounded-2xl"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 w-full max-w-xl mx-auto">
      <RatingCard
        icon={<SiLeetcode />}
        label="LeetCode"
        value={stats.leetcode?.totalSolved}
        subValue={`${stats.leetcode?.ranking || "N/A"} Rank`}
        color="text-[#FFA116]"
        link="https://leetcode.com/usk2003"
      />
      <RatingCard
        icon={<SiCodeforces />}
        label="Codeforces"
        value={stats.codeforces?.rating}
        subValue={stats.codeforces?.rank?.toUpperCase()}
        color="text-[#1A8FFF]"
        link="https://codeforces.com/profile/usk2003"
      />
      <RatingCard
        icon={<SiCodechef />}
        label="CodeChef"
        value={stats.codechef?.currentRating}
        subValue={stats.codechef?.stars}
        color="text-[#5B3CC4]"
        link="https://www.codechef.com/users/usk2003"
      />
    </div>
  );
};

export default LiveRatings;
