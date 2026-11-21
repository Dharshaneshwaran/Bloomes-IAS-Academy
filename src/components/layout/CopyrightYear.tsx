'use client';

import { useEffect, useState } from 'react';

// cacheComponents forbids reading the clock while prerendering, so the year
// starts from a fixed value and is corrected in the browser after mount.
const FALLBACK_YEAR = 2026;

export default function CopyrightYear() {
  const [year, setYear] = useState(FALLBACK_YEAR);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
