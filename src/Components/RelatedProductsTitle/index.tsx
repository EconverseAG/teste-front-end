import './style.scss'

type Props = {
    title: string
    subTitle?: string
    hr?: boolean 
}

function RelatedProductsTitle({title, subTitle, hr = true}: Props) {
    return (
        <div className="RelatedProductsTitle">
            {hr && <hr />} 
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
        </div>
    )
}

export default RelatedProductsTitle;
