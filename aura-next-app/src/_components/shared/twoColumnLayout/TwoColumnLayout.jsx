const TwoColumnLayout = ({ leftColumn, rightColumn, className, id }) => {
  return (
    <div className={`two-column content-wrapper ${className ?? ""}`} id={id}>
      <div className='two-column__column'>{leftColumn}</div>
      <div className='two-column__column'>{rightColumn}</div>
    </div>
  );
};

export default TwoColumnLayout;
