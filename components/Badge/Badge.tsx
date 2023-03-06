/** Because every project needs a Badge. */
import cx from 'classnames'
import styles from './Badge.module.scss';

export interface BadgeProps {
  /** Color of the background */
  type: 'accessibility' | 'concrete' | 'electrical';
}

const Badge = ({
  type = 'accessibility'
}: BadgeProps) => {
  return (
    <span className={cx(styles.Badge, styles[type])} >
      {type}
    </span>
  )
}

// Badge.displayName = 'Badge';

export default Badge;
