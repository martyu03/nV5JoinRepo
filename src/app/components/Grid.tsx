interface GridProps {
  data: { title: string }[];
}

const Grid: React.FC<GridProps> = ({ data }) => (
  <div className="row">
    {data.map((item, index) => (
      <div className="col-md-6" key={index}>
        <div>{item.title}</div>
      </div>
    ))}
  </div>
);

export default Grid;
