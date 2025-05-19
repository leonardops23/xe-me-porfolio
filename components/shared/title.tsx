interface TitleProps {
    title: String,
    subtitle: String,
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl">{title}</h3>
            <h2 className="mt-1 mb-2 text-gray-400">{subtitle}</h2>
        </div>
    )
}

export default Title;
