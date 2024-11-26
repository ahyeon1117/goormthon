import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function GitHubGrass({ commitData, searchUser }) {
  const today = new Date();

  return (
    <div className="heatmap">
      <h2>
        {searchUser}/{searchUser} Commit Activity
      </h2>
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), 0, 1)}
        endDate={today}
        values={commitData}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count < 5) return "color-low";
          if (value.count < 10) return "color-medium";
          return "color-high";
        }}
        style={{
          width: `100%`, // 화면 크기에 맞게 동적 너비 설정
          height: "100%"
        }}
      />
    </div>
  );
}

export default GitHubGrass;
