import { CheckCircleOutLine } from "@/utils/icons";

export default function WholesomeCare() {
  return (
    <section className="py-8 root_bg_img border border-white h-[32rem] flex items-center mt-12">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Our Elderly Loved Ones <br className="hidden lg:block" /> Deserve{" "}
          <span className="text-teal-600">Wholesome Care</span>
        </h2>
        <p className="mt-4 text-white text-base lg:mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsum,
          numquam et, corporis distinctio consectetur neque earum vero excepturi
          omnis accusantium quibusdam iure iusto laudantium minus natus
          voluptate nihil dolorum tempora pariatur facilis. Ex non repellendus
          alias quasi et quam.
        </p>
        <div className="flex flex-col justify-center gap-8 mt-6 lg:w-3/5 mx-auto">
          <span className="col-span-3 mx-auto text-white flex items-center gap-2">
            <CheckCircleOutLine color="white" size={16} /> Quality1
          </span>
          <div className="flex justify-between gap-8">
            <span className="col-span-1 text-white flex items-center gap-2">
              <CheckCircleOutLine color="white" size={16} /> Quality1
            </span>
            <span className="col-span-1 text-white flex items-center gap-2">
              <CheckCircleOutLine color="white" size={16} /> Quality1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
