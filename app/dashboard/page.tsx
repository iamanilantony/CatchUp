import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { useContext } from "react";
import { ModalContext } from "../ui/modal-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/app/ui/card";
import PendingTasks from "@/components/home/pending-tasks";
import HabitCard from "@/components/home/habits";

const page = () => {
  // const { setShowAddContactModal } = useContext(ModalContext);

  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="mb-4">
          <h4 className="animate-fade-up font-display opacity-1 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-2xl tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl md:leading-[5rem]">
            Good morning <b>Anil Antony</b>{" "}
            <span className="text-[#0F6FDE]">✌️</span>
          </h4>
          <p>Get started with your beautiful day today</p>
        </div>
        <div className="flex justify-between">
          <HabitCard />
          <PendingTasks />
        </div>
        <div className="mb-10" />
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <div className="flex justify-between p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
    </>
  );
};

export default page;
