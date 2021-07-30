import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '../components/Alert';
import '../components/Form.css';

const EvaluationSettings = ({ program }) => {
  const [makeAnonymous, setMakeAnonymous] = useState(false);
  const [scoreSharing, setScoreSharing] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setMakeAnonymous(program.makeAnonymous || false);
    setScoreSharing(program.scoreSharing || false);
  }, [program]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/programs/${program.id}`, {
        makeAnonymous,
        scoreSharing,
      });

      setSuccess('Settings saved successfully');

      setTimeout(() => {
        setSuccess('');
      }, 1000);
    } catch (error) {
      if (error.response || error.response.data) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      setTimeout(() => {
        setError('');
      }, 1000);
    }
  };

  return (
    <main>
      <h1 className='primary-heading'>{program.name}</h1>

      {success && <Alert variant='success'>{success}</Alert>}
      {error && <Alert variant='danger'>{error}</Alert>}

      <form className='form' onSubmit={handleSubmit}>
        <h2 className='secondary-heading'>Evaluation Settings</h2>
        <div className='form-control'>
          <input
            id='make-anonymous'
            type='checkbox'
            checked={makeAnonymous}
            onChange={(e) => setMakeAnonymous(e.target.checked)}
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
            onChange={(e) => setScoreSharing(e.target.checked)}
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
