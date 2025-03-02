import { stats } from "../constants";
import styles from "../style";

export default function Stats() {
  return (
    <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap
    mb-6 sm:mb-20`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex justify-center
        items-center flex-row m-3 flex-1`}>
          <h4 className={`font-poppins font-semibold
          xs:text-[40px] text-[30px] xs:leading[53px]
          leading-[43px] text-white`}>
            {stat.value}
          </h4>
          <p className={`font-poppins font-normal
          xs:text-[20px] text-[15px] xs:leading[30px]
          leading-[21px] text-gradient uppercase ml-3`}>{stat.title}</p>
        </div>  
      ))}
    </section>
  );
}
