import { feedback } from "../constants";
import styles, { layout } from "./../style";
import FeedbackCard from "./FeedbackCard";

export default function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY}
    ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%]
      -right-[50%] rounded-full blue__gradient" />

      <div
        className={`flex items-center w-full
      justify-between md:flex-row flex-col
      mb-6 sm:mb-16 relative z-[1]`}
      >
        <h1 className={`${styles.heading2}`}>
          What people are
          <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center
      w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
