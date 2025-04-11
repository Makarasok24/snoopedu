
const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-[161px] bg-secondary mt-2">
      <div className="flex flex-col gap-5 items-center">
        <p>
          ©Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <img
          className="w-[48px] md:w-[96px]"
          src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/logo.svg"
          alt="snoopedu logo"
        />
      </div>

    </footer>
  );
};

export default Footer;
