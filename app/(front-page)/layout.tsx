import DefaultLayout from "../components/layouts/DefaultLayout";

export default function FrontPageLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}