import ListItem from "@components/ListItem";
import Strong from "@components/Strong";

function MetricsItem({ fontSize, count, unit, text }: IMetricsItem) {
  return (
    <ListItem fontSize={fontSize} width={90} textAlign="right">
      <Strong>
        <span>{count}</span>
        {unit}
      </Strong>
      {text}
    </ListItem>
  );
}

export default MetricsItem;
