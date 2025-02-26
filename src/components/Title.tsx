interface TitleProps {
    title: string
}
const Title = ({title} : TitleProps) => {
  return (
    <h1 className="text-4xl font-bold text-center my-10">
        {title}
    </h1>
  )
}

export default Title