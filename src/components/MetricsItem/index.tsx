import ListItem from "../ListItem";
import Strong from "../Strong";

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
