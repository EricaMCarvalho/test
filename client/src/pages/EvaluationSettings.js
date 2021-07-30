import React, { useState } from 'react';
import axios from 'axios';
import '../components/Form.css';

const EvaluationSettings = () => {
  const [makeAnonymous, setMakeAnonymous] = useState(true);
  const [scoreSharing, setScoreSharing] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api', {
        makeAnonymous,
        scoreSharing,
      });
    } catch (error) {
      // Handle error
    }
  };

  return (
    <main>
      <h1 className='primary-heading'>
        2021 Example Organization Scholarship Program
      </h1>

      <form className='form' onSubmit={handleSubmit}>
        <h2 className='secondary-heading'>Evaluation Settings</h2>
        <div className='form-control'>
          <input
            id='make-anonymous'
            type='checkbox'
            checked={makeAnonymous}
            onChange={(e) =>
              setMakeAnonymous((makeAnonymous) => !makeAnonymous)
            }
          />
          <label className='form-label' htmlFor='make-anonymous'>
            Make anonymous
          </label>
          <p className='form-description'>
            Hides the applicant's user name and organization. Form fields with
            identifying information must be hidden in the form.
          </p>
        </div>

        <div className='form-control'>
          <input
            id='score-sharing'
            type='checkbox'
            checked={scoreSharing}
            onChange={(e) => setScoreSharing((scoreSharing) => !scoreSharing)}
          />

          <label htmlFor='score-sharing'>Score sharing</label>

          <p className='form-description'>
            Allows all evaluators assigned to the same submission collaboration
            by viewing each other's scores and comments.
          </p>
        </div>

        <button className='btn' type='submit'>
          Apply Changes
        </button>
      </form>
    </main>
  );
};

export default EvaluationSettings;
