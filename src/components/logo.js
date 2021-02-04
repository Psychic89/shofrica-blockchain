/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <LogoSvg isWhite={isWhite} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};


// How to change the Logo

// import LogoSvg from "../assets/images/logo.png"
// export default function Home() {
//   return (
//     // The import result is the URL of your image
//     <img src={LogoSvg} alt="Shofrica Logo" />
//   )
// }