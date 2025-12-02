import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const navigationLinks = [
  { label: "home", href: "#", active: false },
  { label: "About", href: "#", active: false },
  { label: "Contact", href: "#", active: false },
  { label: "Products", href: "#", active: true },
  { label: "Stores", href: "#", active: false },
];

const products = [
  {
    id: 1,
    name: "zit zitoun",
    farm: "tizi_wezou_farm",
    price: "700Da/Liter",
    image: "/image-17.png",
  },
  {
    id: 2,
    name: "toumatich",
    farm: "boumerdas_lands",
    price: "120Da/Kg",
    image: "/rectangle-167.png",
  },
  {
    id: 3,
    name: "batata",
    farm: "setif_mezloug_farms",
    price: "700Da/Kg",
    image: "/rectangle-166.png",
  },
  {
    id: 4,
    name: "Asel_nature",
    farm: "jijel_mointains_farm",
    price: "6000Da/jar",
    image: "/image-19.png",
  },
  {
    id: 5,
    name: "deglet_nour",
    farm: "beskra_jnan",
    price: "700Da/Kg",
    image: "/image-18.png",
  },
  {
    id: 6,
    name: "moudarine",
    farm: "djnane_mou9rane_amizour",
    price: "150Da/Kg",
    image: "/rectangle-168.png",
  },
  {
    id: 7,
    name: "fromage",
    farm: "boumerdas",
    price: "700Da/Kg",
    image: "/rectangle-172.png",
  },
  {
    id: 8,
    name: "lben_elmaraa",
    farm: "setif_farms_mezloug",
    price: "140Da/Liter",
    image: "/rectangle-173.png",
  },
  {
    id: 9,
    name: "halib_frech",
    farm: "mila_farms",
    price: "150Da/Liter",
    image: "/rectangle-169.png",
  },
];

const categories = [
  "Fruits",
  "Vegetables",
  "Oils",
  "Honey",
  "Dairy",
  "Legumes",
];

const seasonalOffers = [
  {
    id: 1,
    date: "21/03 → 20/06",
    title:
      "Welcome to Malek Farms. We are offering a fresh pomegranate deal: buy 10 kg and get 25% off instantly.",
    subtitle: "Limited offer",
    image: "/pexels-vlada-karpovich-6202958-1.png",
    featured: true,
  },
  {
    id: 2,
    date: "21/03 → 20/06",
    title:
      "Al Baraka Farm is offering a new deal: buy more than 10 kg and get 1/4 of the total for free.",
    image: "/pexels-polina-tankilevitch-4443160-1.png",
    featured: false,
  },
  {
    id: 3,
    date: "21/03 → 20/06",
    title:
      "Welcome to Malek Farms. We are offering a 70% discount for every 15 kg of bananas you buy from us.",
    image: "/pexels-fauxels-3184431-1.png",
    featured: false,
  },
  {
    id: 4,
    date: "21/03 → 20/06",
    title:
      "Welcome to Malek Farms. We are offering a special 70% discount for every 15 kg of fresh pork purchased today",
    image: "/pexels-agk42-2599244-1.png",
    featured: false,
  },
];

