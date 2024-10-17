import Image from 'next/image'
import styles from './page.module.css'
import Profile from './components/profile'
import TodoList from './components/todo'
import { employees } from './data/data'

export default function Homeabc() {
  const employeeList = employees.map(employee => <Profile key={employee.id} size="70" person={employee}></Profile>)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>Inventis</code>
        </p>
        {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}

      <div>
        <h1>Flutter team</h1>
        {employeeList}
        {/* <Profile size={70} person={{
          imageId: 'huy',
          fullName: "Huỳnh Công Huy",
          yearExperience: "9.5",
          position: "Senior Software Engineer",
          experienceDetail: "He has 9.5 year experience in software development, he has done many projects like PC, Mobile and Web applicaton",
          dateJoin: "08/01/2022"
        }}></Profile>
        <Profile size={70} person={{
          imageId: 'phuc',
          fullName: "Nguyễn Quốc Phục",
          yearExperience: "6.5",
          position: "Senior Software Engineer",
          experienceDetail: "He has 6.5 year experience in software development, he has done many projects like PC, Mobile and Web applicaton",
          dateJoin: "01/17/2022"
        }}></Profile>
        <Profile size={70} person={{
          imageId: 'bao',
          fullName: "Trần Quốc Bảo",
          yearExperience: "6.5",
          position: "Senior Software Engineer",
          experienceDetail: "He has 6.5 year experience in software development, he has done many projects like PC, Mobile and Web applicaton",
          dateJoin: "08/01/2022"
        }}></Profile>
        <Profile size={70} person={{
          imageId: 'nghi',
          fullName: "Nguyễn Hữu Nghị",
          yearExperience: "2",
          position: "Software Engineer",
          experienceDetail: "He has 2 year experience in software development, he has done many projects like PC, Mobile and Web applicaton",
          dateJoin: "08/01/2022"
        }}></Profile> */}
      </div>
      {/* <TodoList></TodoList> */}
    </main>
  )
}
