import Head from '../node_modules/next/head'
import Image from '../node_modules/next/image'
import Link from '../node_modules/next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[organization]/[username]',
        query: { username: ''}
      }}></Link>
    </div>
  )
}
