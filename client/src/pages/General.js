import React from 'react';

const General = () => {
  return (
    <main>
      <h2 className='secondary-heading'>Instructions</h2>
      <p className='text'>
        Go to Settings > Applicant Settings and Settings > Evaluation Settings
        to see the implemented test views. They can be reached through both the
        header and the sidebar.
      </p>
      <p className='text'>
        There is one application program instance saved on the database. The
        application program can be updated using the forms. The changes are
        persisted in a PostgreSQL database. The forms are validated on the
        backend.
      </p>
    </main>
  );
};

export default General;
