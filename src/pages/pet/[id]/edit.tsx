import { PetForm } from "@/components/shared";
import { Loader } from "@/components/common";
import { useCurrentUser } from "@/hooks/useUser";
import fetcher from "@/lib/fetcher";
import { IPet } from "@/types/types";
import { useRouter } from "next/router";
import useSWR from "swr";

const EditPet = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useCurrentUser();
  const { data: pet, error } = useSWR<{ data: IPet }>(
    id ? `/api/pets/${id}` : null,
    fetcher
  );
  // data of SWR = data: { data: [] }
  if (!user && typeof window !== "undefined") router.push("/");
  if (error) return <p>Failed to load</p>;
  if (!pet) return <Loader />;
  if (!pet.data.isOwnPet && typeof window !== "undefined") router.push("/");

  return (
    <div className="p-4 laptop:px-20 my-20">
      <PetForm
        formId="edit-pet-form"
        petForm={pet.data}
        forNewPet={false}
        title="Edit Pet details"
      />
    </div>
  );
};

export default EditPet;
