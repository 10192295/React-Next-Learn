import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export class navData {
  linkName: string
  linkRouter: string
  linkId: number
  constructor(linkName: string, linkId: number, linkRouter: string) {
    this.linkName = linkName
    this.linkId = linkId
    this.linkRouter = linkRouter
  }
}

export interface ISidebarLayout {
  linkeArray: Array<navData>
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ linkeArray }) => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      { linkeArray.map((data) => <Link href={data.linkRouter} key={data.linkId}>{data.linkName}</Link>) }
    </nav>
  );
};

export default SidebarLayout;

