import { Header } from '@/components/Header/header'
import { Blur } from '@/components/blur/blur'
import { HomeComponent } from '@/components/home/home-component'
import { Projects } from '@/components/projects/projects'
import styles from './home.module.css'

export default function Home () {
  return (
    <main className='flex flex-col justify-center items-center h-screen w-screen overflow-hidden dark:bg-slate-950 bg-slate-50 relative'>
      <Header />
      <section className={`h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth ${styles.scroll}`}>
        <HomeComponent />
        <Projects />
      </section>
      <Blur position='top-0 right-[-10rem]' />
      <Blur position='top-0 left-[-10rem]' />
    </main>
  )
}
