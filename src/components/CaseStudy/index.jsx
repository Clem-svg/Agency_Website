import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import works from '../../data/works';

const CaseStudy = () => {
  const { workSlug } = useParams();
  console.log(useParams());
  const [currentWork, setCurrentWork] = useState(undefined);

  useEffect(() => {
    const foundWork = works.find((work) => `${work.slug}-study-case` === workSlug);
    setCurrentWork(foundWork);
    console.log(foundWork);
  }, [workSlug]);

  return (
    <div className="work">
      {!currentWork && (
        <p>Aucun projet n&apos;a été trouvé avec ce nom</p>
      )}
      {currentWork && (
        <>
          <h1>{currentWork.title}</h1>
          <p>{currentWork.description}</p>
        </>
      )}
    </div>
  );
};
export default CaseStudy;
