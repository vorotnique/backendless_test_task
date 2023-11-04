export default function DummyChart() {
  return (
    <div className="chart">
      <div className="chart__bar">
        <div className="chart__bar-fill fill-100">100%</div>
      </div>
      <div className="chart__bar">
        <div className="chart__bar-fill fill-75">75%</div>
      </div>
      <div className="chart__bar">
        <div className="chart__bar-fill fill-50">50%</div>
      </div>
      <div className="chart__bar">
        <div className="chart__bar-fill fill-25">25%</div>
      </div>
    </div>
  );
}
