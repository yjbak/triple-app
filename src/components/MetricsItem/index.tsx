function MetricsItem({ className, count, unit, text }: IMetricsItem) {
  return (<div className={className}>
    <strong>
      <span>{count}</span>{unit}
    </strong>
    {text}
  </div>)
}

export default MetricsItem;
