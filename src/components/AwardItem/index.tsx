function AwardItem({ title, subtitle, icon }: IAwardItem) {
  return (
    <div className="AwardItem">
      {title}
      <br />
      {subtitle}
    </div>
  );
}

export default AwardItem;
