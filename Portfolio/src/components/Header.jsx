import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function Header(props) {
  const isLargeScreen = useMediaQuery({ minWidth: 769 });
  const header = ['profile', 'projects', 'skills', 'about Me'];

  return (
    <ul id="nav-list">
      {header.map((item) => {
        const label = item.charAt(0).toUpperCase() + item.slice(1);

        return isLargeScreen ? (
          <motion.li
            key={item}
            animate={{
              color: props.onView === item ? '#8d8d8d' : '#3b3b3b',
              x: props.onView === item ? 50 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 70,
            }}
          >
            {label}
          </motion.li>
        ) : (
           <motion.li
            key={item}
            animate={{
                color: props.onView === item ? '#8d8d8d' : '#3b3b3b',
                backgroundColor: props.onView === item ? '#3b3b3b' : '',
                borderRadius: props.onView === item? '50' : '100',
            }}
            transition={{
              type: 'spring',
              stiffness:100,
              damping: 70,
            }}
          >
            {label}
          </motion.li>
        );
      })}
    </ul>
  );
}
