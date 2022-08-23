import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { GET_DENKE, GET_REPLIES } from '../../API';
import Error from '../Elements/Error';
import DenkeBox from './DenkeBox';
import DenkeForm from './DenkeForm';
import { UserContext } from '../../Context/UserContext';

const DenkePage = () => {

  const {loggedIn} = React.useContext(UserContext);
  const params = useParams();
  const id = params.id;
  const {loading, error, request} = useFetch();
  const [denke, setDenke] = React.useState(null);
  const [replied, setReplied] = React.useState(null);
  const [replies, setReplies] = React.useState(null);
  const [formSent, setFormSent] = React.useState(false);

  React.useEffect(() => {
    async function getDenke(){
      const {url, options} = GET_DENKE(id);
      const {json} = await request(url, options);
      setDenke(json.denke);
      setReplied(json.replyTo[0])
    }
    getDenke();
  }, [id, request])

  React.useEffect(() => {
    async function getReplies(){
      const {url, options} = GET_REPLIES(id);
      const {json} = await request(url, options);
      setReplies(json.replies);
    }
    getReplies();
    setFormSent(false);
  }, [id, request, formSent])


  if (loading) return <div className="loading"></div>
  if (error) return <Error error={error} />
  if (denke)
  return (
    <>
      {replied && <DenkeBox type="replied" denke={replied} />}
      <DenkeBox type="main" denke={denke} />
      {loggedIn && <DenkeForm replyTo={denke.id} setFormSent={setFormSent}/>}
      {replies && replies.map((reply) => {
        return <DenkeBox key={reply.id} type="reply" denke={reply} />
      })}
    </>
  )
  else return null
}

export default DenkePage