export const Products = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <header className="bg-[#3b5e60] h-[99px] flex items-center justify-between px-[206px]">
        <img className="w-[115px]" alt="Vector" src="/vector.svg" />

        <nav className="flex items-center gap-8">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${
                link.active
                  ? "[font-family:'Helvetica-Bold',Helvetica] font-bold"
                  : "[font-family:'Helvetica-Regular',Helvetica] font-normal"
              } text-white text-lg tracking-[0] leading-normal whitespace-nowrap`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-normal whitespace-nowrap">
            login
          </button>
          <Button className="bg-white text-[#3b5e60] hover:bg-white/90 rounded-[14px] h-8 px-4 [font-family:'Helvetica-Bold',Helvetica] font-bold text-lg">
            sign up
          </Button>
        </div>
      </header>

      <section className="bg-[#eff2f2] py-6 px-[206px]">
        <div className="flex items-center gap-8">
          <div className="relative flex-shrink-0">
            <img
              className="w-[270px] h-[406px] object-cover"
              alt="Farmer"
              src="/image-32.png"
            />
            <img
              className="absolute top-[-30px] left-6 w-[98px] h-[108px] object-cover"
              alt="Decoration"
              src="/image-15.png"
            />
            <img
              className="absolute bottom-[105px] right-[-123px] w-[105px] h-[110px] object-cover"
              alt="Decoration"
              src="/image-23.png"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#3b5e60] text-5xl tracking-[0] leading-[39.5px]">
              Discover our <br />
              products
            </h1>

            <img
              className="w-[95px] h-[25px]"
              alt="Rating"
              src="/group-6.png"
            />

            <p className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#3b5e60] text-[21px] tracking-[0] leading-normal">
              Fresh from Our Farmers, Directly to You
            </p>

            <p className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[#3b5e60] text-[21px] tracking-[0] leading-normal max-w-[502px]">
              Discover local fruits, vegetables, and farm products while
              supporting Algeria&apos;s small producers
            </p>

            <div className="relative max-w-[347px]">
              <Input
                placeholder="search for a Product"
                className="h-[52px] rounded-[20px] border-[#347362] pl-6 pr-12 [font-family:'Helvetica-Regular',Helvetica] text-lg"
              />
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-800" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3b5e60] py-12 px-[206px]">
        <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-normal mb-8">
          SearchIcon by Category
        </h2>

        <div className="flex justify-end mb-8">
          <Select>
            <SelectTrigger className="w-[306px] bg-[#eff2f2] rounded-lg h-auto p-2.5 border-0">
              <SelectValue
                placeholder="Choose category"
                className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#346c6f80] text-base"
              />
            </SelectTrigger>
            <SelectContent className="w-[306px] bg-white rounded-lg">
              {categories.map((category, index) => (
                <SelectItem
                  key={index}
                  value={category.toLowerCase()}
                  className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-black text-base py-2.5 px-3"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-3xl border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    className="w-full h-[241px] object-cover p-[17px]"
                    alt={product.name}
                    src={product.image}
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#3b5e60] text-[21px] tracking-[0] leading-normal mb-2">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-normal mb-2">
                    {product.farm}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-[#786c4c] text-xs tracking-[0] leading-normal">
                      price :{product.price}
                    </p>
                    <Button className="bg-[#347362] hover:bg-[#347362]/90 rounded-[5px] h-[21px] px-2 [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[9px]">
                      See details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            className="w-[116px] h-[53px]"
            alt="Pagination"
            src="/group-338.png"
          />
        </div>
      </section>

      <section className="bg-white py-12 px-[206px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3b5e60] text-[55px] tracking-[0] leading-[81px] mb-8">
          Taste the Season
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <div>
            {seasonalOffers
              .filter((offer) => offer.featured)
              .map((offer) => (
                <Card
                  key={offer.id}
                  className="bg-white border-0 rounded-[15px] overflow-hidden mb-6"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-96 object-cover rounded-[15px]"
                      alt="Seasonal offer"
                      src={offer.image}
                    />
                    <div className="p-6">
                      <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[27px] tracking-[0] leading-[50px] mb-2">
                        {offer.date}
                      </p>
                      <p className="[font-family:'Poppins',Helvetica] font-bold text-[#3b5e60] text-[22px] tracking-[0] leading-[34px] mb-2">
                        {offer.title}
                      </p>
                      <p className="[font-family:'Inter',Helvetica] font-bold text-black text-lg tracking-[0] leading-[38px]">
                        {offer.subtitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="flex flex-col gap-6">
            {seasonalOffers
              .filter((offer) => !offer.featured)
              .map((offer) => (
                <Card
                  key={offer.id}
                  className="bg-white border-0 rounded-[15px] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex gap-6 p-4">
                      <img
                        className="w-[185px] h-[175px] object-cover rounded-[15px] flex-shrink-0"
                        alt="Seasonal offer"
                        src={offer.image}
                      />
                      <div className="flex flex-col justify-center">
                        <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[27px] tracking-[0] leading-[50px] mb-2">
                          {offer.date}
                        </p>
                        <p className="[font-family:'Poppins',Helvetica] font-bold text-[#3b5e60] text-[22px] tracking-[0] leading-7">
                          {offer.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
