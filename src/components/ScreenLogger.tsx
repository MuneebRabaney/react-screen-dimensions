import useScreenLogger from '../useScreenLogger';

import styles from '../styles/screen.module.css';

export function ScreenLogger<FC>() {
  const { height, width } = useScreenLogger();

  return (
    <div style={{ height, width }} className={styles.ScreenLogger}>
      <h1>Screen Dimension Logger</h1>
      <p>
        Window Height is currently set to: <strong>{height}</strong> px
      </p>
      <p>
        Window Width is currently set to: <strong>{width}</strong> px
      </p>
    </div>
  );
}

export default ScreenLogger;
