import "./SectionTitle.css"

export default function SectionTitle({title}) {
    return (
        <div className="section-title-container">
            <h1 className="section-title-text">{title}</h1>
            <hr className="section-title-hr"/>
        </div>
    )
}