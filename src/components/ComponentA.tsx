import React, { useState } from 'react';

const ComponenteA: React.FC = () => {
  const [contador, setContador] = useState<number>(1);

  return (
    <div className="card">
      A
      <span className='span'>
        {contador}
      </span>
    </div>
  );
};

export default ComponenteA;
