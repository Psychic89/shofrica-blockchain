/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Stay one step ahead of supply chain risks',
    contents: (
      <div>
        Supply chains are becoming more global, more complex and the call for more sustainable practices is reaching full volume. Events such as the COVID-19 global pandemic further highlight the lack of transparency, accountability and supply chain oversight. Not knowing your supply chain is no longer an option.
      </div>
    ),
  },
  {
    title: 'Be ready for the legal compliance standards on the horizon',
    contents: (
      <div>
  Laws such as the California Supply Chain Act (USA), Modern Slavery Act (UK), the Lieferkettengesetz (GER) and the loi de vigilance (FR) will become the standard and will hold also companies accountable for how their operations affect the people and the planet.
      </div>
    ),
  },
  {
    title: `Keep your customers' values and trust in mind`,
    contents: (
      <div>
  89% of consumers would rather buy from a company tackling social and environmental issues. Your customers care about how their clothes are made and where these come from. In turn, unavailable and unverifiable data leads to mistrust and hestiation in the purchasing process.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  const image = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "messenger.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image
              src={image.illustration.childImageSharp.fluid}
              alt="messenger"
            />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Take your sustainability to the next level"
              description="Turn challenges into opportunities to better your business and our world."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    position: 'relative',
    zIndex: -1,
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
