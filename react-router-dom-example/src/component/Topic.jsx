// Topic 함수
import { useParams } from "react-router-dom";
import data from './data.json';


function Topic() {

  let params = useParams();

  let findTopic = data.find( (topic)=>{
    if(topic.id === Number(params.topic_id)) {
      return true;
    }
  });
  
  if(findTopic === undefined) {
    findTopic = {
      title: 'Sorry',
      description: 'Not found'
    };
  }

  return (
    <div>
      <h3>{findTopic.title}</h3>
      {findTopic.description}
    </div>
  );
}

export default Topic;