import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="w-full h-16 flex items-center border ">
        <div className="flex">
          <RxHamburgerMenu size={25} className="ml-2 mr-2" />
          <h1 className="font-thin">Menu</h1>
        </div>
        <div className="m-auto">
          <img
            className="w-36"
            src="https://media.licdn.com/dms/image/C4D12AQGtlIphDBXGaQ/article-cover_image-shrink_600_2000/0/1613893255104?e=2147483647&v=beta&t=ltrmQpcaSu0eHA1sTfQe-Ogh-LhIW3jPg1mFEybzOEM"
            alt="Inshort-logo"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
