import "./ViewMore.css";
import { useParams } from "react-router-dom";
import SectionTitle from "../section-title/SectionTitle";
import blogimage from "../../assets/beach-6517214_1280.jpg"
const viewMore = [
  {
    title: "Kisumu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam cupiditate similique cumque soluta nam. Laudantium rem, illum tenetur iusto delectus aspernatur numquam ipsum adipisci hic pariatur optio ea consequuntur nemo harum ab qui, ad quidem ratione veritatis id, inventore debitis minus facilis! Voluptatem cumque perferendis provident? Impedit quas quam harum sapiente cupiditate accusantium distinctio, rem voluptatum porro enim laudantium quidem earum totam vel asperiores ea natus nihil minus! Voluptatem tenetur consequatur, eum pariatur harum, culpa eveniet quos quae quia repellat architecto dolore ipsam ducimus qui a recusandae praesentium accusantium quis fuga vitae debitis. Mollitia possimus dolor debitis commodi eum?",  
  },
  {
    title: "Mombasa",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur iure ut ab iusto nobis architecto nemo voluptatem iste minima quidem ipsa hic nihil magnam debitis corporis molestias repellat ullam dignissimos, nesciunt ducimus, accusantium quae labore ad. Inventore expedita ad natus culpa fugiat sequi non ducimus nisi ipsa! Temporibus exercitationem quisquam repudiandae mollitia fugit fugiat libero quibusdam sunt expedita perferendis atque consequuntur, laborum numquam quasi illo in voluptatum ipsum, quae quia. Aliquid harum quibusdam quasi natus vel deleniti aspernatur inventore doloremque dolorum ut est, expedita deserunt eius officiis iusto unde sunt. Omnis saepe dolor laudantium quibusdam beatae iure voluptates quis quia.",
  },
  {
    title: "Kilifi",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "South Africa",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "Ethipia",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "London",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "Kilimanjaro",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "Nigeria",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
  {
    title: "Zanzibar",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, non, vitae dolorum ducimus dicta perspiciatis earum nostrum sit possimus sint eum, culpa eligendi quo consectetur assumenda voluptatem? Necessitatibus quod sit numquam? Consectetur ab distinctio fuga quod incidunt, voluptate iure ullam debitis tempora sit blanditiis, eum nesciunt modi deserunt consequuntur aliquid dolore fugit. Autem, veniam dolore, sunt id facilis architecto natus cum aperiam libero ducimus sapiente aliquid maiores earum. Aliquam cupiditate sunt ducimus sint illo totam soluta vel tempora sequi nemo necessitatibus, distinctio corporis dicta, cum quisquam, dolorem nisi sapiente aperiam quis modi culpa eius ullam. Natus voluptate vel saepe quia.",
  },
];


const ViewMoreContext = (props) => {
  return (
    <>
      <div className="viewmorecontext-section">
        <div className="viewmore-title">
          <p>{props.title}</p>
        </div>
       
        <div className="viewmore-text">
          <p>{props.text}</p>
        </div>
        <div className="viewmore-image">
          <img src={props.image? props.image:blogimage} alt="" />
        </div>
      </div>
    </>
  )
}

export default function BlogText() {
  let { destination } = useParams();
  console.log(destination)

  const item = viewMore.find(viewMoreItem => viewMoreItem.title === destination);
  console.log(item)
  return (
    <>
      <div className="blog-section">
      <SectionTitle title="Blog" />
        <div className="viewMoreContext ">
               
                  
                        <ViewMoreContext
                            title={item.title}
                            text={item.text}
                        />
                  
         </div>
      </div>
    </>
  );
}

