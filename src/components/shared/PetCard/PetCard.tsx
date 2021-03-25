import { IPet } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface IProps {
  pet: IPet;
}

const displayAge = (age: number) => {
  const year = age > 1 ? "years" : "year";

  if (age >= 1) {
    return `${age} ${year} old`;
  } else {
    return `< 1 year old`;
  }
};

const PetCard: FC<IProps> = ({ pet }) => {
  const router = useRouter();

  return (
    <div
      className="w-full h-60 laptop:h-94 relative text-white cursor-pointer"
      onClick={() => router.push(`/pet/${pet._id}`)}
    >
      <div className="w-full h-90% relative group">
        {pet.country && (
          <div
            className="w-10 h-10 rounded-full !bg-no-repeat !bg-center absolute -top-3 -right-3 z-10 shadow-lg !bg-size-flag"
            style={{
              background: `#f1f1f1 url(${`https://www.countryflags.io/${pet.country?.value}/shiny/64.png`})`,
            }}
            title={pet.country?.label || ""}
          />
        )}
        {/* ------ FRONT CARD ----- */}
        <div className="w-full h-full p-2 !bg-no-repeat !bg-cover !bg-center absolute top-0 left-0 rounded-lg overflow-hidden shadow-md">
          <Image
            alt={`${pet.name}'s photo`}
            className="w-full h-full object-cover absolute top-0 right-0"
            src={pet.image.url}
            layout="fill"
            loading="lazy"
          />
        </div>
      </div>
      <h4 className="mt-1 text-gray-800">{pet.name}</h4>
    </div>
  );
};

export default PetCard;
