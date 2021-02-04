/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SectionHeading from 'components/section-heading';
import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Boyish Jeans (USA)',
      username: 'Jordan Nodarse, Founder / Creative Director',
      text: `Incorporating Shofrica's technology into our website will provide those key details and will arm our customers with even more information about the purchase decision they have made.`,
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'DAWN DENIM (Germany/Vietnam)',
      username: 'Marian von Rappard, Owner',
      text: `Shofrica has an incredible platform, on which we can directly engage our suppliers to share their information, and easily trace all the purchase orders from different tiers.`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar3,
      name: 'ARMEDANGELS (Germany)',
      username: 'Lavinia Muth, Corporate Responsibility Manager',
      text: `We are at the cross road of a sustainable paradox. Everybody is talking about sustainability & transparency, but nobody really follows a clear path. Cooperating with Shofrica and not only showing off transparency, but also real-time traceability of single products will be a gamechanger.`,
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Fairway (UK)',
      username: 'Stephan Kyle',
      text: `No hustle to onboard suppliers: Shofrica's has an incredible platform, on which we can directly engage our suppliers to share their information, and easily trace all the purchase orders from different tiers.`,
    },
  ],
  [
    {
      id: 5,
      avatar: avatar5,
      name: 'CircleStances - Fair. Fashion. (Germany)',
      username: 'Kirsten Hedwig-Rondot, Cofounder/ Design & Marketing',
      text: `Transparency is the key to a sustainable and fair fashion economy. By putting all our cards on the table, we want to value the work and the natural resources that were put into our products.`,
    },
    {
      id: 6,
      avatar: avatar6,
      name: 'Jyoti - Fair Works (Germany/India)',
      username: 'Carolin Hofer, Cofounder/Co-CEO',
      text: `Value chain transparency has always been one of Jyoti - Fair Work’s main principles as we believe it is the basis for a fair, sustainable and honest economy.`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar7,
      name: 'Fairling (Germany)',
      username: 'Markus Dreher',
      text: `Great visual communication with our consumers: On each and every style, the consumers can discover the supply chain and all the people involved in the process of making the product they like.`,
    },
    {
      id: 8,
      avatar: avatar8,
      name: 'CANO Clothing Company (Germany/Mexico)',
      username: 'Paula Segura, eCommerce & Partnerships',
      text: `Our goal with CANO has always been to connect our great products, the skilled people that make them, and our amazing customers in a cool and interesting way.`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar1,
      name: 'Lespirant (Germany)',
      username: 'Laurent Tran, Founder',
      text: `In a world where sustainability and fair trade are after-thoughts, we at LESPIRANT do not want to build our brand on the back of cheap and exploited labor in unsafe working conditions.`,
    },
    {
      id: 10,
      avatar: avatar2,
      name: 'Ecostars (US)',
      username: 'Sam Finkman',
      text: `We believe transparency is the first step to transform the industry. We must join forces with suppliers and consumers to achieve more – and retraced is the right tool to bridge the two forces. Thank you`,
    },
  ],
  [
    {
      id: 11,
      avatar: avatar3,
      name: 'Just fashion(Germany)',
      username: 'Bridget Myers',
      text: `Cooperating with Shofrica and not only showing off transparency, but also real-time traceability of single products will be a gamechanger. We believe transparency is the first step to transform the industry.`,
    },
    {
      id: 12,
      avatar: avatar4,
      name: 'Modeflair (UK)',
      username: 'Flavian Kent, CEO',
      text: `We believe transparency is the first step to transform the industry. Together with Shofrica,  we hope that we can set new standards and a good example of how sustainable, respectful and transparent fashion can be.`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What client say about us"
          description="Customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            {item?.map((slide) => (
              <Testimonial key={slide?.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
