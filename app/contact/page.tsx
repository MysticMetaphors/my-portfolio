import DefaultLayout from "../components/layouts/DefaultLayout";
import Contact from "../sections/Contact";

export default function contact() {
  return (
    <DefaultLayout>
      <div className="sm:p-0 pt-25 bg-black-primary">
        <Contact />
      </div>
    </DefaultLayout>
  )
}