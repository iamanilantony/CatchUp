import Modal from "@/components/shared/modal";
import { Button } from "@/components/ui/Button";
import { ContactCreationRequest } from "@/lib/validators/contact";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from "react";
import { useMutation } from "react-query";

function AddContactModalHelper({
  showAddContactModal,
  setShowAddContactModal
}: {
  showAddContactModal: boolean;
  setShowAddContactModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<ContactCreationRequest>({
    name: "",
    duration: 0,
    relation: ""
  });

  const router = useRouter();

  const { name, duration, relation } = data;

  const { mutate: createContact } = useMutation({
    mutationFn: async ({
      name,
      duration,
      relation
    }: ContactCreationRequest) => {
      const payload: ContactCreationRequest = {
        name,
        duration,
        relation
      };

      const { data } = await axios.post("/api/contact/create", payload);
      return data;
    },
    onError: () => {
      return;
    },
    onSuccess: () => {
      router.push("");
      //toast
    }
  });

  return (
    <Modal
      showModal={showAddContactModal}
      setShowModal={setShowAddContactModal}
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
        <h3 className="text-lg font-medium">Create a new Contact</h3>
        <Link href="/contacts">
          <a className="text-center text-xs text-gray-500 underline underline-offset-4 hover:text-gray-400">
            Show Your current contacts
          </a>
        </Link>
        <form
          onSubmit={async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const response = await createContact(data);
            // Handle the response as needed
          }}
          className="flex flex-col space-y-6 bg-gray-50 px-4 py-8 text-left sm:px-16"
        >
          <div>
            <label htmlFor="name" className="items flex">
              <p className="block text-sm font-medium text-gray-700">
                Contact Name
              </p>
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                name="name"
                id="name"
                type="text"
                required
                autoFocus
                autoComplete="off"
                className="block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                aria-invalid="true"
              />
            </div>
          </div>
          <label htmlFor="duration" className="items flex">
            <p className="block text-sm font-medium text-gray-700">
              Duration to contact (in days)
            </p>
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="duration"
              id="duration"
              type="number"
              // min='2' max = '39'
              required
              autoComplete="off"
              className="block w-full border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
              placeholder="How frequently do you want to contact"
              value={duration}
              onChange={(e) => {
                setData({
                  ...data,
                  duration: e.currentTarget.value as unknown as number
                });
              }}
              aria-invalid="true"
            />
          </div>
          <label htmlFor="duration" className="items flex">
            <p className="block text-sm font-medium text-gray-700">
              Relationship
            </p>
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              name="relation"
              id="relation"
              type="number"
              // min='2' max = '39'
              required
              autoComplete="off"
              className="block w-full border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
              placeholder="How frequently do you want to contact"
              value={relation}
              onChange={(e) => {
                setData({
                  ...data,
                  relation: e.currentTarget.value
                });
              }}
              aria-invalid="true"
            />
          </div>
          <Button title="create project" />
        </form>
      </div>
    </Modal>
  );
}

export function useAddContactModal() {
  const [showAddContactModal, setShowAddContactModal] = useState(false);

  const AddContactModal = useCallback(() => {
    return (
      <AddContactModalHelper
        showAddContactModal={showAddContactModal}
        setShowAddContactModal={setShowAddContactModal}
      />
    );
  }, [showAddContactModal]);

  return useMemo(
    () => ({ setShowAddContactModal, AddContactModal }),
    [setShowAddContactModal, AddContactModal]
  );
}
