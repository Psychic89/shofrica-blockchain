/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Container, Flex, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Startup Pack',
    subtitle: 'For the startup brands',
    amount: {
      monthly: 25.99,
      annual: 25.99 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitized supplier onboarding',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Supplier, product & material database`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Supply chain mapping & visualization`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Sustainability & transparency score`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Certificate & document management`,
      },
        {
            id: 6,
            isAvailable: true,
            title: `Audit & corrective action management`,
        },
        {
            id: 7,
            isAvailable: false,
            title: `Supplier assessment`,
        },
        {
            id: 8,
            isAvailable: false,
            title: `Compliance & sustainability dashboard`,
        },
        {
            id: 8,
            isAvailable: false,
            title: `Order management`,
        },
        {
            id: 10,
            isAvailable: false,
            title: `Supply chain tracing`,
        },
        {
            id: 11,
            isAvailable: false,
            title: `End consumer communication`,
        },
        {
            id: 12,
            isAvailable: false,
            title: `Marketing analytics dashboard`,
        },
    ],
  },
  {
    id: 2,
    title: 'Premium Pack',
    subtitle: 'For established brands',
    amount: {
      monthly: 49.99,
      annual: 49.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitized supplier onboarding',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Supplier, product & material database`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Supply chain mapping & visualization`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Sustainability & transparency score`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Certificate & document management`,
      },
        {
            id: 6,
            isAvailable: true,
            title: `Audit & corrective action management`,
        },
        {
            id: 7,
            isAvailable: true,
            title: `Supplier assessment`,
        },
        {
            id: 8,
            isAvailable: true,
            title: `Compliance & sustainability dashboard`,
        },
        {
            id: 9,
            isAvailable: true,
            title: `Order management`,
        },
        {
            id: 10,
            isAvailable: true,
            title: `Supply chain tracing`,
        },
        {
            id: 11,
            isAvailable: true,
            title: `End consumer communication`,
        },
        {
            id: 12,
            isAvailable: true,
            title: `Marketing analytics dashboard`,
        },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suits you perfect?"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
