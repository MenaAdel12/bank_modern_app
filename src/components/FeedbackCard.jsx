import { quotes } from '../assets'

export default function FeedbackCard({content, title, img, name}) {
  return (
    <div className='flex flex-col justify-between
    px-10 py-12 rounded-[20px] max-w-[370px]
    mr-0 md:mr-10 sm:mr-5 my-5 sm:my-0 feedback-card'>
        <img src={quotes} alt="double-quotes" 
        className='w-[42px] h-[27px]
        object-contain'/>
        <p className='font-poppins
        font-normal text-[18px] leading-[32px]
        text-white my-10'>
            {content}
        </p>

        <div className='flex flex-row'>
            <img src={img} alt="img" 
            className='w-[48px] h-[48px] rounded-full'/>

            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold
                text-white text-[20px] leading-[32px]'>{name}</h4>
                <p className='font-poppins font-normal
                text-dimWhite text-[16px] 
                leading-[24px]'>{title}</p>
            </div>
        </div>
    </div>
  )
}
