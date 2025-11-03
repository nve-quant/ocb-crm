import { Img } from '@react-email/components';

const logoStyle = {
  marginBottom: '40px',
};

export const Logo = () => {
  // Use your deployed domain or localhost for development
  const logoUrl = process.env.SERVER_URL
    ? `${process.env.SERVER_URL}/images/icons/windows11/Square150x150Logo.scale-100.png`
    : 'http://localhost:3000/images/icons/windows11/Square150x150Logo.scale-100.png';

  return (
    <Img
      src={logoUrl}
      alt="Onchain Bureau CRM"
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
