import Image from 'next/image';
import Link from 'next/link';
import imageBalance from 'public/images/landing/balance.webp';
import imageConsistency from 'public/images/landing/consistency.webp';
import imageFocus from 'public/images/landing/focus.webp';
import imageGrowth from 'public/images/landing/growth.webp';
import ScrollTop from 'src/components/ScrollToTop';
import { useGetTasksQuery } from 'src/graphql/task.api';

function HomePageTemplate() {
  const { data } = useGetTasksQuery();
  console.log(data);

  return (
    <div className="container py-4">
      {/* Top Panel */}
      <div className="mb-2 flex h-[280px] w-full p-2 shadow-diffuse">
        <div className="basis-2/3">
          {/* Develop */}
          <h2>Habits</h2>
          <p>MiLife lets you track whichever habits you desire, so that you can progress towards your ideal self.</p>
        </div>
        <div className="basis-1/3 px-4">
          POPULAR
          <ul>
            <li>
              <Link href={'/'} className="underline">
                Your profile
              </Link>
            </li>
            <li>
              <Link href={'/'} className="underline">
                About MiLife
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Panel - Hero Images and why you should sign up */}
      {/* Activities */}
      <div className="flex w-full flex-col gap-4 shadow-prominent md:flex-row">
        <div className="flex w-full flex-col">
          <div className="p-2">
            <Image priority alt="focus-image" src={imageFocus} placeholder="blur" />
            <h3 className="my-1">Focus</h3>
            <p>
              {`Habit tracking helps people focus on their daily goals by providing a visual reminder of what needs to be
              done. When tasks are tracked, it's easier to stay organized and maintain concentration.`}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="p-2">
            <Image priority alt="growth-image" src={imageGrowth} placeholder="blur" />
            <h3 className="my-1">Growth</h3>
            <p>
              {`Tracking progress shows measurable improvement over time, which is key to personal development. As people see their achievements grow, they're motivated to continue their habits and reach new levels of success.`}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="p-2">
            <Image priority alt="consistency-image" src={imageConsistency} placeholder="blur" />
            <h3 className="my-1">Consistency</h3>
            <p>
              {`Consistency is at the heart of building long-term habits. Habit tracking keeps users accountable and encourages steady progress by reinforcing routine behavior every day.`}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="p-2">
            <Image priority alt="balance-image" src={imageBalance} placeholder="blur" />
            <h3 className="my-1">Balance</h3>
            <p>
              {`By tracking habits related to wellbeing, such as meditation or exercise, people can achieve a healthier balance between productivity and relaxation, improving both mental and physical health.`}
            </p>
          </div>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
}

export default HomePageTemplate;
