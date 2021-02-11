import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import works from '../../data/works';

const CaseStudy = () => {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined);

  useEffect(() => {
    const foundWork = works.find((work) => `${work.slug}-study-case` === workSlug);
    setCurrentWork(foundWork);
  }, [workSlug]);

  return (
    <div className="work">
      {!currentWork && (
        <p>Aucun projet n&apos;a été trouvé avec ce nom</p>
      )}
      {currentWork && (
        <>
          <h2>{currentWork.title}</h2>
          <p>{currentWork.description}</p>
        </>
      )}
    </div>
  );
};
export default CaseStudy;
