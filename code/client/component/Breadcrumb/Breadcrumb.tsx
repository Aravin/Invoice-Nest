export default function PageBreadcrumb({ title, subTitle }: {
  title: string;
  subTitle?: string,
}) {

  return (
    <div className="p-2 m-2">
      <strong className='px-4'>{title}</strong>
      <span>{subTitle}</span>
    </div>

  )
}