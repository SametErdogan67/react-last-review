import Question from "./Question";

const InterviewAccord = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data.map((item) => {
        return <Question key={item.id} item={item} />;
        // <Question key={item.id} {... item} />
      })}
    </div>
  );
};

export default InterviewAccord;
