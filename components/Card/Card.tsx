import Badge, { BadgeProps } from '../Badge/Badge';
import styles from './Card.module.scss'

interface CardPrpos {
  title: string,
  type: string
}

export default function Card({ title, type }:CardPrpos) {
  return (
    <div className={styles.Card}>
      <h2>
        {title}
      </h2>
      <Badge type={type as BadgeProps['type']} />
    </div>
  )
}